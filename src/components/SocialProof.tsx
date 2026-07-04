import { useLanguage } from '@/hooks/useLanguage';
import { Star, Download, Globe, Car } from 'lucide-react';

export const SocialProof = () => {
  const { t } = useLanguage();

  const items = [
    { icon: Star, text: t.socialProof.rating },
    { icon: Download, text: t.socialProof.downloads },
    { icon: Globe, text: t.socialProof.languages },
    { icon: Car, text: t.socialProof.vehicles },
  ];

  return (
    <section className="py-8 px-4 border-y border-border/30 bg-card/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center justify-center gap-2 text-center">
                <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
