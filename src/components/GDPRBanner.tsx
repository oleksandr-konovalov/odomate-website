import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { X, Settings, Shield, BarChart3, Target } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const GDPRBanner = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    const hasAccepted = localStorage.getItem('odomate-gdpr-accepted');
    const savedPreferences = localStorage.getItem('odomate-cookie-preferences');
    
    if (!hasAccepted) {
      setIsVisible(true);
    } else if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('odomate-gdpr-accepted', 'true');
    localStorage.setItem('odomate-cookie-preferences', JSON.stringify(allPreferences));
    setPreferences(allPreferences);
    setIsVisible(false);
    setShowCustomize(false);
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem('odomate-gdpr-accepted', 'true');
    localStorage.setItem('odomate-cookie-preferences', JSON.stringify(necessaryOnly));
    setPreferences(necessaryOnly);
    setIsVisible(false);
    setShowCustomize(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('odomate-gdpr-accepted', 'true');
    localStorage.setItem('odomate-cookie-preferences', JSON.stringify(preferences));
    setIsVisible(false);
    setShowCustomize(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const togglePreference = (category: keyof CookiePreferences) => {
    if (category === 'necessary') return; // Necessary cookies can't be disabled
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'necessary':
        return <Shield className="h-5 w-5 text-primary" />;
      case 'analytics':
        return <BarChart3 className="h-5 w-5 text-primary" />;
      case 'marketing':
        return <Target className="h-5 w-5 text-primary" />;
      default:
        return null;
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-6">
        {/* Main Banner */}
        {!showCustomize ? (
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col lg:flex-row items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t.gdpr.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.gdpr.text}
                  </p>
                </div>
                
                <div className="flex flex-row flex-wrap gap-2 lg:ml-auto lg:mt-8">
                  <Button 
                    variant="outline"
                    onClick={() => setShowCustomize(true)}
                    className="flex items-center gap-2 text-xs sm:text-sm px-3 py-2"
                    size="sm"
                  >
                    <Settings className="h-4 w-4" />
                    {t.gdpr.buttons.customize}
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={handleAcceptNecessary}
                    className="text-xs sm:text-sm px-3 py-2"
                    size="sm"
                  >
                    {t.gdpr.buttons.acceptNecessary}
                  </Button>
                  <Button 
                    onClick={handleAcceptAll}
                    className="flex items-center gap-2 text-xs sm:text-sm px-3 py-2"
                    size="sm"
                  >
                    {t.gdpr.buttons.acceptAll}
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm border-t border-border/50 pt-3">
                <Link 
                  to="/privacy" 
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  {t.gdpr.links.privacyPolicy}
                </Link>
                <Link 
                  to="/terms" 
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  {t.footer.terms}
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* Customization Panel */
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">
                {t.gdpr.title}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowCustomize(false)}
                className="h-8 w-8 p-0 hover:bg-primary/10"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Necessary Cookies */}
              <div className="border border-border rounded-lg p-4 bg-muted/20">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    {getCategoryIcon('necessary')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-foreground">
                        {t.gdpr.categories.necessary.title}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Always active</span>
                        <div className="w-12 h-6 bg-primary rounded-full relative">
                          <div className="absolute right-1 top-1 w-4 h-4 bg-primary-foreground rounded-full transition-transform"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t.gdpr.categories.necessary.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-border rounded-lg p-4 hover:bg-muted/20 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    {getCategoryIcon('analytics')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-foreground">
                        {t.gdpr.categories.analytics.title}
                      </h4>
                      <button
                        onClick={() => togglePreference('analytics')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          preferences.analytics ? 'bg-primary' : 'bg-muted'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-primary-foreground transition-transform ${
                            preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t.gdpr.categories.analytics.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="border border-border rounded-lg p-4 hover:bg-muted/20 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    {getCategoryIcon('marketing')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-foreground">
                        {t.gdpr.categories.marketing.title}
                      </h4>
                      <button
                        onClick={() => togglePreference('marketing')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          preferences.marketing ? 'bg-primary' : 'bg-muted'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-primary-foreground transition-transform ${
                            preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t.gdpr.categories.marketing.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <Button 
                variant="ghost"
                onClick={() => setShowCustomize(false)}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleSavePreferences}
                className="flex items-center gap-2"
              >
                {t.gdpr.buttons.save}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};