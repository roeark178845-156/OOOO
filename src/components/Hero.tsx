import { Compass, UserPlus, Heart, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onScrollToSection: (id: string) => void;
  onOpenJoinModal: () => void;
}

export default function Hero({ onScrollToSection, onOpenJoinModal }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F3] via-[#FAF8F3] to-[#FAF8F3]/50 py-12 md:py-20 lg:py-28">
      {/* Background soft color spots */}
      <div className="absolute top-10 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#8CCAF7]/20 blur-3xl"></div>
      <div className="absolute right-10 bottom-10 -z-10 h-80 w-80 rounded-full bg-[#4E7C59]/10 blur-3xl"></div>
      <div className="absolute left-10 top-1/3 -z-10 h-64 w-64 rounded-full bg-[#D8A44C]/15 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Tagline */}
            <div className="inline-flex items-center space-x-2 rounded-full bg-[#4E7C59]/10 px-4 py-2 text-[#4E7C59]">
              <Sparkles className="h-5 w-5 animate-spin" style={{ animationDuration: "3s" }} />
              <span className="text-base font-bold tracking-wide">台灣最溫馨的樂齡生活社群</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C2E21] leading-tight tracking-tight select-none">
              {/* Phrase 1: Animated letter by letter in continuous loop */}
              <span className="inline-block mb-2">
                {"退休 不是人生的終點".split("").map((char, index) => (
                  <motion.span
                    key={`char1-${index}`}
                    className="inline-block"
                    animate={{
                      opacity: [0, 1, 1, 0, 0],
                      y: [15, 0, 0, -15, 15],
                      filter: ["blur(4px)", "blur(0px)", "blur(0px)", "blur(4px)", "blur(4px)"],
                    }}
                    transition={{
                      duration: 8,
                      times: [0, 0.12, 0.75, 0.85, 1],
                      repeat: Infinity,
                      delay: index * 0.08,
                      ease: "easeInOut",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
              <br />
              {/* Phrase 2: Shimmering premium gradient and staggered animation in continuous loop */}
              <motion.span 
                className="inline-block bg-gradient-to-r from-[#3E6B48] via-[#D8A44C] to-[#3E6B48] bg-clip-text text-transparent"
                style={{
                  backgroundSize: "200% auto",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {"慢活人生的新起點。".split("").map((char, index) => (
                  <motion.span
                    key={`char2-${index}`}
                    className="inline-block"
                    animate={{
                      opacity: [0, 1, 1, 0, 0],
                      y: [15, 0, 0, -15, 15],
                      filter: ["blur(4px)", "blur(0px)", "blur(0px)", "blur(4px)", "blur(4px)"],
                    }}
                    transition={{
                      duration: 8,
                      times: [0, 0.12, 0.75, 0.85, 1],
                      repeat: Infinity,
                      delay: 0.9 + index * 0.08,
                      ease: "easeInOut",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-semibold text-[#5C564C] leading-relaxed">
              一起旅行 ． 一起學習 ． 一起做公益 ． 一起創造幸福回憶
            </p>

            {/* Badges for elderly friendliness */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="flex flex-col items-center lg:items-start p-3 bg-white rounded-xl border border-[#E6E2DA] shadow-sm">
                <span className="text-3xl">😊</span>
                <span className="mt-1.5 text-sm font-bold text-gray-700">貼心無障礙</span>
              </div>
              <div className="flex flex-col items-center lg:items-start p-3 bg-white rounded-xl border border-[#E6E2DA] shadow-sm">
                <span className="text-3xl">🛡️</span>
                <span className="mt-1.5 text-sm font-bold text-gray-700">安心安全隨行</span>
              </div>
              <div className="flex flex-col items-center lg:items-start p-3 bg-white rounded-xl border border-[#E6E2DA] shadow-sm">
                <span className="text-3xl">❤️</span>
                <span className="mt-1.5 text-sm font-bold text-gray-700">有溫度的陪伴</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onScrollToSection("events")}
                className="flex w-full sm:w-auto items-center justify-center space-x-2 rounded-2xl bg-[#4E7C59] hover:bg-[#3D6646] text-white px-8 py-5 text-xl font-bold shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1"
              >
                <Compass className="h-6 w-6" />
                <span>🟢 查看最新活動</span>
              </button>
              
              <button
                onClick={onOpenJoinModal}
                className="flex w-full sm:w-auto items-center justify-center space-x-2 rounded-2xl bg-[#D8A44C] hover:bg-[#C08E3C] text-white px-8 py-5 text-xl font-bold shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-1"
              >
                <UserPlus className="h-6 w-6" />
                <span>🟠 立即加入我們</span>
              </button>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[450px] lg:max-w-none">
              {/* Main Decorative Background Card border */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#4E7C59] to-[#D8A44C] opacity-30 blur-md"></div>
              
              {/* Picture Frame / Circular Sticker Design */}
              <div className="relative overflow-hidden rounded-full border-8 border-[#27422E] bg-white shadow-2xl aspect-square w-full max-w-[420px] mx-auto p-6 flex flex-col justify-between items-center text-center">
                
                {/* Sticker inner thin circle */}
                <div className="absolute inset-2 rounded-full border-2 border-[#E6E2DA] pointer-events-none"></div>

                {/* Top Half: Illustration Area */}
                <div className="relative mt-14 flex flex-col items-center">
                  {/* Heart background for couple */}
                  <div className="relative h-32 w-32 flex items-center justify-center">
                    {/* Floating Hearts & Sun & Stickers forming a beautiful 2x larger semi-circular arc */}
                    
                    {/* Item 1: ☀️ (Sun) - Leftmost */}
                    <span 
                      className="absolute w-14 h-14 text-4xl animate-bounce flex items-center justify-center cursor-default select-none" 
                      style={{ 
                        left: "-56px", 
                        top: "11px", 
                        animationDuration: "2.0s", 
                        animationDelay: "0s" 
                      }}
                      title="活力暖陽"
                    >
                      ☀️
                    </span>

                    {/* Item 2: 📷 (Camera) - Top-Left */}
                    <span 
                      className="absolute w-14 h-14 text-4xl animate-bounce flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 select-none" 
                      style={{ 
                        left: "-31px", 
                        top: "-31px", 
                        animationDuration: "2.0s", 
                        animationDelay: "0s" 
                      }} 
                      title="慢活旅遊"
                    >
                      📷
                    </span>

                    {/* Item 3: 🎨 (Palette) - Top-Center-Left */}
                    <span 
                      className="absolute w-14 h-14 text-4xl animate-bounce flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 select-none" 
                      style={{ 
                        left: "11px", 
                        top: "-56px", 
                        animationDuration: "2.0s", 
                        animationDelay: "0s" 
                      }} 
                      title="樂活課程"
                    >
                      🎨
                    </span>

                    {/* Item 4: ❤️ (Heart) - Top-Center-Right */}
                    <span 
                      className="absolute w-14 h-14 text-4xl animate-bounce flex items-center justify-center cursor-default select-none" 
                      style={{ 
                        left: "61px", 
                        top: "-56px", 
                        animationDuration: "2.0s", 
                        animationDelay: "0s" 
                      }}
                      title="愛與溫暖"
                    >
                      ❤️
                    </span>

                    {/* Item 5: 💼 (Suitcase) - Top-Right */}
                    <span 
                      className="absolute w-14 h-14 text-4xl animate-bounce flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 select-none" 
                      style={{ 
                        left: "103px", 
                        top: "-31px", 
                        animationDuration: "2.0s", 
                        animationDelay: "0s" 
                      }} 
                      title="迎風出發"
                    >
                      💼
                    </span>

                    {/* Item 6: 📓 (Notebook) - Rightmost */}
                    <span 
                      className="absolute w-14 h-14 text-4xl animate-bounce flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 select-none" 
                      style={{ 
                        left: "128px", 
                        top: "11px", 
                        animationDuration: "2.0s", 
                        animationDelay: "0s" 
                      }} 
                      title="精彩日程"
                    >
                      📓
                    </span>
                    
                    {/* Crop of senior couple */}
                    <div className="h-28 w-28 rounded-full border-4 border-amber-100 overflow-hidden shadow-md bg-[#FAF8F3]">
                      <img
                        src="/images/regenerated_image_1784552926897.png"
                        alt="樂活退休夫婦"
                        className="h-full w-full object-cover scale-110 opacity-95"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "/images/fallback.jpg";
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Middle Half: Text Content */}
                <div className="relative z-10 my-1 space-y-1.5 px-4">
                  <h3 className="text-xl sm:text-2xl font-black text-amber-950 leading-tight">
                    退休不是終點，
                  </h3>
                  <h3 className="text-xl sm:text-2xl font-black text-[#8E5136] leading-tight">
                    而是「<span className="text-[#4E7C59]">玩美人生</span>」的起跑點！
                  </h3>
                  
                  <div className="inline-block mt-2 rounded-full bg-orange-50 border border-orange-200 px-4 py-1 text-xs sm:text-sm font-black text-orange-600">
                    📅 7月～10月課程＆旅遊開放報名
                  </div>
                </div>

                {/* Bottom Half: Curved Signboard / Badge */}
                <div className="relative z-10 w-full mb-2">
                  <div className="inline-flex items-center space-x-2 bg-[#27422E] text-white px-6 py-2 rounded-full font-black text-sm tracking-wide shadow-md border-2 border-white/20">
                    <span>🙌 樂齡課程及旅遊報名處 🙌</span>
                  </div>
                </div>

                {/* Inner decorative leaves/hearts */}
                <div className="absolute bottom-12 left-10 text-emerald-700 text-sm opacity-60">🌿</div>
                <div className="absolute bottom-12 right-10 text-emerald-700 text-sm opacity-60">🌿</div>
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
