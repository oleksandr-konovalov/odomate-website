import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/hooks/useLanguage';

export const FAQ = () => {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="brand-gradient">{t.faq.title}</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {t.faq.items.slice(0, 5).map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30 transition-all hover:border-primary/20"
            >
              <AccordionTrigger className="text-left hover:text-primary hover:no-underline py-6">
                <span className="font-semibold text-lg">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground leading-relaxed text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};