import { useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Terms = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-8 hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-2 brand-gradient">{t.terms.title}</h1>
            <p className="text-muted-foreground mb-8">{t.terms.lastUpdated}</p>

            <div className="space-y-8">
              {t.terms.content.map((section, index) => (
                <section key={index} className="bg-card/50 rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-primary">{section.heading}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.text}</p>
                </section>
              ))}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};