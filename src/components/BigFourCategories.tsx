import { useState } from "react";
import { Compass, BookOpen, Heart, PartyPopper, CheckCircle, ArrowRight } from "lucide-react";
import { BIG_FOUR_CATEGORIES } from "../data";

interface BigFourProps {
  onScrollToSection: (id: string) => void;
  onFilterLatestEvents: (category: string) => void;
}

export default function BigFourCategories({ onScrollToSection, onFilterLatestEvents }: BigFourProps) {
  const [activeTab, setActiveTab] = useState<string>("travel");

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "travel": return <Compass className="h-7 w-7 text-green-600" />;
      case "course": return <BookOpen className="h-7 w-7 text-blue-600" />;
      case "service": return <Heart className="h-7 w-7 text-rose-600" />;
      case "activity": return <PartyPopper className="h-7 w-7 text-orange-600" />;
      default: return null;
    }
  };

  const getThemeColor = (id: string) => {
    switch (id) {
      case "travel": return "border-[#7BBF6A] bg-[#7BBF6A]/5 hover:bg-[#7BBF6A]/10 text-green-700";
      case "course": return "border-[#8CCAF7] bg-[#8CCAF7]/5 hover:bg-[#8CCAF7]/10 text-blue-700";
      case "service": return "border-rose-300 bg-rose-50 hover:bg-rose-100/50 text-rose-700";
      case "activity": return "border-[#F4B36A] bg-[#F4B36A]/5 hover:bg-[#F4B36A]/10 text-orange-700";
      default: return "";
    }
  };

  const handleActionClick = (id: string) => {
    // Set filter in parent for Latest Events and scroll to it
    onFilterLatestEvents(id);
    onScrollToSection("events");
  };

  return (
    <section id="four-btn" className="py-16 md:py-24 bg-[#FAF8F3]/60 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            充實精彩退休生活
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 font-semibold">
            四大主題精心打造，讓您的每一天都有好去處、好朋友、好回憶。
          </p>
        </div>

        {/* Big Buttons / Tabs Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {BIG_FOUR_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl border-3 text-center transition-all duration-300 transform hover:-translate-y-1 ${
                  isActive 
                    ? "bg-white border-[#7BBF6A] shadow-xl ring-4 ring-[#7BBF6A]/10" 
                    : "bg-white/80 border-[#EBE6DD] hover:border-gray-400"
                }`}
              >
                <span className="text-5xl sm:text-6xl select-none leading-none mb-3">
                  {cat.icon}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-gray-800">
                  {cat.title}
                </span>
                <span className="mt-2 hidden sm:inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-bold text-gray-500">
                  {cat.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Feature Card */}
        {BIG_FOUR_CATEGORIES.map((cat) => {
          if (cat.id !== activeTab) return null;
          return (
            <div 
              key={cat.id}
              className="mt-8 rounded-3xl border border-[#EBE6DD] bg-white p-6 sm:p-10 md:p-12 shadow-md animate-in fade-in slide-in-from-bottom-5 duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Info Text */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7BBF6A]/10">
                      {getCategoryIcon(cat.id)}
                    </div>
                    <span className="text-lg font-extrabold text-[#7BBF6A] tracking-wider">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-3xl font-extrabold text-gray-900 leading-tight">
                    跟著我們一起做 {cat.title}
                  </h3>

                  <p className="text-xl text-[#5C564C] font-semibold leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => handleActionClick(cat.id)}
                      className="flex items-center space-x-2 rounded-2xl bg-[#7BBF6A] hover:bg-[#6AA85B] text-white px-6 py-4 text-lg font-bold shadow-md transition-all transform hover:translate-x-1"
                    >
                      <span>{cat.buttonText}</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Sub-Items Lists / Badges */}
                <div className="lg:col-span-5 bg-[#FAF8F3] p-6 sm:p-8 rounded-2xl border border-[#EBE6DD] space-y-4">
                  <h4 className="text-lg font-bold text-gray-700 border-b border-gray-200 pb-2">
                    包含特色內容：
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {cat.details.map((detail, index) => (
                      <div 
                        key={index} 
                        className="flex items-center space-x-2 text-gray-700 bg-white px-4 py-3 rounded-xl border border-[#EBE6DD]/60 shadow-sm"
                      >
                        <CheckCircle className="h-5 w-5 text-[#7BBF6A] shrink-0" />
                        <span className="text-base font-bold">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-gray-500 font-semibold text-center mt-4">
                    💡 所有項目均由專人陪伴引導，長輩免操心！
                  </p>
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
