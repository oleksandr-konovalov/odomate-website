import { useLanguage } from '@/hooks/useLanguage';
import appleBadge from '@/assets/apple-badge.svg';
import googleBadge from '@/assets/google-badge.svg';
import { StoreComingSoonDialog } from '@/components/StoreComingSoonDialog';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="px-4 pt-20 pb-2">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-5 mb-6">
          {/* Brand Line */}
          <div className="space-y-2">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold brand-gradient">
              Odomate
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              Your car. Your buddy.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-6 pt-4">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground">
              {t.hero.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>

          </div>

        {/* App Store Badges */}
        <div className="flex flex-row gap-2 justify-center pt-4 max-w-5xl mx-auto">
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
    </section>
  );
};