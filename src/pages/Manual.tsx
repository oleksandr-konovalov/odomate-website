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
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fullHtml = manuals[language] || manuals.en;
    const parser = new DOMParser();
    const doc = parser.parseFromString(fullHtml, 'text/html');

    // Normalize internal links to SPA routes and fix text content
    doc.querySelectorAll('a[href]').forEach((a) => {
      const href = (a.getAttribute('href') || '').trim();
      const lower = href.toLowerCase();
      if (!href) return;
      if (lower.includes('privacy_policy')) {
        a.setAttribute('href', '/privacy');
        if (a.textContent?.includes('.md')) {
          a.textContent = 'Privacy Policy';
        }
      } else if (lower.includes('terms_of_service')) {
        a.setAttribute('href', '/terms');
        if (a.textContent?.includes('.md')) {
          a.textContent = 'Terms of Service';
        }
      } else if (lower.includes('gdpr')) {
        a.setAttribute('href', '/gdpr');
        if (a.textContent?.includes('.md')) {
          a.textContent = 'GDPR Compliance';
        }
      } else if (lower.includes('faq')) {
        a.setAttribute('href', '/faq');
        if (a.textContent?.includes('.md')) {
          a.textContent = 'FAQ';
        }
      }
    });

    // Replace .md references in <code> tags with links
    doc.querySelectorAll('code').forEach((code) => {
      const text = code.textContent || '';
      if (text.includes('.md')) {
        const link = document.createElement('a');
        if (text.toLowerCase().includes('privacy_policy')) {
          link.href = '/privacy';
          link.textContent = 'Privacy Policy';
        } else if (text.toLowerCase().includes('gdpr_compliance')) {
          link.href = '/gdpr';
          link.textContent = 'GDPR Compliance';
        } else if (text.toLowerCase().includes('terms_of_service')) {
          link.href = '/terms';
          link.textContent = 'Terms of Service';
        } else if (text.toLowerCase().includes('faq')) {
          link.href = '/faq';
          link.textContent = 'FAQ';
        }
        if (link.href) {
          link.className = 'text-primary hover:underline';
          code.replaceWith(link);
        }
      }
    });

    // Remove analytics opt-out line from all languages
    doc.querySelectorAll('li').forEach((li) => {
      const text = li.textContent || '';
      if (
        text.includes('Anonymous analytics') ||
        text.includes('Анонимная аналитика') ||
        text.includes('Анонімна аналітика') ||
        text.includes('Anonyme Analytik') ||
        text.includes('Analyses anonymes') ||
        text.includes('Analíticas anónimas') ||
        text.includes('Anonimowa analityka')
      ) {
        li.remove();
      }
    });

    // Also replace plain text mentions of .md files (not in links or code)
    const textNodes: Text[] = [];
    const walker = document.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT, null);
    let node;
    while ((node = walker.nextNode())) {
      if (node.textContent?.includes('.md')) {
        textNodes.push(node as Text);
      }
    }
    textNodes.forEach((textNode) => {
      let text = textNode.textContent || '';
      text = text.replace(/legal\/PRIVACY_POLICY_\w+\.md/gi, 'Privacy Policy');
      text = text.replace(/legal\/GDPR_COMPLIANCE_\w+\.md/gi, 'GDPR Compliance');
      text = text.replace(/legal\/TERMS_OF_SERVICE_\w+\.md/gi, 'Terms of Service');
      text = text.replace(/legal\/FAQ_\w+\.md/gi, 'FAQ');
      textNode.textContent = text;
    });

    // Add links to email and website mentions
    doc.querySelectorAll('p, li').forEach((el) => {
      let html = el.innerHTML;
      // First replace email with mailto link (must be before website replacement)
      html = html.replace(
        /support@odomate\.net/gi,
        '<a href="mailto:support@odomate.net" class="text-primary hover:underline">support@odomate.net</a>'
      );
      // Replace standalone website mentions (not already in links or email)
      html = html.replace(
        /(?<![@\/"'>])\b(odomate\.net)(?!["'<])/gi,
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
