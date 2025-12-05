import { LanguageProvider } from '@/hooks/useLanguage';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Benefits } from '@/components/Benefits';
import { CTABanner } from '@/components/CTABanner';
import { Features } from '@/components/Features';
import { TargetAudience } from '@/components/TargetAudience';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { GDPRBanner } from '@/components/GDPRBanner';
import { SEO } from '@/components/SEO';
import { OrganizationSchema, WebSiteSchema, SoftwareApplicationSchema, FAQSchema } from '@/components/StructuredData';
import { useLanguage } from '@/hooks/useLanguage';

const IndexContent = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO 
        url="https://odomate.net"
        image="https://odomate.net/og-image.jpg"
      />
      <OrganizationSchema />
      <WebSiteSchema />
      <SoftwareApplicationSchema />
      <FAQSchema items={t.faq.items} />
      
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Features />
          <Benefits />
          <Testimonials />
          <CTABanner />
          <TargetAudience />
          <FAQ />
          <CTABanner />
          <Contact />
        </main>
        <Footer />
        <GDPRBanner />
      </div>
    </>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <IndexContent />
    </LanguageProvider>
  );
};

export default Index;
