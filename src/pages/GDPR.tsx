import { useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { ArticleSchema } from '@/components/StructuredData';
import { useEffect, useState } from 'react';

// Import HTML files
import gdprEN from '@/legal/gdpr/GDPR_COMPLIANCE_EN.html?raw';
import gdprRU from '@/legal/gdpr/GDPR_COMPLIANCE_RU.html?raw';
import gdprFR from '@/legal/gdpr/GDPR_COMPLIANCE_FR.html?raw';
import gdprDE from '@/legal/gdpr/GDPR_COMPLIANCE_DE.html?raw';
import gdprPL from '@/legal/gdpr/GDPR_COMPLIANCE_PL.html?raw';
import gdprES from '@/legal/gdpr/GDPR_COMPLIANCE_ES.html?raw';
import gdprUK from '@/legal/gdpr/GDPR_COMPLIANCE_UK.html?raw';

const gdprDocs: Record<string, string> = {
  en: gdprEN,
  ru: gdprRU,
  fr: gdprFR,
  de: gdprDE,
  pl: gdprPL,
  es: gdprES,
  uk: gdprUK,
};

export const GDPR = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fullHtml = gdprDocs[language] || gdprDocs.en;
    const parser = new DOMParser();
    const doc = parser.parseFromString(fullHtml, 'text/html');

    // Fix internal document links
    doc.querySelectorAll('a[href]').forEach((a) => {
      const href = (a.getAttribute('href') || '').trim();
      const lower = href.toLowerCase();
      if (!href) return;
      if (lower.includes('privacy_policy')) {
        a.setAttribute('href', '/privacy');
        if (a.textContent?.includes('.md')) {
          a.textContent = a.textContent.replace(/\.md$/, '');
        }
      } else if (lower.includes('terms_of_service')) {
        a.setAttribute('href', '/terms');
        if (a.textContent?.includes('.md')) {
          a.textContent = a.textContent.replace(/\.md$/, '');
        }
      } else if (lower.includes('gdpr')) {
        a.setAttribute('href', '/gdpr');
        if (a.textContent?.includes('.md')) {
          a.textContent = a.textContent.replace(/\.md$/, '');
        }
      }
    });

    // Add links to email and website mentions
    doc.querySelectorAll('p, li').forEach((el) => {
      let html = el.innerHTML;
      // First replace email with mailto link (only if not already in an anchor tag)
      html = html.replace(
        /(?<!<a[^>]*>)(?<!href=["'])support@odomate\.net(?![^<]*<\/a>)/gi,
        '<a href="mailto:support@odomate.net" class="text-primary hover:underline">support@odomate.net</a>'
      );
      // Replace standalone website mentions (only if not already in an anchor tag)
      html = html.replace(
        /(?<!<a[^>]*>)(?<![@\\/"'>])\b(odomate\.net)(?!["'<])(?![^<]*<\/a>)/gi,
        '<a href="https://odomate.net" class="text-primary hover:underline" target="_blank" rel="noopener">$1</a>'
      );
      el.innerHTML = html;
    });

    const bodyContent = doc.body.innerHTML;
    setHtmlContent(bodyContent);
  }, [language]);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`GDPR | Odomate`}
        description="Learn how Odomate complies with GDPR: data rights, processing, storage, and contact information."
        url="https://odomate.net/gdpr"
        type="article"
      />
      <ArticleSchema 
        title="GDPR Compliance"
        description="Odomate GDPR compliance information"
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
