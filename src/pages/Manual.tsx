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
import manualEN from '@/legal/manual/USER_MANUAL_EN.html?raw';
import manualRU from '@/legal/manual/USER_MANUAL_RU.html?raw';
import manualFR from '@/legal/manual/USER_MANUAL_FR.html?raw';
import manualDE from '@/legal/manual/USER_MANUAL_DE.html?raw';
import manualPL from '@/legal/manual/USER_MANUAL_PL.html?raw';
import manualES from '@/legal/manual/USER_MANUAL_ES.html?raw';
import manualUK from '@/legal/manual/USER_MANUAL_UK.html?raw';

const manuals: Record<string, string> = {
  en: manualEN,
  ru: manualRU,
  fr: manualFR,
  de: manualDE,
  pl: manualPL,
  es: manualES,
  uk: manualUK,
};

export const Manual = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fullHtml = manuals[language] || manuals.en;
    const parser = new DOMParser();
    const doc = parser.parseFromString(fullHtml, 'text/html');

    // Normalize internal links to SPA routes
    doc.querySelectorAll('a[href]').forEach((a) => {
      const href = (a.getAttribute('href') || '').trim();
      const lower = href.toLowerCase();
      if (!href) return;
      if (lower.includes('privacy_policy')) {
        a.setAttribute('href', '/privacy');
      } else if (lower.includes('terms_of_service')) {
        a.setAttribute('href', '/terms');
      } else if (lower.includes('gdpr')) {
        a.setAttribute('href', '/gdpr');
      } else if (lower.includes('faq')) {
        a.setAttribute('href', '/faq');
      }
    });

    const bodyContent = doc.body.innerHTML;
    setHtmlContent(bodyContent);
  }, [language]);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`User Manual | Odomate`}
        description="User Manual for Odomate. Learn how to use features, manage data, and get the most out of the app."
        url="https://odomate.net/manual"
        type="article"
      />
      <ArticleSchema 
        title="User Manual"
        description="Odomate User Manual"
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
            Back to Home
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
