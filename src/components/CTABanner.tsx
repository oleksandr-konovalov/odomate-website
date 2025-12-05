import { useLanguage } from '@/hooks/useLanguage';
import appleBadge from '@/assets/apple-badge.svg';
import googleBadge from '@/assets/google-badge.svg';
import { StoreComingSoonDialog } from '@/components/StoreComingSoonDialog';

export const CTABanner = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="brand-gradient">{t.cta.title}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>
            <div className="flex flex-row gap-3 justify-center">
              <StoreComingSoonDialog>
                <img 
                  src={appleBadge}
                  alt="Download on App Store" 
                  className="h-10 md:h-14 w-auto hover:opacity-90 transition-opacity"
                />
              </StoreComingSoonDialog>
              <StoreComingSoonDialog>
                <img 
                  src={googleBadge} 
                  alt="Get it on Google Play" 
                  className="h-10 md:h-14 w-auto hover:opacity-90 transition-opacity"
                />
              </StoreComingSoonDialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
