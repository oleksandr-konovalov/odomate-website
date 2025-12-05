import { useLanguage } from '@/hooks/useLanguage';
import { Zap, Smartphone, Layers, Target, Settings, Clock } from 'lucide-react';

const benefitIcons = [Zap, Smartphone, Layers, Target, Settings, Clock];

export const Benefits = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 bg-background/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="brand-gradient">{t.benefits.title}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.benefits.items.map((benefit, index) => {
            const Icon = benefitIcons[index];
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
