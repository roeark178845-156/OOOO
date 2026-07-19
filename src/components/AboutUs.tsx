import { Smile, HeartHandshake, ShieldCheck, Milestone } from "lucide-react";
import { COMPANY_ABOUT } from "../data";

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
            <span className="rounded-full bg-[#FAF8F3] px-4 py-1.5 text-base font-bold text-[#7BBF6A] border border-[#EBE6DD]">
              🌺 探索我們的初心
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {COMPANY_ABOUT.title}
          </h2>
          
          <p className="text-2xl font-bold text-[#F4B36A] tracking-wide">
            {COMPANY_ABOUT.subtitle}
          </p>

          {/* Warm story letter block */}
          <div className="mt-8 rounded-3xl bg-[#FAF8F3] p-8 md:p-12 border border-[#EBE6DD] shadow-sm relative overflow-hidden">
            {/* Soft decorative background leaf */}
            <div className="absolute top-0 right-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-[#7BBF6A]/5"></div>
            
            <div className="space-y-6 text-lg sm:text-xl text-gray-700 font-medium leading-relaxed">
              {COMPANY_ABOUT.paragraph.map((p, idx) => (
                <p key={idx} className="tracking-wide">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 flex justify-center items-center space-x-2 text-[#7BBF6A]">
              <Milestone className="h-5 w-5" />
              <span className="text-sm font-bold tracking-widest">樂活大家庭・一路溫馨相伴</span>
            </div>
          </div>
        </div>

        {/* Core Values Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div 
                key={idx}
                className="flex flex-col items-center text-center p-8 rounded-2xl border border-[#EBE6DD] bg-[#FAF8F3]/50 hover:bg-white hover:shadow-lg hover:border-transparent transition-all duration-300"
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-full ${val.color} shadow-inner`}>
                  <Icon className="h-8 w-8" />
                </div>
                
                <h3 className="mt-5 text-2xl font-bold text-gray-800">
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
