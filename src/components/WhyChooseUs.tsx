import { CheckCircle2, ShieldCheck, Milestone } from "lucide-react";
import { WHY_CHOOSE_US } from "../data";

export default function WhyChooseUs() {
  return (
    <section id="why-choose" className="py-16 md:py-24 bg-[#FAF8F3]/60 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <span className="rounded-full bg-green-100 px-4 py-1.5 text-sm font-bold text-[#4E7C59]">
              🤝 我們的承諾與堅持
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            為什麼選擇我們？
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 font-semibold">
            安全、專業與滿滿的歡笑，是我們絕不妥協的初衷，讓長輩放心，子女寬心。
          </p>
        </div>

        {/* 6 Grid features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 bg-white p-6 sm:p-8 rounded-3xl border border-[#E6E2DA] shadow-sm hover:shadow-lg hover:border-[#4E7C59]/50 transition-all duration-300"
            >
              {/* Left Green Checked Icon or Emoji Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#4E7C59]/10 text-[#4E7C59] text-2xl font-bold">
                {item.icon}
              </div>

              {/* Text content */}
              <div className="space-y-2">
                <h3 className="flex items-center text-xl font-bold text-gray-800">
                  <CheckCircle2 className="h-5 w-5 text-[#4E7C59] mr-2 shrink-0" />
                  {item.title}
                </h3>
                <p className="text-base text-gray-600 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight footer bar in WhyChooseUs */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#4E7C59] to-[#D8A44C] p-[2px] shadow-md">
          <div className="rounded-[22px] bg-white px-6 py-6 md:py-10 text-center flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-6 text-left">
              <span className="text-[9.375rem] leading-none select-none shrink-0">🛡️</span>
              <div>
                <p className="text-3xl font-black text-gray-900 leading-tight">所有活動皆投保足額旅行業責任險與公共意外責任險</p>
                <p className="text-lg text-gray-600 font-bold mt-2">專業認證樂齡安全領隊全程隨護，打造 100% 零事故安心保障</p>
              </div>
            </div>
            
            <div className="shrink-0 flex items-center space-x-2 bg-[#4E7C59] hover:bg-[#3D6646] text-white font-bold rounded-2xl px-5 py-3 transition-all select-none">
              <ShieldCheck className="h-5 w-5" />
              <span>安全保障 100%</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
