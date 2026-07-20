import { LayoutGrid, Sparkles, Heart } from "lucide-react";
import { OUR_SERVICES } from "../data";

export default function OurServices() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white border-y border-[#FAF8F3]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <span className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-bold text-blue-700">
              💎 全方位關懷・全心服務
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            我們的服務
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 font-semibold">
            專業團隊全程陪伴，從豐富多元的心靈學習，到安心安全的精彩旅程。
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {OUR_SERVICES.map((serv, index) => {
            // Give specific highlights to certain cards to create an interesting "Bento rhythm"
            const isHighlighted = serv.id === "serv-3" || serv.id === "serv-7";
            return (
              <div 
                key={serv.id}
                className={`flex flex-col justify-between p-6 sm:p-8 rounded-3xl border transition-all duration-300 transform hover:-translate-y-1 ${
                  isHighlighted 
                    ? "bg-gradient-to-br from-[#4E7C59]/10 to-[#D8A44C]/10 border-[#4E7C59] shadow-md" 
                    : "bg-[#FAF8F3]/40 border-[#E6E2DA] hover:bg-[#FAF8F3] hover:shadow-lg"
                }`}
              >
                <div className="space-y-4">
                  {/* Service Icon with a circular frame */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm border border-[#E6E2DA]/60">
                    {serv.icon}
                  </div>

                  <h3 className="text-xl font-black text-gray-800 flex items-center space-x-1">
                    <span>{serv.title}</span>
                  </h3>

                  <p className="text-base text-gray-600 font-medium leading-relaxed">
                    {serv.description}
                  </p>
                </div>


              </div>
            );
          })}
        </div>

        {/* Under-grid Trust Card */}
        <div className="mt-12 bg-green-50/50 rounded-3xl border border-green-200 p-6 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="text-3xl shrink-0">🤝</span>
          <p className="text-base text-green-900 font-bold leading-relaxed">
            我們致力於打造專屬樂齡族群的全方位生活平台，結合樂齡課程、主題旅遊與公益活動，陪伴每一位樂齡朋友持續學習、探索世界、連結社會，實現健康、快樂、有價值的人生。
          </p>
        </div>

      </div>
    </section>
  );
}
