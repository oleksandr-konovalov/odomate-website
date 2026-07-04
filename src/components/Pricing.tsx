import { useLanguage } from '@/hooks/useLanguage';
import { Check, Star, Building2, User } from 'lucide-react';
import appleBadge from '@/assets/apple-badge.svg';
import googleBadge from '@/assets/google-badge.svg';

const APP_STORE_URL = 'https://apps.apple.com/ua/app/odomate/id6754283341';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.aleksandrkonovalov.odomate';

export const Pricing = () => {
  const { t } = useLanguage();
  const plans = t.pricing.plans;

  const StoreBadges = () => (
    <div className="flex flex-row gap-2 justify-center">
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
        <img src={appleBadge} alt="Download on App Store" className="h-9 w-auto hover:opacity-90 transition-opacity" />
      </a>
      <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
        <img src={googleBadge} alt="Get it on Google Play" className="h-9 w-auto hover:opacity-90 transition-opacity" />
      </a>
    </div>
  );

  return (
    <section id="pricing" className="py-12 md:py-16 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="brand-gradient">{t.pricing.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Personal section */}
        <div className="max-w-5xl mx-auto mb-8 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-card to-card p-4 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <User className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">{t.pricing.plans.premium.name}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Free plan */}
            <div className="rounded-xl border-2 border-border/50 bg-background/50 p-4 md:p-6 flex flex-col w-full">
              <h4 className="text-xl font-bold text-foreground mb-1">{plans.free.name}</h4>
              <p className="text-sm text-muted-foreground mb-4">{plans.free.description}</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold text-foreground">{plans.free.price}</span>
                <span className="text-muted-foreground">{plans.free.period}</span>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                {plans.free.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <StoreBadges />
            </div>

            {/* Premium plan */}
            <div className="rounded-xl border-2 border-primary bg-background/50 p-4 md:p-6 flex flex-col relative shadow-lg shadow-primary/10 w-full">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-3 w-3 fill-white" />
                  {t.pricing.mostPopular}
                </span>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-1">{plans.premium.name}</h4>
              <p className="text-sm text-muted-foreground mb-4">{plans.premium.description}</p>
              <div className="flex flex-col items-center md:flex-row md:items-baseline md:gap-x-3 gap-y-1 mb-6 md:justify-start">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">{plans.premium.priceMonthly}</span>
                  <span className="text-muted-foreground">{t.pricing.perMonth}</span>
                </div>
                <span className="text-muted-foreground text-sm font-medium">{t.pricing.or}</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">{plans.premium.priceYearly}</span>
                  <span className="text-muted-foreground">{t.pricing.perYear}</span>
                </div>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                {plans.premium.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <StoreBadges />
            </div>
          </div>
        </div>

        {/* B2B plans */}
        <div className="max-w-5xl mx-auto rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-card to-card p-4 md:p-8">
          <div className="flex items-center gap-3 mb-2">
            <Building2 className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">{plans.b2b.name}</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-6">{plans.b2b.description}</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 pt-4">
            {plans.b2b.tiers.map((tier, i) => (
              <div key={i} className={`rounded-xl p-3 md:p-5 text-center relative ${i === 1 ? 'border-2 border-primary bg-background/50 shadow-lg shadow-primary/10' : 'border border-border/50 bg-background/50'}`}>
                {i === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full flex items-center gap-1 whitespace-nowrap">
                      <Star className="h-3 w-3 fill-white" />
                      {t.pricing.mostPopular}
                    </span>
                  </div>
                )}
                <h4 className="font-semibold text-foreground mb-1">{tier.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{tier.drivers}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-xs text-muted-foreground">{tier.period}</span>
                </div>
              </div>
            ))}
          </div>

          <ul className="grid md:grid-cols-2 gap-2 mb-6">
            {plans.b2b.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/30">
            <a
              href="mailto:app@odomate.net?subject=B2B Fleet Management Inquiry"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              {plans.b2b.contactUs} →
            </a>
            <StoreBadges />
          </div>
        </div>
      </div>
    </section>
  );
};
