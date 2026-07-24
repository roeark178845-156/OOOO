import { Smile, HeartHandshake, ShieldCheck, Milestone, ChevronDown, ChevronUp } from "lucide-react";
import { COMPANY_ABOUT } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export default function AboutUs() {
  const [isChenExpanded, setIsChenExpanded] = useState(false);
  const [chenImageIndex, setChenImageIndex] = useState(0);
  const [isChenHovered, setIsChenHovered] = useState(false);

  const chenImages = ["/images/chen-01.jpg", "/images/chen-02.jpg"];

  useEffect(() => {
    if (isChenHovered) return;
    const timer = setInterval(() => {
      setChenImageIndex((prev) => (prev + 1) % chenImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isChenHovered, chenImages.length]);

  const coreValues = [
    {
      title: "找到健康",
      desc: "規律參與動靜皆宜的運動與養生課程，維持身心靈的最佳狀態。",
      icon: ShieldCheck,
      color: "bg-green-100 text-green-700"
    },
    {
      title: "收穫快樂",
      desc: "在山海大自然中深呼吸，在手作與音符中探索全新自我樂趣。",
      icon: Smile,
      color: "bg-orange-100 text-orange-700"
    },
    {
      title: "擁抱歸屬",
      desc: "走進有溫度的社群，認識熱情、陪伴彼此、共創回憶的長遠夥伴。",
      icon: HeartHandshake,
      color: "bg-blue-100 text-blue-700"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-y border-[#FAF8F3]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          
          <div className="flex justify-center">
            <span className="rounded-full bg-[#FAF8F3] px-4 py-1.5 text-base font-bold text-[#4E7C59] border border-[#E6E2DA]">
              🌺 探索我們的初心
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {COMPANY_ABOUT.title}
          </h2>
          
          <p className="text-2xl font-bold text-[#D8A44C] tracking-wide">
            {COMPANY_ABOUT.subtitle}
          </p>

          {/* Warm story letter block - Modernized with Premium Accent and Inner Border Frame */}
          <motion.div 
            className="mt-10 rounded-3xl bg-gradient-to-br from-[#FAF8F3] to-[#F3EDE3] p-8 md:p-12 border border-[#E6E2DA] shadow-[0_20px_50px_rgba(78,124,89,0.06)] relative overflow-hidden group hover:shadow-[0_24px_60px_rgba(78,124,89,0.12)] transition-all duration-500"
            whileHover={{ y: -4 }}
          >
            {/* Elegant Modern Design Elements */}
            {/* 1. Subtle gold/emerald gradient glow on top border */}
            <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-[#4E7C59] via-[#D8A44C] to-[#4E7C59]" />

            {/* 2. Delicate dashed inner frame for high-end plaque look */}
            <div className="absolute inset-3 rounded-[20px] border border-dashed border-[#4E7C59]/15 pointer-events-none group-hover:border-[#4E7C59]/30 transition-colors duration-500" />

            {/* 3. Soft organic decorative light green backdrop ring */}
            <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-[#4E7C59]/8 blur-xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
            <div className="absolute bottom-0 left-0 h-32 w-32 -translate-x-8 translate-y-8 rounded-full bg-[#D8A44C]/8 blur-xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />

            {/* Decorative Quote Marks to focus eyes and look editorial */}
            <div className="absolute top-5 left-6 text-7xl text-[#4E7C59]/10 font-serif select-none pointer-events-none">“</div>
            <div className="absolute bottom-1 right-6 text-7xl text-[#4E7C59]/10 font-serif select-none pointer-events-none">”</div>

            <div className="relative z-10 space-y-6 text-lg sm:text-xl text-gray-700 font-medium leading-relaxed px-2">
              {COMPANY_ABOUT.paragraph.map((p, idx) => (
                <p key={idx} className="tracking-wide">
                  {p}
                </p>
              ))}
            </div>

            <div className="relative z-10 mt-8 flex justify-center items-center space-x-2 text-[#4E7C59]">
              <Milestone className="h-5 w-5 animate-pulse text-[#4E7C59]" />
              <span className="text-sm font-bold tracking-widest text-[#4E7C59] uppercase">樂活大家庭・一路溫馨相伴</span>
            </div>
          </motion.div>

          {/* Guiding sentence below concept card */}
          <div className="mt-12 text-center">
            <p className="text-lg sm:text-xl font-bold text-[#2d6a4f] tracking-wide">
              用陪伴與專業，讓每一段樂齡生活更加精彩。
            </p>
          </div>

          {/* Team Member Cards Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left items-stretch">
            {/* Card 1: 陳柏霖 */}
            <motion.div
              className="rounded-[24px] bg-[#FAF8F3] border border-[#E6E2DA] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              {/* Photo Area 4:5 Aspect Ratio */}
              <div
                className="aspect-[4/5] w-full relative overflow-hidden bg-stone-200"
                onMouseEnter={() => setIsChenHovered(true)}
                onMouseLeave={() => setIsChenHovered(false)}
              >
                <AnimatePresence mode="sync">
                  <motion.img
                    key={chenImages[chenImageIndex]}
                    src={chenImages[chenImageIndex]}
                    alt={`陳柏霖 ${chenImageIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover object-[20%_center]"
                  />
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAF8F3] to-transparent pointer-events-none z-10" />

                {/* Dot Indicators */}
                <div className="absolute bottom-3 inset-x-0 flex justify-center items-center gap-2 z-20 pointer-events-auto">
                  {chenImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setChenImageIndex(idx)}
                      aria-label={`切換至第 ${idx + 1} 張照片`}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                        idx === chenImageIndex
                          ? "bg-[#2d6a4f] scale-110"
                          : "bg-stone-300 hover:bg-stone-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow text-left">
                <div className="mb-3">
                  <h3 className="text-[22px] sm:text-[26px] font-bold text-[#2d6a4f] leading-snug">
                    陳柏霖
                  </h3>
                  <p className="text-[#D8A44C] font-semibold text-base mt-1">
                    創辦人 / 樂齡生活推手
                  </p>
                </div>

                <p className="text-stone-700 leading-[1.8] text-base font-normal">
                  自 2024 年投入樂齡課程與旅遊活動推廣，秉持「學習沒有年齡限制，陪伴讓人生更加精彩」的理念，致力整合學習、健康、休閒、旅行與公益資源，陪伴每一位長者持續成長、拓展視野，享受充實而有意義的樂齡人生。
                </p>

                {/* Expand Toggle Button */}
                <div className="mt-4 pt-2">
                  <button
                    onClick={() => setIsChenExpanded(!isChenExpanded)}
                    className="inline-flex items-center gap-1.5 text-[#2d6a4f] hover:text-[#1b4332] font-bold text-base transition-colors focus:outline-none"
                  >
                    <span>{isChenExpanded ? "收起完整介紹" : "閱讀完整介紹"}</span>
                    {isChenExpanded ? (
                      <ChevronUp className="w-5 h-5 text-[#2d6a4f]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#2d6a4f]" />
                    )}
                  </button>
                </div>

                {/* Expandable Full Bio */}
                <AnimatePresence>
                  {isChenExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden mt-4 pt-4 border-t border-[#E6E2DA] text-stone-700 leading-[1.8] text-base space-y-4 text-left"
                    >
                      <p>
                        自 2024 年投入樂齡課程與旅遊活動推廣以來，陳柏霖始終秉持著「學習沒有年齡限制，陪伴讓人生更加精彩」的理念，致力於打造結合學習、健康、休閒與旅行的樂齡生活平台，希望陪伴每一位長者在人生不同階段持續成長、保持健康、拓展視野，享受充實且有意義的第二人生。
                      </p>
                      <p>
                        陳柏霖深信，退休不是人生的終點，而是另一段精彩旅程的開始。透過多元樂齡課程、健康促進、才藝學習、文化體驗，以及精心規劃的國內外旅遊活動，讓長者在學習中成長，在旅行中探索，在交流中建立友誼，不僅提升身心健康，也讓生活更加豐富精彩，留下珍貴的人生回憶。
                      </p>
                      <p>
                        多年來，陳柏霖始終以陪伴與關懷為核心，相信真正的樂齡教育，不只是知識的傳遞，更是幸福生活的實踐。無論是在課堂上共同學習，或是在旅途中攜手同行，都希望讓每一位長者感受到被尊重、被關心、被需要，在每一次課程中收穫成長，在每一趟旅行中收穫感動，在每一次相聚中收穫快樂。
                      </p>
                      <p>
                        未來，陳柏霖將持續整合樂齡教育、健康促進、休閒旅遊、文化體驗、公益關懷、世代共學及多元學習資源，打造更完善、更具溫度的樂齡平台，陪伴每一位長者走出家門、走向人群、走進世界，讓學習成為生活的一部分，讓旅行成為人生最美的風景，共同創造健康、快樂、幸福且充滿回憶的樂齡人生。
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Card 2: 孫潔馨 */}
            <motion.div
              className="rounded-[24px] bg-[#FAF8F3] border border-[#E6E2DA] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              {/* Photo Area 4:5 Aspect Ratio */}
              <div className="aspect-[4/5] w-full relative overflow-hidden bg-stone-200">
                <img
                  src="/images/sun.jpg"
                  alt="孫潔馨"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAF8F3] to-transparent pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow text-left">
                <div className="mb-3">
                  <h3 className="text-[22px] sm:text-[26px] font-bold text-[#2d6a4f] leading-snug">
                    孫潔馨
                  </h3>
                  <p className="text-[#D8A44C] font-semibold text-base mt-1">
                    樂齡課程與旅遊企劃
                  </p>
                </div>

                <div className="text-stone-700 leading-[1.8] text-base font-normal space-y-3">
                  <p>大家好，我是潔馨，很高興有機會陪伴大家一起學習、一起旅行！</p>
                  <p>我負責規劃樂齡課程與旅遊活動，希望讓每一位朋友都能在輕鬆愉快的氛圍中學習新知、探索美景、認識新朋友，讓生活更加精彩、有趣。</p>
                  <p>期待在樂活學堂與大家相見，一起把每一天都過得充實又快樂，創造屬於我們的美好回憶！🌸</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Core Values Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            const iconDuration = `${2.0 + idx * 0.3}s`;
            const iconDelay = `${idx * 0.2}s`;
            const titleDuration = `${2.0 + idx * 0.3}s`;
            const titleDelay = `${idx * 0.2 + 0.1}s`;

            return (
              <div 
                key={idx}
                className="flex flex-col items-center text-center p-8 rounded-2xl border border-[#E6E2DA] bg-[#FAF8F3]/50 hover:bg-white hover:shadow-lg hover:border-transparent transition-all duration-300"
              >
                <div 
                  className={`flex h-16 w-16 items-center justify-center rounded-full ${val.color} shadow-inner animate-bounce`}
                  style={{ animationDuration: iconDuration, animationDelay: iconDelay }}
                >
                  <Icon className="h-8 w-8" />
                </div>
                
                <h3 
                  className="mt-5 text-2xl font-bold text-gray-800 animate-bounce"
                  style={{ animationDuration: titleDuration, animationDelay: titleDelay }}
                >
                  {val.title}
                </h3>
                
                <p className="mt-3 text-base text-gray-600 font-medium leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
