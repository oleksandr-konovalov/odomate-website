import { LanguageProvider } from '@/hooks/useLanguage';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { GDPRBanner } from '@/components/GDPRBanner';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Features />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <GDPRBanner />
      </div>
    </LanguageProvider>
  );
};

export default Index;
