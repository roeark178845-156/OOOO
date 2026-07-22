import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/travel-014.jpg",
    title: "樂活愛心團隊集結出發",
    description: "陳柏霖攜手志工團隊夥伴共同投入公益服務，以實際行動募集與捐贈愛心物資，將溫暖送到需要幫助的角落。"
  },
  {
    image: "/images/travel-015.jpg",
    title: "愛心物資整備完成",
    description: "一箱箱物資，不只是生活用品，更是一份份來自社會的關懷與祝福，期待為更多家庭帶來溫暖與希望。"
  },
  {
    image: "/images/travel-016.jpg",
    title: "攜手走入社區服務",
    description: "志工們親自將愛心物資送達受助單位，在陪伴與關懷中傳遞溫暖，也讓公益成為連結彼此的重要力量。"
  },
  {
    image: "/images/travel-017.jpg",
    title: "愛心持續延續",
    description: "每一次捐贈都是新的開始，每一次付出都讓社會多一分溫暖。樂活愛心團隊將持續攜手更多夥伴，讓善的力量不斷傳遞，照亮更多需要幫助的人。"
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
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (diffX > 40) {
      handleNext();
    } else if (diffX < -40) {
      handlePrev();
    }

    touchStartX.current = null;
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div 
        className="relative w-full h-[320px] md:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#E6E2DA] bg-[#111] group select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Animated Slide Stack */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            {/* Ken Burns Scale Effect on Image (1.08 -> 1.0 in 4s) */}
            <motion.img
              src={currentSlide.image}
              alt={currentSlide.title}
              initial={{ scale: 1.08 }}
              animate={{ scale: 1.0 }}
              transition={{ duration: 4.0, ease: "easeOut" }}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/travel-001.jpg";
              }}
            />

            {/* Gradient Overlay for Text Legibility (~40% bottom height) */}
            <div className="absolute inset-x-0 bottom-0 h-[60%] md:h-[50%] bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

            {/* Overlay Text Block */}
            <div 
              className="absolute bottom-6 left-6 md:left-[80px] right-20 md:right-32 z-10 pointer-events-none flex flex-col justify-end"
              style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.85)" }}
            >
              {/* Fade Up Title */}
              <motion.h3
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
                className="text-[26px] sm:text-[32px] md:text-[42px] font-bold text-white tracking-wide leading-tight mb-2 md:mb-3 font-sans"
              >
                {currentSlide.title}
              </motion.h3>

              {/* Fade Up Description (delayed 0.4s) */}
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-100/95 leading-relaxed max-w-3xl line-clamp-3 md:line-clamp-2 font-normal"
              >
                {currentSlide.description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/75 hover:bg-white text-gray-800 shadow-lg backdrop-blur-xs transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/75 hover:bg-white text-gray-800 shadow-lg backdrop-blur-xs transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-8 z-20 flex items-center space-x-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
          {slides.map((_, idx) => (
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
