import { Smile, HeartHandshake, ShieldCheck, Milestone } from "lucide-react";
import { COMPANY_ABOUT } from "../data";
import { motion } from "motion/react";

export default function AboutUs() {
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
