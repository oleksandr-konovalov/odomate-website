import { useLanguage } from '@/hooks/useLanguage';
import { 
  Navigation, 
  BarChart3, 
  Bell, 
  Brain, 
  BookOpen, 
  Users 
} from 'lucide-react';

const featureIcons = [Navigation, BarChart3, Bell, Brain, BookOpen, Users];

export const Features = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="brand-gradient">{t.features.title}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.items.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <div
                key={index}
                className="feature-card p-8 rounded-2xl group"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};