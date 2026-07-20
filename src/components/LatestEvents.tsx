import { useState } from "react";
import { Calendar, MapPin, Users, Heart, Check, Clock, Sparkles } from "lucide-react";
import { LATEST_EVENTS } from "../data";
import { EventItem } from "../types";

interface LatestEventsProps {
  onRegisterEvent: (event: EventItem) => void;
  registeredEventIds: string[];
  filterCategory: string;
  setFilterCategory: (cat: string) => void;
}

export default function LatestEvents({ 
  onRegisterEvent, 
  registeredEventIds, 
  filterCategory, 
  setFilterCategory 
}: LatestEventsProps) {
  
  const categories = [
    { id: "all", label: "全部活動", emoji: "📢" },
    { id: "travel", label: "樂活旅遊", emoji: "🏖" },
    { id: "course", label: "樂活課程", emoji: "🎹" },
    { id: "service", label: "公益服務", emoji: "❤️" }
  ];

  const filteredEvents = LATEST_EVENTS.filter(evt => {
    if (filterCategory === "all") return true;
    return evt.category === filterCategory;
  });

  return (
    <section id="events" className="py-16 md:py-24 bg-white border-b border-[#FAF8F3]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header and Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E6E2DA]">
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 rounded-full bg-green-50 border border-green-200 px-4 py-1 text-sm font-bold text-[#4E7C59]">
              <span>🔥 搶先卡位・最新出發</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              最新活動
            </h2>
            <p className="text-base text-gray-500 font-semibold max-w-xl">
              探索最熱門、近期即將成團的精彩行程與課程，名額有限，立即報名！
            </p>
          </div>

          {/* Category Tabs list */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-full text-base font-bold border transition-all ${
                  (filterCategory === cat.id)
                    ? "bg-[#4E7C59] border-[#4E7C59] text-white shadow-md shadow-green-100"
                    : "bg-[#FAF8F3] border-[#E6E2DA] text-gray-600 hover:bg-[#EBE6DD]"
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEvents.map((evt) => {
            const isRegistered = registeredEventIds.includes(evt.id);
            const isAlmostFull = evt.slots <= 6;
            
            return (
              <div 
                key={evt.id}
                className={`flex flex-col aspect-square w-full overflow-hidden rounded-3xl border transition-all duration-300 bg-white relative ${
                  isRegistered 
                    ? "border-[#4E7C59] ring-4 ring-[#4E7C59]/5" 
                    : "border-[#E6E2DA] hover:border-[#4E7C59]/40 hover:shadow-xl"
                }`}
              >
                {/* Event Image with Badge */}
                <div className="relative h-[45%] w-full shrink-0 bg-gray-100 overflow-hidden">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/images/fallback.jpg";
                    }}
                  />
                  {/* Category tag bubble */}
                  <span className="absolute top-3 left-3 rounded-xl bg-black/70 backdrop-blur-sm px-3 py-1.5 text-xs font-bold text-white tracking-wider flex items-center space-x-1 z-10">
                    <span>
                      {evt.category === "travel" ? "🏖 旅遊" : evt.category === "course" ? "🎹 課程" : "❤️ 公益"}
                    </span>
                  </span>

                  {/* Registered checkmark overlay */}
                  {isRegistered && (
                    <div className="absolute inset-0 bg-green-900/40 backdrop-blur-xs flex items-center justify-center z-10">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#4E7C59] shadow-lg">
                        <Check className="h-8 w-8 stroke-[3]" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Event Details Content */}
                <div className="p-5 sm:p-6 flex flex-col justify-between h-[55%] flex-grow overflow-hidden">
                  <div className="space-y-2 min-h-0 flex-1 overflow-hidden flex flex-col justify-start">
                    {/* Almost full warning indicator */}
                    {isAlmostFull && !isRegistered && (
                      <div className="shrink-0 mb-1">
                        <span className="inline-flex items-center space-x-1 rounded-md bg-rose-50 border border-rose-200 px-2 py-0.5 text-[10px] sm:text-xs font-bold text-rose-600 animate-pulse">
                          <Sparkles className="h-3 w-3" />
                          <span>即將額滿 (剩餘 {evt.slots} 位)</span>
                        </span>
                      </div>
                    )}

                    <h3 className="text-base sm:text-lg font-black text-gray-800 leading-snug line-clamp-2 shrink-0">
                      {evt.title}
                    </h3>

                    {/* Metadata lines */}
                    <div className="space-y-1 text-xs text-gray-600 font-semibold shrink-0">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-3.5 w-3.5 text-[#4E7C59] shrink-0" />
                        <span className="truncate">{evt.date} <span className="text-[9px] text-gray-400 bg-gray-100 px-1 py-0.5 rounded ml-1 font-semibold">{evt.time}</span></span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-3.5 w-3.5 text-[#4E7C59] shrink-0" />
                        <span className="truncate">{evt.location}</span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-3 overflow-hidden flex-1 mt-1">
                      {evt.description}
                    </p>
                  </div>

                  {/* Event bottom card action and info */}
                  <div className="flex items-center justify-between pt-2.5 border-t border-[#E6E2DA]/60 shrink-0 mt-2">
                    <div className="flex items-center space-x-1 text-[10px] font-bold text-gray-500">
                      <Users className="h-3.5 w-3.5 text-gray-400" />
                      <span className="whitespace-nowrap">剩 {evt.slots} / 限 {evt.maxSlots}</span>
                    </div>

                    <button
                      onClick={() => onRegisterEvent(evt)}
                      className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all shadow-sm shrink-0 whitespace-nowrap ${
                        isRegistered 
                          ? "bg-gray-100 text-gray-600 hover:bg-gray-200" 
                          : "bg-[#4E7C59] hover:bg-[#3D6646] text-white hover:shadow-md"
                      }`}
                    >
                      {isRegistered ? "取消" : "報名 ➔"}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* View more block */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => setFilterCategory("all")}
            className="inline-flex items-center space-x-2 rounded-full border-2 border-gray-300 hover:border-[#4E7C59] bg-white text-gray-700 hover:text-[#4E7C59] px-8 py-3.5 text-base font-bold transition-all hover:shadow-md"
          >
            <span>✨ 瀏覽全部活動內容</span>
          </button>
        </div>

      </div>
    </section>
  );
}
