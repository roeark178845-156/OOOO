import { useState, useEffect, useRef, useCallback, TouchEvent } from "react";
import { Compass, UserPlus, Sparkles, ChevronLeft, ChevronRight, ShieldCheck, Heart, Smile } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// 20 張幻燈片照片 (保留全部輪播圖片與順序)
const heroSlides = [
  { src: "/images/CC.01.JPG", alt: "玩美人生 樂齡活動精彩寫真 1" },
  { src: "/images/CC.02.JPG", alt: "玩美人生 樂齡活動精彩寫真 2" },
  { src: "/images/CC.03.JPG", alt: "玩美人生 樂齡活動精彩寫真 3" },
  { src: "/images/CC.04.JPG", alt: "玩美人生 樂齡活動精彩寫真 4" },
  { src: "/images/CC.05.JPG", alt: "玩美人生 樂齡活動精彩寫真 5" },
  { src: "/images/CC.06.JPG", alt: "玩美人生 樂齡活動精彩寫真 6" },
  { src: "/images/CC.07.JPG", alt: "玩美人生 樂齡活動精彩寫真 7" },
  { src: "/images/CC.08.JPG", alt: "玩美人生 樂齡活動精彩寫真 8" },
  { src: "/images/CC.09.JPG", alt: "玩美人生 樂齡活動精彩寫真 9" },
  { src: "/images/CC.10.JPG", alt: "玩美人生 樂齡活動精彩寫真 10" },
  { src: "/images/CC.11.JPG", alt: "玩美人生 樂齡活動精彩寫真 11" },
  { src: "/images/CC.12.JPG", alt: "玩美人生 樂齡活動精彩寫真 12" },
  { src: "/images/CC.13.JPG", alt: "玩美人生 樂齡活動精彩寫真 13" },
  { src: "/images/CC.14.JPG", alt: "玩美人生 樂齡活動精彩寫真 14" },
  { src: "/images/CC.15.JPG", alt: "玩美人生 樂齡活動精彩寫真 15" },
  { src: "/images/CC.16.JPG", alt: "玩美人生 樂齡活動精彩寫真 16" },
  { src: "/images/CC.17.JPG", alt: "玩美人生 樂齡活動精彩寫真 17" },
  { src: "/images/CC.18.JPG", alt: "玩美人生 樂齡活動精彩寫真 18" },
  { src: "/images/CC.19.JPG", alt: "玩美人生 樂齡活動精彩寫真 19" },
  { src: "/images/CC.20.JPG", alt: "玩美人生 樂齡活動精彩寫真 20" },
];

/**
 * 右側大型圓角長方形相片輪播
 * 電腦版尺寸：560 × 420px，手機版寬度100%、比例16:10
 * 每4秒自動播放、0.7秒淡入淡出、hover暫停、左右箭頭、下方圓點、支援手勢滑動
 */
