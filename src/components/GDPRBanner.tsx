import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { X } from 'lucide-react';

export const GDPRBanner = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('odomate-gdpr-accepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('odomate-gdpr-accepted', 'true');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-2xl mx-auto">
      <div className="card-gradient rounded-xl p-6 border border-primary/20 shadow-lg backdrop-blur-lg">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-4">
              {t.gdpr.text}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={handleAccept} 
                className="hero-button flex-1 sm:flex-none"
              >
                {t.gdpr.accept}
              </Button>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="h-8 w-8 p-0 hover:bg-primary/10"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};