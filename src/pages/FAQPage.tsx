import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { ArticleSchema } from '@/components/StructuredData';
import { useLanguage } from '@/hooks/useLanguage';
import { useEffect, useState } from 'react';

// Import HTML files
import faqEN from '@/legal/faq/FAQ_EN.html?raw';
import faqRU from '@/legal/faq/FAQ_RU.html?raw';
import faqFR from '@/legal/faq/FAQ_FR.html?raw';
import faqDE from '@/legal/faq/FAQ_DE.html?raw';
import faqPL from '@/legal/faq/FAQ_PL.html?raw';
import faqES from '@/legal/faq/FAQ_ES.html?raw';
import faqUK from '@/legal/faq/FAQ_UK.html?raw';

const faqDocs: Record<string, string> = {
  en: faqEN,
  ru: faqRU,
  fr: faqFR,
  de: faqDE,
  pl: faqPL,
  es: faqES,
  uk: faqUK,
};

export const FAQPage = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fullHtml = faqDocs[language] || faqDocs.en;
    const parser = new DOMParser();
    const doc = parser.parseFromString(fullHtml, 'text/html');
    // Rewrite internal doc links to proper app routes
    doc.querySelectorAll('a[href]').forEach((a) => {
      const href = (a.getAttribute('href') || '').trim();
      const lower = href.toLowerCase();
      if (!href) return;
      // Map any privacy policy doc links to /privacy
      if (lower.includes('privacy_policy')) {
        a.setAttribute('href', '/privacy');
      }
      // Map any terms of service doc links to /terms
      else if (lower.includes('terms_of_service')) {
        a.setAttribute('href', '/terms');
      }
      // Map any gdpr doc links to /gdpr
      else if (lower.includes('gdpr')) {
        a.setAttribute('href', '/gdpr');
      }
      // Otherwise leave as is
    });

    const bodyContent = doc.body.innerHTML;
    setHtmlContent(bodyContent);
  }, [language]);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`FAQ | Odomate`}
        description="Frequently Asked Questions about Odomate. Learn about features, data, privacy, and support."
        url="https://odomate.net/faq"
        type="article"
      />
      <ArticleSchema 
        title="FAQ"
        description="Odomate Frequently Asked Questions"
        image="https://odomate.net/og-image.jpg"
        datePublished="2025-09-28"
        dateModified={new Date().toISOString().split('T')[0]}
      />
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-12 hover:text-foreground hover:bg-primary/10 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.nav.backToHome}
          </Button>

          <div 
            className="privacy-policy-content prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};