function HeroPhotoSlider() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // 每 4 秒自動播放下一張，Hover 時暫停
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* 照片外圍裝飾柔和水彩光暈與自然圓塊 */}
      <div className="absolute -top-6 -right-6 w-44 h-44 rounded-full bg-[#6E9477]/15 blur-2xl pointer-events-none -z-10" />
      <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-[#E9A85D]/15 blur-2xl pointer-events-none -z-10" />
      <div className="absolute -top-4 -left-4 w-32 h-32 rounded-3xl bg-[#F5E4DF]/40 rotate-6 pointer-events-none -z-10" />
      
      {/* 560 x 420 px 大型圓角長方形相框 (手機 16:10) */}
      <div
        className="group/slider relative w-full lg:w-[560px] h-[260px] sm:h-[340px] md:h-[390px] lg:h-[420px] rounded-[28px] overflow-hidden shadow-[0_16px_40px_-12px_rgba(40,73,54,0.16)] border-4 border-white bg-[#FAF7F0] select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* 照片輪播主體 (0.7s 淡入淡出) */}
        <AnimatePresence mode="wait">
          <motion.img
            key={heroSlides[index].src}
            src={heroSlides[index].src}
            alt={heroSlides[index].alt}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: "center 30%" }}
            onError={(e) => {
              // 備援處理
              const target = e.target as HTMLImageElement;
              target.src = "/images/sun.jpg";
            }}
          />
        </AnimatePresence>

        {/* 柔和底部暗漸層 (提升指示器對比) */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />

        {/* 右上方精緻照片計數徽章 */}
        <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#284936]/75 backdrop-blur-md text-[#FAF7F0] text-xs font-semibold font-noto tracking-wider shadow-sm border border-white/20">
          <span>{index + 1}</span>
          <span className="opacity-70 mx-1">/</span>
          <span>{heroSlides.length}</span>
        </div>

        {/* 左側切換按鈕 */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="上一張照片"
          className="absolute left-3.5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/85 hover:bg-white text-[#284936] shadow-md backdrop-blur-xs flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer opacity-90 group-hover/slider:opacity-100"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* 右側切換按鈕 */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="下一張照片"
          className="absolute right-3.5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/85 hover:bg-white text-[#284936] shadow-md backdrop-blur-xs flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer opacity-90 group-hover/slider:opacity-100"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* 下方指示圓點 (滿版居中滑動圓點) */}
        <div className="absolute bottom-3.5 inset-x-0 z-20 flex justify-center items-center gap-1.5 px-4 pointer-events-auto">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`切換至第 ${i + 1} 張照片`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === index
                  ? "w-6 h-2 bg-[#E9A85D] shadow-sm"
                  : "w-2 h-2 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 輪播下方的品牌標語：簡約、清楚的藝術字體排列 */}
      <div className="mt-5 text-center px-4">
        <p className="text-xl sm:text-2xl md:text-[26px] font-bold text-[#284936] font-wenkai tracking-wide leading-relaxed">
          退休不是終點，而是「<span className="text-[#6E9477]">玩美人生</span>」的起跑點！
        </p>
        <p className="mt-1 text-sm sm:text-base text-[#745846] font-noto font-normal tracking-wider">
          Wiselohas ・ 樂活學堂與您漫步人生每個幸福瞬間
        </p>
      </div>
    </div>
  );
}

interface HeroProps {
  onScrollToSection: (id: string) => void;
  onOpenJoinModal: () => void;
}

