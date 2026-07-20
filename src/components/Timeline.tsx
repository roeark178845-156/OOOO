import { useState } from "react";
import { Milestone, CalendarDays, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import { TIMELINE_DATA } from "../data";

export default function Timeline() {
  const [hoveredYear, setHoveredYear] = useState<string | null>(null);

  return (
    <section id="timeline" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative leaf shapes on borders */}
      <div className="absolute -left-10 top-1/4 h-40 w-40 rounded-full bg-[#4E7C59]/5 blur-2xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <span className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-bold text-blue-700">
              🖼️ 歲月痕跡・滿滿感動
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            我們一起走過的精彩
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 font-semibold">
            從相遇到陪伴，每個腳印都記錄著夥伴們的歡笑與幸福淚水。
          </p>
        </div>

        {/* Timeline Line & Grid */}
        <div className="mt-16 relative">
          {/* Vertical central line (hidden on small screen, showing on md+) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#E6E2DA] -translate-x-1/2"></div>

          <div className="space-y-12 relative">
            {TIMELINE_DATA.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isHovered = hoveredYear === item.year;
              
              return (
                <div 
                  key={item.year}
                  onMouseEnter={() => setHoveredYear(item.year)}
                  onMouseLeave={() => setHoveredYear(null)}
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot (Milestone circle) */}
                  <div className="absolute left-4 md:left-1/2 h-10 w-10 rounded-full border-4 border-white bg-[#4E7C59] shadow-md -translate-x-1/2 z-10 flex items-center justify-center text-white transition-all duration-300 transform scale-100 hover:scale-125">
                    <Sparkles className="h-4.5 w-4.5" />
                  </div>

                  {/* Left spacing box or card (offset) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className={`rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${
                      isHovered 
                        ? "bg-[#FAF8F3] border-[#4E7C59] shadow-lg scale-[1.01]" 
                        : "bg-[#FAF8F3]/50 border-[#E6E2DA] shadow-sm"
                    }`}>
                      
                      {/* Year badge */}
                      <div className="flex items-center justify-between">
                        <span className="text-4xl font-black text-[#4E7C59] tracking-wider">
                          {item.year}
                        </span>
                        <CalendarDays className="h-6 w-6 text-gray-400" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-extrabold text-gray-800 mt-3">
                        {item.title}
                      </h3>

                      {/* Sub-desc */}
                      <p className="text-base font-bold text-[#D8A44C] mt-1.5">
                        {item.description}
                      </p>

                      {/* Bullet points detailing the memories */}
                      <div className="mt-6 space-y-3.5 border-t border-dashed border-[#E6E2DA] pt-4">
                        {item.details.map((detail, index) => {
                          const hasPrefixIcon = detail.trim().startsWith("✔️") || detail.trim().startsWith("⭕️");
                          return (
                            <div key={index} className="flex items-start space-x-2 text-gray-700">
                              {!hasPrefixIcon && <CheckCircle2 className="h-5 w-5 text-[#4E7C59] shrink-0 mt-0.5" />}
                              <span className="text-base font-medium leading-relaxed whitespace-pre-line">
                                {detail}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Mobile Image (hidden on md+) */}
                      {item.image && (
                        <div className="mt-6 block md:hidden relative overflow-hidden rounded-2xl border border-[#E6E2DA] p-1.5 bg-white">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-52 object-cover rounded-xl"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}

                      {/* Hearts container */}
                      <div className="flex justify-end space-x-1 mt-6 text-rose-500/80">
                        <Heart className="h-4.5 w-4.5 fill-current" />
                        <Heart className="h-4.5 w-4.5 fill-current" />
                        <Heart className="h-4.5 w-4.5 fill-current animate-bounce" />
                      </div>

                    </div>
                  </div>

                  {/* Empty placeholder half column or Desktop Image */}
                  <div className="hidden md:block w-1/2 px-8">
                    {item.image && (
                      <div className="relative overflow-hidden rounded-3xl border border-[#E6E2DA] shadow-md bg-white p-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.01] group">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-[360px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Emotion Callout */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-2xl bg-orange-50 border border-orange-200">
          <p className="text-lg text-orange-800 font-semibold leading-relaxed">
            💖 「歲月不老，熱情常在。」這不只是一部歷史，更是我們攜手走向更幸福明天的進行式。精彩，因您的加入而更耀眼。
          </p>
        </div>

      </div>
    </section>
  );
}
