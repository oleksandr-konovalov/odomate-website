import { useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { ArticleSchema } from '@/components/StructuredData';
import { useState, useEffect } from 'react';

// Import HTML files
import privacyEN from '@/legal/privacy_policy/PRIVACY_POLICY_EN.html?raw';
import privacyRU from '@/legal/privacy_policy/PRIVACY_POLICY_RU.html?raw';
import privacyFR from '@/legal/privacy_policy/PRIVACY_POLICY_FR.html?raw';
import privacyDE from '@/legal/privacy_policy/PRIVACY_POLICY_DE.html?raw';
import privacyPL from '@/legal/privacy_policy/PRIVACY_POLICY_PL.html?raw';
import privacyES from '@/legal/privacy_policy/PRIVACY_POLICY_ES.html?raw';
import privacyUK from '@/legal/privacy_policy/PRIVACY_POLICY_UK.html?raw';

const privacyPolicies: Record<string, string> = {
  en: privacyEN,
  ru: privacyRU,
  fr: privacyFR,
  de: privacyDE,
  pl: privacyPL,
  es: privacyES,
  uk: privacyUK,
};

export const Privacy = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Extract body content from HTML
    const fullHtml = privacyPolicies[language] || privacyPolicies.en;
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
        /(?<!<a[^>]*>)(?<![@\/"'>])\b(odomate\.net)(?!["'<])(?![^<]*<\/a>)/gi,
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
        title={`${t.privacy.title} | Odomate`}
        description="Read Odomate's privacy policy to understand how we collect, use, and protect your personal data. GDPR compliant and transparent data practices."
        url="https://odomate.net/privacy"
        type="article"
      />
      <ArticleSchema 
        title={t.privacy.title}
        description="Odomate Privacy Policy - How we handle your data"
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