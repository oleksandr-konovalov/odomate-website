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
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getLocalizedFeatureImages, hasAnimatedPairs, getAnimatedPairs } from '@/utils/getLocalizedFeatureImage';
import { FEATURE_IMAGE_KEYS } from '@/config/featureImageMapping';

const featureIcons = [
  Navigation,
  BarChart3,
  Bell,
  Brain,
  BookOpen,
  Sun,
  MapPin,
  Smartphone,
];

const ImageSlider = ({ images, featureTitle, showDots = true, autoAdvance = true, intervalMs = 5000 }: { images: string[], featureTitle: string, showDots?: boolean, autoAdvance?: boolean, intervalMs?: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance
  useEffect(() => {
    if (!autoAdvance) return;
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 250);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [images.length, autoAdvance, intervalMs]);

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < images.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setIsTransitioning(false);
      }, 250);
    }
    if (isRightSwipe && currentIndex > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setIsTransitioning(false);
      }, 250);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="relative w-full max-w-[480px] mx-auto">
      <div 
        className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-card via-card/80 to-card/60 border border-primary/20 shadow-xl shadow-primary/5 p-1"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={`w-full h-full transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <img
            src={images[currentIndex]}
            alt={`${featureTitle} - ${currentIndex + 1}`}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
      {showDots && images.length > 1 && (
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (idx === currentIndex) return;
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(idx);
                  setIsTransitioning(false);
                }, 250);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'bg-primary w-6'
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`View image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

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
      }, 250); // Half of transition duration
    }, 5000); // Change every 5 seconds

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
  const hasMultipleImages = currentPair.length > 1;

  return (
    <div className="relative">
      {/* Animation indicator dots */}
      {pairs.length > 1 && (
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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

      {/* Image slider with smooth fade animation */}
      <div className={`transition-opacity duration-500 ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}>
        <ImageSlider images={currentPair} featureTitle={featureTitle} showDots={false} autoAdvance={true} intervalMs={2500} />
      </div>
    </div>
  );
};

export const Features = () => {
  const { t, language } = useLanguage();

  return (
    <section id="features" className="py-24 px-4 bg-background/50">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="brand-gradient">{t.features.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="space-y-10">
          {t.features.items.map((feature, index) => {
            const Icon = featureIcons[index];
            const isEven = index % 2 === 0;
            const imageKey = FEATURE_IMAGE_KEYS[index];
            const isAnimated = hasAnimatedPairs(imageKey, language);
            const localizedImages = getLocalizedFeatureImages(imageKey, language);
            const hasMultipleImages = localizedImages.length > 1;
            
            return (
              <div
                key={index}
                className={index === 7 ? 'flex flex-col items-center gap-6' : `grid lg:grid-cols-2 gap-4 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {index === 7 ? (
                  // Android Head Units: Description first, image below (centered)
                  <>
                    <div className="text-center space-y-4 max-w-2xl">
                      <div className="flex items-center justify-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <div className="w-full max-w-5xl">
                      <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-gradient-to-br from-card via-card/80 to-card/60 border border-primary/20 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 p-1">
                        {localizedImages[0] ? (
                          <img 
                            src={localizedImages[0]} 
                            alt={feature.title}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        ) : (
                          <>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm border border-primary/30 hover:bg-primary/30 transition-all cursor-pointer group">
                                <Play className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" fill="currentColor" />
                              </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Content */}
                    <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-2'}`}>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Feature Image(s) */}
                    <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  {isAnimated ? (
                    // Animated pairs (parking)
                    <div className="md:mb-16">
                      <AnimatedImagePairs
                        pairs={getAnimatedPairs(imageKey, language)}
                        featureTitle={feature.title}
                      />
                    </div>
                  ) : hasMultipleImages ? (
                    // Multiple images - Slider
                    <ImageSlider images={localizedImages} featureTitle={feature.title} />
                  ) : (
                    // Single image
                    <div className="relative aspect-[9/16] w-full max-w-[480px] mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-card via-card/80 to-card/60 border border-primary/20 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 p-1">
                      {localizedImages[0] ? (
                        <img 
                          src={localizedImages[0]} 
                          alt={feature.title}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm border border-primary/30 hover:bg-primary/30 transition-all cursor-pointer group">
                              <Play className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" fill="currentColor" />
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                        </>
                      )}
                    </div>
                  )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};