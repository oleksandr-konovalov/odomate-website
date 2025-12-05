import { Star, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useState, useEffect } from 'react';

// Import local images with gender-specific names
import female1 from '@/assets/testimonials/female1.jpg';
import male1 from '@/assets/testimonials/male1.jpg';
import female2 from '@/assets/testimonials/female2.jpg';
import male2 from '@/assets/testimonials/male2.jpg';
import female3 from '@/assets/testimonials/female3.jpg';
import male3 from '@/assets/testimonials/male3.jpg';
import female4 from '@/assets/testimonials/female4.jpg';
import male4 from '@/assets/testimonials/male4.jpg';
import female5 from '@/assets/testimonials/female5.jpg';

export const Testimonials = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Gender-specific image mapping for each language
  const getGenderSpecificImages = (testimonials: any[]) => {
    return testimonials.map((testimonial, index) => {
      const name = testimonial.name.toLowerCase();
      
      // Determine gender based on name patterns
      const isFemale = 
        name.includes('sarah') || name.includes('emma') || name.includes('lisa') || 
        name.includes('maria') || name.includes('jennifer') ||
        name.includes('анна') || name.includes('елена') || name.includes('ольга') || 
        name.includes('мария') || name.includes('екатерина') ||
        name.includes('marie') || name.includes('sophie') || name.includes('camille') || 
        name.includes('julie') || name.includes('isabelle') ||
        name.includes('anna') || name.includes('julia') || name.includes('laura') || 
        name.includes('marina') || name.includes('sabine') ||
        name.includes('anna') || name.includes('ewa') || name.includes('katarzyna') || 
        name.includes('magdalena') || name.includes('agnieszka') ||
        name.includes('maría') || name.includes('ana') || name.includes('carmen') || 
        name.includes('sofia') || name.includes('isabel');

      // Select appropriate image
      let image;
      if (isFemale) {
        const femaleImages = [female1, female2, female3, female4, female5];
        image = femaleImages[index % femaleImages.length];
      } else {
        const maleImages = [male1, male2, male3, male4];
        image = maleImages[index % maleImages.length];
      }

      return { ...testimonial, image };
    });
  };

  const testimonials = getGenderSpecificImages(t.testimonials.items);

  const totalTestimonials = testimonials.length;
  const maxIndex = totalTestimonials > itemsPerView ? totalTestimonials - itemsPerView : 0;

  // Responsive itemsPerView: 1 on mobile, 2 on md, 3 on lg+
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w >= 1024) return 3; // lg
      if (w >= 768) return 2;  // md
      return 1;                // mobile
    };
    const update = () => {
      const next = compute();
      setItemsPerView((prev) => (prev !== next ? next : prev));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Clamp index when itemsPerView changes
  useEffect(() => {
    setCurrentIndex((prev) => (prev > maxIndex ? 0 : prev));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsPerView, totalTestimonials]);

  // Auto-scroll functionality with pause on hover
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= maxIndex) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [maxIndex, isPaused]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return maxIndex;
      }
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= maxIndex) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center md:justify-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t.testimonials.title}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Slider */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-muted transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-muted transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out mx-[-12px]"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3"
                >
                  <div className="relative bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                    {/* Content */}
                    <div className="relative mb-4 mt-2 flex-grow">
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {testimonial.content}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* User Image and Info */}
                    <div className="flex items-center pt-4 border-t border-border/50">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-3 ring-2 ring-primary/20 flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-foreground truncate">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground truncate">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex 
                    ? 'w-8 bg-primary' 
                    : 'bg-muted hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial set ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
