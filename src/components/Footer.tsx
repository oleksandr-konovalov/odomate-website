import { useLanguage } from '@/hooks/useLanguage';
import logo from '@/assets/logo.png';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-primary/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Odomate" className="h-8 w-8" />
            <span className="text-xl font-bold brand-gradient">Odomate</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-muted-foreground">
            <a 
              href="/privacy-policy" 
              className="hover:text-primary transition-colors"
            >
              {t.footer.privacy}
            </a>
            <a 
              href="/terms-of-service" 
              className="hover:text-primary transition-colors"
            >
              {t.footer.terms}
            </a>
            <span>© {currentYear} Odomate. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};