export default function Hero({ onScrollToSection, onOpenJoinModal }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative overflow-hidden bg-[#FAF7F0] py-10 sm:py-14 md:py-18 lg:py-20 text-[#745846]"
    >
      {/* 柔和自然水彩光暈與植物線條背景點綴 (極淡 10%~20%，不影響文字) */}
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-[#6E9477]/12 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 h-80 w-80 rounded-full bg-[#E9A85D]/12 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 -z-10 h-72 w-72 rounded-full bg-[#F5E4DF]/30 blur-3xl pointer-events-none" />

      {/* 左上角手繪風微植物裝飾 SVG */}
      <div className="absolute top-4 left-4 opacity-15 pointer-events-none text-[#6E9477] hidden md:block">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.6 4.5 8.4" />
          <path d="M12 22s8-4 8-10V5l-8-3" />
          <path d="M8 12s2-2 4-2 4 2 4 2-2 2-4 2-4-2-4-2z" />
        </svg>
      </div>

      {/* 右下角手繪風微波浪點綴 */}
      <div className="absolute bottom-4 right-6 opacity-15 pointer-events-none text-[#E9A85D] hidden md:block">
        <svg width="80" height="24" viewBox="0 0 80 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M0 12 Q 10 4, 20 12 T 40 12 T 60 12 T 80 12" />
          <path d="M0 18 Q 10 10, 20 18 T 40 18 T 60 18 T 80 18" />
        </svg>
      </div>

      {/* 最大寬度 1200px 置中容器 */}
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        {/* 左右雙欄排版：左側佔 45%，右側佔 55% */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-8 items-center">
          
          {/* ================= 左側內容欄 (45% -> lg:col-span-5 或 4.5 比例，對應 45% / 55%) ================= */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7 text-center lg:text-left">
            
            {/* 小型品牌標籤 */}
            <div className="inline-flex items-center space-x-2 rounded-full bg-white px-4 py-1.5 shadow-[0_2px_10px_rgba(40,73,54,0.06)] border border-[#E6DEC8]">
              <Sparkles className="h-4 w-4 text-[#E9A85D]" />
              <span className="text-sm font-semibold text-[#284936] font-noto tracking-wide">
                台灣最溫馨的樂齡生活社群
              </span>
            </div>

            {/* 主標題：48~56px (手機32~36px)、霞鶩文楷、深墨綠 #284936、清晰無模糊、兩行呈現 */}
            <h1 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[54px] font-bold text-[#284936] font-wenkai leading-[1.28] tracking-tight select-none">
              <span className="block">
                退休，不是人生的終點
              </span>
              <span className="block mt-1 text-[#284936]">
                而是 <span className="text-[#6E9477]">慢活人生</span> 的 <span className="text-[#E9A85D]">新起點</span>。
              </span>
            </h1>

            {/* 副標題：20~22px (手機16~17px)、可可棕 #745846、清晰對比 */}
            <p className="text-[17px] sm:text-[20px] lg:text-[21px] font-medium text-[#745846] leading-relaxed font-noto max-w-xl mx-auto lg:mx-0">
              一起旅行 ． 一起學習 ． 一起做公益 ． 一起創造幸福回憶
            </p>

            {/* 三張特色卡片：高度一致、淡奶油色底、圓角18px、細緻陰影、圖示大小一致、內容垂直置中、Hover輕浮3px */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
              <div className="flex sm:flex-col items-center sm:items-center lg:items-start text-left sm:text-center lg:text-left space-x-3.5 sm:space-x-0 p-4 min-h-[92px] sm:min-h-[110px] bg-white rounded-[18px] border border-[#E6DEC8]/80 shadow-[0_4px_16px_rgba(40,73,54,0.05)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(40,73,54,0.08)]">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-[#FAF7F0] text-2xl shrink-0 sm:mb-2 border border-[#E6DEC8]/60">
                  <span>😊</span>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[15px] sm:text-[16px] font-bold text-[#284936] font-noto">
                    貼心無障礙
                  </span>
                  <span className="text-xs text-[#745846]/80 font-noto mt-0.5">
                    平緩路線 安心陪伴
                  </span>
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-center lg:items-start text-left sm:text-center lg:text-left space-x-3.5 sm:space-x-0 p-4 min-h-[92px] sm:min-h-[110px] bg-white rounded-[18px] border border-[#E6DEC8]/80 shadow-[0_4px_16px_rgba(40,73,54,0.05)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(40,73,54,0.08)]">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-[#FAF7F0] text-2xl shrink-0 sm:mb-2 border border-[#E6DEC8]/60">
                  <span>🛡️</span>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[15px] sm:text-[16px] font-bold text-[#284936] font-noto">
                    安心安全隨行
                  </span>
                  <span className="text-xs text-[#745846]/80 font-noto mt-0.5">
                    醫療照護 專業守護
                  </span>
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-center lg:items-start text-left sm:text-center lg:text-left space-x-3.5 sm:space-x-0 p-4 min-h-[92px] sm:min-h-[110px] bg-white rounded-[18px] border border-[#E6DEC8]/80 shadow-[0_4px_16px_rgba(40,73,54,0.05)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(40,73,54,0.08)]">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-[#FAF7F0] text-2xl shrink-0 sm:mb-2 border border-[#E6DEC8]/60">
                  <span>❤️</span>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[15px] sm:text-[16px] font-bold text-[#284936] font-noto">
                    有溫度的陪伴
                  </span>
                  <span className="text-xs text-[#745846]/80 font-noto mt-0.5">
                    志工同行 暖心真誠
                  </span>
                </div>
              </div>
            </div>

            {/* 兩個操作按鈕：高度56px、圓角16px、間距16px、按鈕1鼠尾草綠 #6E9477、按鈕2暖杏橘 #E9A85D、字體18px */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onScrollToSection("events")}
                className="flex w-full sm:w-auto h-[56px] items-center justify-center space-x-2.5 rounded-[16px] bg-[#6E9477] hover:bg-[#5b8064] text-white px-8 text-[18px] font-bold font-noto shadow-[0_8px_20px_rgba(110,148,119,0.25)] hover:shadow-[0_10px_24px_rgba(110,148,119,0.35)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Compass className="h-5 w-5" />
                <span>查看最新活動</span>
              </button>
              
              <button
                onClick={onOpenJoinModal}
                className="flex w-full sm:w-auto h-[56px] items-center justify-center space-x-2.5 rounded-[16px] bg-[#E9A85D] hover:bg-[#d8964b] text-white px-8 text-[18px] font-bold font-noto shadow-[0_8px_20px_rgba(233,168,93,0.25)] hover:shadow-[0_10px_24px_rgba(233,168,93,0.35)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <UserPlus className="h-5 w-5" />
                <span>立即加入我們</span>
              </button>
            </div>
          </div>

          {/* ================= 右側內容欄 (55% -> lg:col-span-5 大型圓角照片輪播) ================= */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            <HeroPhotoSlider />
          </div>

        </div>
      </div>
    </section>
  );
}
