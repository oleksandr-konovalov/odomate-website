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
import termsEN from '@/legal/terms/TERMS_OF_SERVICE_EN.html?raw';
import termsRU from '@/legal/terms/TERMS_OF_SERVICE_RU.html?raw';
import termsFR from '@/legal/terms/TERMS_OF_SERVICE_FR.html?raw';
import termsDE from '@/legal/terms/TERMS_OF_SERVICE_DE.html?raw';
import termsPL from '@/legal/terms/TERMS_OF_SERVICE_PL.html?raw';
import termsES from '@/legal/terms/TERMS_OF_SERVICE_ES.html?raw';
import termsUK from '@/legal/terms/TERMS_OF_SERVICE_UK.html?raw';

const termsOfService: Record<string, string> = {
  en: termsEN,
  ru: termsRU,
  fr: termsFR,
  de: termsDE,
  pl: termsPL,
  es: termsES,
  uk: termsUK,
};

export const Terms = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Extract body content from HTML
    const fullHtml = termsOfService[language] || termsOfService.en;
    const parser = new DOMParser();
    const doc = parser.parseFromString(fullHtml, 'text/html');
    const bodyContent = doc.body.innerHTML;
    setHtmlContent(bodyContent);
  }, [language]);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${t.terms.title} | Odomate`}
        description="Read Odomate's terms of service to understand your rights and responsibilities when using our car maintenance tracking app."
        url="https://odomate.net/terms"
        type="article"
      />
      <ArticleSchema 
        title={t.terms.title}
        description="Odomate Terms of Service - User agreement and conditions"
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