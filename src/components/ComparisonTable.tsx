import { useLanguage } from '@/hooks/useLanguage';
import { Check, Minus } from 'lucide-react';

export const ComparisonTable = () => {
  const { t } = useLanguage();

  const renderValue = (value: string) => {
    if (value === '✓') return <Check className="h-5 w-5 text-primary mx-auto" />;
    if (value === '—') return <Minus className="h-5 w-5 text-muted-foreground/40 mx-auto" />;
    return <span className="text-sm text-muted-foreground">{value}</span>;
  };

  return (
    <section className="py-12 md:py-16 px-4 bg-background/50">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="brand-gradient">{t.comparison.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.comparison.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto overflow-x-auto rounded-2xl border border-border/50">
          <table className="w-full">
            <thead>
              <tr className="bg-card/50 border-b border-border/50">
                <th className="text-left py-4 px-4 md:px-6 font-semibold text-foreground">
                  {t.comparison.feature}
                </th>
                <th className="text-center py-4 px-4 md:px-6 font-bold text-primary min-w-[100px]">
                  {t.comparison.odomate}
                </th>
                <th className="text-center py-4 px-4 md:px-6 font-medium text-muted-foreground min-w-[100px]">
                  {t.comparison.others}
                </th>
              </tr>
            </thead>
            <tbody>
              {t.comparison.rows.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-border/30 hover:bg-card/30 transition-colors ${index % 2 === 0 ? 'bg-transparent' : 'bg-card/10'}`}
                >
                  <td className="py-4 px-4 md:px-6 text-sm text-foreground font-medium">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 md:px-6 text-center">
                    {renderValue(row.odomate)}
                  </td>
                  <td className="py-4 px-4 md:px-6 text-center">
                    {renderValue(row.others)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
