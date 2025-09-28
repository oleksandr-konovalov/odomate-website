import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { ExternalLink } from 'lucide-react';
import logo from '@/assets/logo.png';
import appMockup from '@/assets/app-mockup.png';
import appleBadge from '@/assets/apple-badge.png';
import googleBadge from '@/assets/google-badge.png';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-8">
          {/* Brand Line */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
            <img src={logo} alt="Odomate" className="h-12 w-12 animate-pulse-glow" />
            <div>
              <h2 className="text-2xl font-bold brand-gradient">Odomate</h2>
              <p className="text-sm text-muted-foreground italic">"Your car. Your body."</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="brand-gradient">{t.hero.title}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {t.hero.subtitle}
            </p>
          </div>

          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="hero-button h-14 px-0 overflow-hidden" asChild>
              <a href="#" className="flex items-center">
                <img src={appleBadge} alt="Download on App Store" className="h-12 w-auto" />
              </a>
            </Button>
            <Button className="hero-button h-14 px-0 overflow-hidden" asChild>
              <a href="#" className="flex items-center">
                <img src={googleBadge} alt="Get it on Google Play" className="h-12 w-auto" />
              </a>
            </Button>
          </div>

          {/* Secondary CTA */}
          <div className="pt-4">
            <Button variant="outline" className="group" asChild>
              <a href="#features">
                Explore Features
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>

        {/* App Mockup */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75 animate-pulse-glow"></div>
            <img 
              src={appMockup} 
              alt="Odomate App Interface" 
              className="relative z-10 max-w-sm md:max-w-md lg:max-w-lg w-full animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};