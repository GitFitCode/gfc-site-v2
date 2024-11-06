import React, { useCallback, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from './Button';

// Main Carousel Component
const Carousel: React.FC<{ slides: string[] }> = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Update the current index when the carousel slide changes
  useEffect((): any => {
    if (!emblaApi) return;
    const onSelect = () => setCurrentIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <div className="relative max-w-lg mx-auto">
      {/* Carousel Image Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img src={src} alt={`Slide ${index}`} className="w-full h-auto rounded-md" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <Button variant="outline" onClick={scrollPrev} className="bg-white/70">
          ❮
        </Button>
        <Button variant="outline" onClick={scrollNext} className="bg-white/70">
          ❯
        </Button>
      </div>

      {/* Pagination Dots */}
      <PaginationDots slides={slides} currentIndex={currentIndex} goToSlide={(index) => emblaApi && emblaApi.scrollTo(index)} />
    </div>
  );
};

// PaginationDots Component
const PaginationDots: React.FC<{ slides: string[]; currentIndex: number; goToSlide: (index: number) => void }> = ({ slides, currentIndex, goToSlide }) => (
  <div className="flex justify-center mt-4 space-x-2">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => goToSlide(index)}
        className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
);

export default Carousel;