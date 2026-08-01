/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  Calendar, 
  MapPin, 
  Ticket, 
  X, 
  CheckCircle, 
  Users, 
  Heart, 
  Smile, 
  Compass, 
  UserPlus 
} from "lucide-react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ImageSlider from "./components/ImageSlider";
import AboutUs from "./components/AboutUs";
import BigFourCategories from "./components/BigFourCategories";
import Timeline from "./components/Timeline";
import WhyChooseUs from "./components/WhyChooseUs";
import LatestEvents from "./components/LatestEvents";
import GallerySmiles from "./components/GallerySmiles";
import AntiFraud from "./components/AntiFraud";
import OurServices from "./components/OurServices";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import AIConsultantWidget from "./components/AIConsultantWidget";
import { EventItem } from "./types";

export default function App() {
  // Navigation states
  const [activeSection, setActiveSection] = useState("hero");
  
  // Registration and modal states
  const [registeredEvents, setRegisteredEvents] = useState<EventItem[]>([]);
  const [filterCategory, setFilterCategory] = useState("all");
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  // Auto-scrolling utility
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  // Listen to scrolls to highlight active nav sections
  useEffect(() => {
    const sections = ["hero", "about", "four-btn", "timeline", "events", "gallery", "anti-fraud", "services", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Event Registration
  const handleRegisterEvent = (event: EventItem) => {
    const isAlreadyReg = registeredEvents.some((e) => e.id === event.id);
    if (isAlreadyReg) {
      setRegisteredEvents(prev => prev.filter((e) => e.id !== event.id));
    } else {
      setRegisteredEvents(prev => [...prev, event]);
      // Show notification/open schedule tray
      setIsScheduleOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3] font-sans antialiased text-gray-800">
      
      {/* 1. Header (Navigation) */}
      <Header 
        onOpenAIChat={() => setIsAIChatOpen(true)}
        onScrollToSection={handleScrollToSection}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main>
        {/* 2. Hero Section (Section 1) */}
        <Hero 
          onScrollToSection={handleScrollToSection}
          onOpenJoinModal={() => setIsJoinModalOpen(true)}
        />

        {/* Hero Slideshow */}
        <ImageSlider />

        {/* 3. About Us Section (Section 2) */}
        <AboutUs />

        {/* 4. Four Big Buttons Categories (Section 3) */}
        <BigFourCategories 
          onScrollToSection={handleScrollToSection}
          onFilterLatestEvents={setFilterCategory}
        />

        {/* 5. Timeline Journey (Section 4) */}
        <Timeline />

        {/* 6. Why Choose Us (Section 5) */}
        <WhyChooseUs />

        {/* 7. Latest Events (Section 6) */}
        <LatestEvents 
          onRegisterEvent={handleRegisterEvent}
          registeredEventIds={registeredEvents.map((e) => e.id)}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
        />

        {/* 8. Smile Gallery (Section 7) */}
        <GallerySmiles />

        {/* 9. Anti-Fraud Awareness Section (Section 8) */}
        <AntiFraud />

        {/* 10. Our Services (Section 9) */}
        <OurServices />

        {/* 10. Call to Action / Join us Form (Section 9) */}
        <div id="contact">
          <FinalCTA />
        </div>
      </main>

      {/* 11. Footer */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* 12. Floating AI Planner Chatbot */}
      <AIConsultantWidget 
        isOpen={isAIChatOpen}
        onClose={() => setIsAIChatOpen(false)}
        onOpen={() => setIsAIChatOpen(true)}
      />

      {/* 13. Interactive "我的樂活行程表" (Schedule Tray) */}
      {registeredEvents.length > 0 && (
        <div className="fixed bottom-6 left-6 z-40">
          {!isScheduleOpen ? (
            <button
              onClick={() => setIsScheduleOpen(true)}
              className="flex items-center space-x-2 rounded-full bg-[#4E7C59] hover:bg-[#3D6646] text-white px-5 py-3.5 shadow-2xl transition-all transform hover:scale-105"
            >
              <Ticket className="h-5 w-5 animate-bounce" />
              <span className="text-base font-black">我的行程表 ({registeredEvents.length})</span>
            </button>
          ) : (
            <div className="w-[90vw] sm:w-[350px] bg-white border border-[#E6E2DA] rounded-3xl p-5 shadow-2xl space-y-4 animate-in slide-in-from-left-6 duration-200">
              <div className="flex items-center justify-between border-b pb-2">
                <h4 className="text-lg font-black text-gray-800 flex items-center space-x-1.5">
                  <Calendar className="h-5 w-5 text-[#4E7C59]" />
                  <span>🗓️ 我的樂活日程</span>
                </h4>
                <button 
                  onClick={() => setIsScheduleOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* List of registered events */}
              <div className="space-y-3 max-h-[250px] overflow-y-auto pr-1">
                {registeredEvents.map((evt) => (
                  <div key={evt.id} className="p-3.5 rounded-xl bg-[#FAF8F3] border border-[#E6E2DA] space-y-1 relative group">
                    <button
                      onClick={() => handleRegisterEvent(evt)}
                      className="absolute top-2 right-2 text-xs font-semibold text-rose-500 hover:text-rose-700 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      取消預約
                    </button>
                    <p className="text-sm font-black text-gray-800 pr-10">{evt.title}</p>
                    <div className="flex items-center space-x-1.5 text-xs text-gray-500 font-bold">
                      <Calendar className="h-3.5 w-3.5 text-[#4E7C59]" />
                      <span>{evt.date}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-xs text-gray-500 font-semibold">
                      <MapPin className="h-3.5 w-3.5 text-[#4E7C59]" />
                      <span className="truncate max-w-[180px]">{evt.location}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action callout */}
              <div className="pt-2 border-t flex flex-col items-center space-y-2">
                <div className="flex items-center space-x-1 text-[11px] font-bold text-[#4E7C59]">
                  <CheckCircle className="h-3.5 w-3.5" />
                  <span>預約成功！報名資訊已幫您妥善暫存。</span>
                </div>
                <button
                  onClick={() => handleScrollToSection("contact")}
                  className="w-full rounded-xl bg-gradient-to-r from-[#D8A44C] to-amber-500 text-white py-2.5 text-sm font-bold text-center hover:opacity-90 shadow-sm"
                >
                  確認填寫會員資料，完成保留 ➔
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 14. Global Join Membership Modal */}
      {isJoinModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsJoinModalOpen(false)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-gray-600 hover:text-gray-900 shadow"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="max-h-[85vh] overflow-y-auto">
              <FinalCTA isModalMode={true} onCloseModal={() => setIsJoinModalOpen(false)} />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
