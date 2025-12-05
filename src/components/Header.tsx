import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useLanguage } from '@/hooks/useLanguage';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5' : 'bg-background/50 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:blur-lg transition-all"></div>
            <img src={logo} alt="Odomate" className="relative h-12 w-12 rounded-full ring-2 ring-primary/30 group-hover:ring-primary/50 transition-all" />
          </div>
          <span className="text-2xl font-bold brand-gradient">Odomate</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('features')}
            className="hover:text-primary hover:bg-primary/10 transition-all font-medium"
          >
            {t.nav.features}
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('faq')}
            className="hover:text-primary hover:bg-primary/10 transition-all font-medium"
          >
            {t.nav.faq}
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('contact')}
            className="hover:text-primary hover:bg-primary/10 transition-all font-medium"
          >
            {t.nav.contact}
          </Button>
          <div className="ml-4 pl-4 border-l border-border/50">
            <LanguageSelector />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSelector />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="h-8 w-8 p-0"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-card/95 backdrop-blur-lg border-b border-primary/20 md:hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('features')}
                className="justify-start hover:text-primary"
              >
                {t.nav.features}
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('faq')}
                className="justify-start hover:text-primary"
              >
                {t.nav.faq}
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('contact')}
                className="justify-start hover:text-primary"
              >
                {t.nav.contact}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};