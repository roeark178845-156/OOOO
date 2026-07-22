import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDE_IMAGES = [
  {
    src: "/images/travel-014.jpg",
    title: "樂活悠遊 慢活時光",
    alt: "樂活旅遊 1"
  },
  {
    src: "/images/travel-015.jpg",
    title: "同行相伴 歡笑滿載",
    alt: "樂活旅遊 2"
  },
  {
    src: "/images/travel-016.jpg",
    title: "豐富學習 精彩人生",
    alt: "樂活旅遊 3"
  },
  {
    src: "/images/travel-017.jpg",
    title: "四季風景 溫暖記憶",
    alt: "樂活旅遊 4"
  }
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-play interval: 4 seconds (4000ms)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDE_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDE_IMAGES.length) % SLIDE_IMAGES.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    // Swipe threshold
    if (diffX > 40) {
      handleNext(); // Swiped left -> Next image
    } else if (diffX < -40) {
      handlePrev(); // Swiped right -> Previous image
    }

    touchStartX.current = null;
  };

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div 
        className="relative w-full h-[320px] md:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#E6E2DA] bg-[#FAF8F3] group select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Animated Image Stack / Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={SLIDE_IMAGES[currentIndex].src}
              alt={SLIDE_IMAGES[currentIndex].alt}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/travel-001.jpg";
              }}
            />
            {/* Soft subtle gradient overlay for visual polish */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
            
            {/* Caption badge */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md text-gray-800 text-xs md:text-sm font-bold shadow-md">
                {SLIDE_IMAGES[currentIndex].title}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/70 hover:bg-white text-gray-800 shadow-md backdrop-blur-xs transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/70 hover:bg-white text-gray-800 shadow-md backdrop-blur-xs transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 flex items-center space-x-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
          {SLIDE_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? "w-7 bg-white shadow-xs"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
