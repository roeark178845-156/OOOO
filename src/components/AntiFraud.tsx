import { useState, useEffect, useCallback } from "react";
import { 
  ShieldCheck, 
  ShieldAlert, 
  AlertTriangle, 
  PhoneCall, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  Info,
  CheckCircle2,
  Lock
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function AntiFraud() {
  // Carousel states for Block 1 (AA-1 ~ AA-9)
  const carouselImages = [
    "/images/AA-1.jpg",
    "/images/AA-2.jpg",
    "/images/AA-3.jpg",
    "/images/AA-4.jpg",
    "/images/AA-5.jpg",
    "/images/AA-6.jpg",
    "/images/AA-7.jpg",
    "/images/AA-8.jpg",
    "/images/AA-9.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Lightbox modal state for Block 2 (AA-10)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Auto-play interval (4 seconds)
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  }, [carouselImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  }, [carouselImages.length]);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  return (
    <section id="anti-fraud" className="py-16 md:py-24 bg-[#FAF8F3] text-gray-800 relative overflow-hidden">
      {/* Background Decorative Accent Shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-10 left-4 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-4 w-80 h-80 bg-amber-100 rounded-full filter blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* ================= HERO BLOCK ================= */}
        <div className="bg-gradient-to-br from-[#1B365D] via-[#244577] to-[#122646] rounded-3xl p-8 md:p-12 text-white shadow-2xl border border-blue-900/30 relative overflow-hidden">
          {/* Decorative Shield Watermark */}
          <ShieldCheck className="absolute -right-8 -bottom-8 w-64 h-64 text-white/5 pointer-events-none" />

          <div className="max-w-3xl space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#D8A44C]/20 border border-[#D8A44C]/40 text-[#F5D796] text-sm md:text-base font-bold shadow-inner">
              <ShieldAlert className="w-5 h-5 text-[#D8A44C]" />
              <span>全齡共好・財產防護專區</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white flex items-center gap-3">
              <span>🛡️ 防詐宣導</span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-bold text-amber-300">
              提高警覺，守護自己與家人的財產安全。
            </p>

            {/* Description Text */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed pt-1">
              樂活生活網關心每位長者的退休生活與財產安全。近年來詐騙手法日新月異，掌握最新資訊與警覺心，是保護個人與家庭積蓄的第一道防線。讓我們一起學會辨識詐騙，享受安心、無憂的樂活時光！
            </p>

            {/* Feature Highlights Bar */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-xs rounded-2xl p-3.5 border border-white/10">
                <div className="p-2.5 rounded-xl bg-[#D8A44C] text-slate-900 font-black">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">冷靜不慌張</div>
                  <div className="text-xs text-slate-300">遇異常要求先停看聽</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-xs rounded-2xl p-3.5 border border-white/10">
                <div className="p-2.5 rounded-xl bg-blue-500 text-white font-black">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">保密不透露</div>
                  <div className="text-xs text-slate-300">不給密碼與提款卡</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-xs rounded-2xl p-3.5 border border-white/10">
                <div className="p-2.5 rounded-xl bg-rose-500 text-white font-black">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">反詐專線 165</div>
                  <div className="text-xs text-slate-300">隨時撥打求證查驗</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BLOCK 1: 最新防詐資訊 (Large Carousel) ================= */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-[#E6E2DA] shadow-xl space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-blue-50 text-[#1B365D] font-bold text-sm">
                <Info className="w-4 h-4 text-[#1B365D]" />
                <span>宣導新知</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#1B365D] tracking-tight">
                最新防詐資訊
              </h3>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                退休生活更需要提高警覺，避免假投資、假檢警、假交友、LINE詐騙等新型態犯罪，建立正確防詐觀念。
              </p>

              {/* Bullet Points for Seniors */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start space-x-3 bg-[#FAF8F3] p-4 rounded-2xl border border-[#E6E2DA]">
                  <CheckCircle2 className="w-5 h-5 text-[#D8A44C] shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-gray-700 font-medium">
                    <strong className="text-[#1B365D]">拒絕高獲利誘惑：</strong>凡宣稱「保證獲利」、「穩賺不賠」的投資皆為詐騙陷阱。
                  </p>
                </div>

                <div className="flex items-start space-x-3 bg-[#FAF8F3] p-4 rounded-2xl border border-[#E6E2DA]">
                  <CheckCircle2 className="w-5 h-5 text-[#D8A44C] shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-gray-700 font-medium">
                    <strong className="text-[#1B365D]">公家機關不監管帳戶：</strong>檢警或法院絕不會要求操作ATM或將現金交給面交人員。
                  </p>
                </div>

                <div className="flex items-start space-x-3 bg-[#FAF8F3] p-4 rounded-2xl border border-[#E6E2DA]">
                  <CheckCircle2 className="w-5 h-5 text-[#D8A44C] shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-gray-700 font-medium">
                    <strong className="text-[#1B365D]">點擊圖片可對照學習：</strong>右側展示最新官方防詐宣導重點圖文，歡迎翻閱了解。
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column Large Carousel */}
            <div className="lg:col-span-7">
              <div 
                className="relative group rounded-2xl md:rounded-3xl overflow-hidden bg-stone-100 shadow-xl border border-gray-200 aspect-[4/3] sm:aspect-[16/10] flex items-center justify-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Carousel Image with Fade Animation */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={carouselImages[currentIndex]}
                    src={carouselImages[currentIndex]}
                    alt={`防詐宣導資訊 ${currentIndex + 1}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-full h-full object-contain bg-slate-900"
                  />
                </AnimatePresence>

                {/* Counter Badge */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs sm:text-sm font-bold tracking-wider">
                  {currentIndex + 1} / {carouselImages.length}
                </div>

                {/* Left Arrow Button */}
                <button
                  onClick={prevSlide}
                  aria-label="上一張圖片"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-black/40 hover:bg-[#1B365D] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                {/* Right Arrow Button */}
                <button
                  onClick={nextSlide}
                  aria-label="下一張圖片"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-black/40 hover:bg-[#1B365D] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Bottom Dot Indicators */}
                <div className="absolute bottom-4 inset-x-0 z-10 flex justify-center items-center gap-1.5 sm:gap-2 px-4 pointer-events-auto">
                  {carouselImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`切換至第 ${idx + 1} 張防詐圖解`}
                      className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                        idx === currentIndex
                          ? "w-7 bg-[#D8A44C] shadow-md"
                          : "w-2.5 bg-white/60 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= BLOCK 2: 遇到詐騙怎麼做 (165 防詐三步驟) ================= */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-[#E6E2DA] shadow-xl space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-rose-50 text-rose-700 font-bold text-sm">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <span>緊急應對指引</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1B365D] tracking-tight">
              遇到詐騙怎麼做（165 防詐三步驟）
            </h3>

            <p className="text-base sm:text-lg text-gray-600 font-medium">
              請牢記「1. 聽 2. 掛 3. 查證」原則。點擊下方圖表可放大細看完整指引說明：
            </p>
          </div>

          {/* Image Display Block (AA-10) */}
          <div className="max-w-4xl mx-auto">
            <div 
              onClick={() => setIsLightboxOpen(true)}
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl border border-stone-200 bg-stone-100 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-amber-400"
            >
              <img 
                src="/images/AA-10.jpg" 
                alt="遇到詐騙怎麼做（165 防詐三步驟）" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/95 text-[#1B365D] font-bold px-6 py-3 rounded-full shadow-xl flex items-center space-x-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-5 h-5 text-[#D8A44C]" />
                  <span className="text-base">點擊放大閱讀全圖</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ================= LIGHTBOX MODAL FOR AA-10 ================= */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-2 sm:p-4 flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-100">
                <h4 className="text-lg sm:text-xl font-bold text-[#1B365D] flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-[#D8A44C]" />
                  <span>遇到詐騙怎麼做（165 防詐三步驟）</span>
                </h4>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors focus:outline-none"
                  aria-label="關閉"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body / Image */}
              <div className="overflow-auto p-2 flex justify-center items-center">
                <img 
                  src="/images/AA-10.jpg" 
                  alt="165 防詐三步驟 Full" 
                  className="max-h-[75vh] w-auto object-contain rounded-xl shadow-md"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-3 bg-[#FAF8F3] border-t border-gray-100 text-center text-sm font-semibold text-gray-600">
                如有懷疑，請立即撥打反詐騙專線 <strong>165</strong> 或 <strong>110</strong> 報案求助。
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
