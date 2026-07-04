import { useLanguage } from '@/hooks/useLanguage';
import { useState, useEffect } from 'react';
import { MapPin, UserCog, Brain, ClipboardList, ChevronLeft, ChevronRight } from 'lucide-react';
import appleBadge from '@/assets/apple-badge.svg';
import googleBadge from '@/assets/google-badge.svg';
import { PhoneMockup } from './PhoneMockup';
import fleetMap1 from '/assets/images/b2b_features/fleet_map1.jpeg';
import driverManagement from '/assets/images/b2b_features/driver_management.jpeg';
import driverDrivingStyle from '/assets/images/b2b_features/driver_driving_style.jpeg';
import tripsHistory from '/assets/images/b2b_features/trips_history.jpeg';

const APP_STORE_URL = 'https://apps.apple.com/ua/app/odomate/id6754283341';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.aleksandrkonovalov.odomate';

const b2bIcons = [MapPin, UserCog, Brain, ClipboardList];
const b2bImages = [fleetMap1, driverManagement, driverDrivingStyle, tripsHistory];

export const B2BSection = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const totalSlides = t.b2b.features.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        setIsTransitioning(false);
      }, 250);
    }, 6000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (idx: number) => {
    if (idx === currentSlide) return;
    if (idx < 0 || idx >= totalSlides) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(idx);
      setIsTransitioning(false);
    }, 250);
  };

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      setIsTransitioning(false);
    }, 250);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      setIsTransitioning(false);
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
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(0);
    setTouchEnd(0);
  };

  const feature = t.b2b.features[currentSlide];
  const Icon = b2bIcons[currentSlide];

  return (
    <section id="b2b" className="py-12 md:py-16 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="brand-gradient">{t.b2b.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.b2b.subtitle}
          </p>
        </div>

        {/* B2B carousel */}
        <div className="max-w-5xl mx-auto">
          {/* Slide content with transition */}
          <div
            className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="space-y-4 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center">
                <PhoneMockup
                  src={b2bImages[currentSlide]}
                  alt={feature.title}
                  className="w-[280px] md:w-[340px] aspect-[9/19.5]"
                />
              </div>
            </div>
          </div>

          {/* Navigation arrows + dots */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-card border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>

            <div className="flex gap-2">
              {t.b2b.features.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? 'bg-primary w-6'
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-card border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-row gap-3 justify-center">
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              <img src={appleBadge} alt="Download on App Store" className="h-12 md:h-14 w-auto hover:opacity-90 transition-opacity" />
            </a>
            <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
              <img src={googleBadge} alt="Get it on Google Play" className="h-12 md:h-14 w-auto hover:opacity-90 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
