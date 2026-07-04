import { useLanguage } from '@/hooks/useLanguage';
import { useState, useEffect } from 'react';
import { 
  Navigation, 
  BarChart3, 
  Bell, 
  Brain, 
  BookOpen, 
  Sun,
  MapPin,
  Smartphone,
  Play,
  Gauge,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { getLocalizedFeatureImages, hasAnimatedPairs, getAnimatedPairs } from '@/utils/getLocalizedFeatureImage';
import { FEATURE_IMAGE_KEYS } from '@/config/featureImageMapping';
import { PhoneMockup, CarDisplayMockup } from './PhoneMockup';

const featureIcons = [
  Gauge,        // AI Driving Style Analysis
  Navigation,   // Live Navigation
  Bell,         // Component Life Notifications
  Brain,        // AI-Based Lifetime Prediction
  BarChart3,    // Automatic Mileage Logging
  BookOpen,     // Digital Service Book
  Sun,          // Weather Intelligence
  MapPin,       // Smart Parking Assistant
  Smartphone,   // Android Head Units
];

const AnimatedImagePairs = ({ pairs, featureTitle }: { pairs: string[][], featureTitle: string }) => {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (pairs.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPairIndex((prev) => (prev + 1) % pairs.length);
        setIsTransitioning(false);
      }, 250);
    }, 5000);

    return () => clearInterval(interval);
  }, [pairs.length]);

  const handleDotClick = (idx: number) => {
    if (idx === currentPairIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPairIndex(idx);
      setIsTransitioning(false);
    }, 300);
  };

  const currentPair = pairs[currentPairIndex];

  return (
    <div className="relative">
      {pairs.length > 1 && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {pairs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentPairIndex
                  ? 'bg-primary w-6'
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`View pair ${idx + 1}`}
            />
          ))}
        </div>
      )}

      <div className={`transition-opacity duration-500 ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="flex gap-4 md:gap-6 justify-center">
          {currentPair.map((img, i) => (
            <PhoneMockup
              key={i}
              src={img}
              alt={`${featureTitle} - ${i + 1}`}
              className="w-[160px] md:w-[280px] aspect-[9/19.5]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Features = () => {
  const { t, language } = useLanguage();
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isFeatureTransitioning, setIsFeatureTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const totalFeatures = t.features.items.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFeatureTransitioning(true);
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % totalFeatures);
        setIsFeatureTransitioning(false);
      }, 250);
    }, 6000);
    return () => clearInterval(interval);
  }, [totalFeatures]);

  const goToFeature = (idx: number) => {
    if (idx === currentFeature) return;
    if (idx < 0 || idx >= totalFeatures) return;
    setIsFeatureTransitioning(true);
    setTimeout(() => {
      setCurrentFeature(idx);
      setIsFeatureTransitioning(false);
    }, 250);
  };

  const nextFeature = () => {
    setIsFeatureTransitioning(true);
    setTimeout(() => {
      setCurrentFeature((prev) => (prev + 1) % totalFeatures);
      setIsFeatureTransitioning(false);
    }, 250);
  };

  const prevFeature = () => {
    setIsFeatureTransitioning(true);
    setTimeout(() => {
      setCurrentFeature((prev) => (prev - 1 + totalFeatures) % totalFeatures);
      setIsFeatureTransitioning(false);
    }, 250);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextFeature();
    if (distance < -50) prevFeature();
    setTouchStart(0);
    setTouchEnd(0);
  };

  const feature = t.features.items[currentFeature];
  const Icon = featureIcons[currentFeature];
  const imageKey = FEATURE_IMAGE_KEYS[currentFeature];
  const isAnimated = hasAnimatedPairs(imageKey, language);
  const localizedImages = getLocalizedFeatureImages(imageKey, language);
  const hasMultipleImages = localizedImages.length > 1;
  const isHeadUnit = currentFeature === 8;

  return (
    <section id="features" className="py-12 md:py-16 px-4 bg-background/50">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="brand-gradient">{t.features.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        {/* Feature carousel */}
        <div className="max-w-5xl mx-auto">
          {/* Feature content with transition - fixed height to prevent page jump */}
          <div
            className={`transition-opacity duration-500 min-h-[640px] flex items-center justify-center ${isFeatureTransitioning ? 'opacity-0' : 'opacity-100'}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className={`w-full ${isHeadUnit ? 'flex flex-col items-center text-center gap-8' : 'grid lg:grid-cols-[2fr_3fr] gap-8 items-center'} `}>
              {/* Content */}
              <div className={`space-y-6 ${isHeadUnit ? 'max-w-2xl' : 'text-center lg:text-left min-w-0'} `}>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-3xl font-bold text-foreground text-left">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Feature Image(s) */}
              <div className="flex justify-center min-w-0">
                {isHeadUnit ? (
                  <div className="flex justify-center w-full">
                    {localizedImages[0] ? (
                      <CarDisplayMockup
                        src={localizedImages[0]}
                        alt={feature.title}
                        className="w-[480px] md:w-[672px]"
                      />
                    ) : (
                      <div className="relative aspect-video w-full max-w-2xl rounded-2xl overflow-hidden bg-gradient-to-br from-card via-card/80 to-card/60 border border-primary/20 shadow-xl shadow-primary/5 p-1">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm border border-primary/30 hover:bg-primary/30 transition-all cursor-pointer group">
                            <Play className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" fill="currentColor" />
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                      </div>
                    )}
                  </div>
                ) : isAnimated ? (
                  <AnimatedImagePairs
                    pairs={getAnimatedPairs(imageKey, language)}
                    featureTitle={feature.title}
                  />
                ) : (
                  <div className="flex gap-4 md:gap-6 justify-center">
                    {localizedImages.map((img, i) => (
                      <PhoneMockup
                        key={i}
                        src={img}
                        alt={`${feature.title} - ${i + 1}`}
                        className="w-[160px] md:w-[280px] aspect-[9/19.5]"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation arrows + dots */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevFeature}
              className="p-2 rounded-full bg-card border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all"
              aria-label="Previous feature"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>

            <div className="flex gap-2 flex-wrap justify-center max-w-md">
              {t.features.items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToFeature(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentFeature
                      ? 'bg-primary w-6'
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to feature ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextFeature}
              className="p-2 rounded-full bg-card border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all"
              aria-label="Next feature"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};