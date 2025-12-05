import { useLanguage } from '@/hooks/useLanguage';
import logo from '@/assets/logo.png';
import appleBadge from '@/assets/apple-badge.svg';
import googleBadge from '@/assets/google-badge.svg';
import { StoreComingSoonDialog } from '@/components/StoreComingSoonDialog';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 border-t border-primary/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md"></div>
                <img src={logo} alt="Odomate" className="relative h-10 w-10 rounded-full ring-2 ring-primary/30" />
              </div>
              <span className="text-2xl font-bold brand-gradient">Odomate</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your car. Your buddy. Smart car maintenance tracking with AI-powered insights.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{t.footer.quickLinks}</h3>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-x-6 gap-y-2">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {t.nav.features}
              </a>
              <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {t.nav.faq}
              </Link>
              <Link to="/manual" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {t.footer.manual}
              </Link>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {t.nav.contact}
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{t.footer.legal}</h3>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-x-6 gap-y-2">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {t.footer.privacy}
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {t.footer.terms}
              </Link>
              <Link to="/gdpr" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                GDPR
              </Link>
            </div>
          </div>

          {/* Download */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{t.footer.download}</h3>
            <div className="flex flex-row gap-3">
              <StoreComingSoonDialog>
                <img 
                  src={appleBadge}
                  alt="Download on App Store" 
                  className="h-10 w-auto hover:opacity-90 transition-opacity"
                />
              </StoreComingSoonDialog>
              <StoreComingSoonDialog>
                <img 
                  src={googleBadge} 
                  alt="Get it on Google Play" 
                  className="h-10 w-auto hover:opacity-90 transition-opacity"
                />
              </StoreComingSoonDialog>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Odomate. {t.footer.rights}</p>
            <div className="flex items-center gap-6">
              <a href="mailto:support@odomate.net" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                support@odomate.net
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};