import { useState } from "react";
import { 
  Home, 
  Users, 
  Compass, 
  BookOpen, 
  Heart, 
  Sparkles, 
  Image, 
  Phone, 
  Menu, 
  X,
  MessageSquare,
  ShieldCheck
} from "lucide-react";

interface HeaderProps {
  onOpenAIChat: () => void;
  onScrollToSection: (id: string) => void;
  activeSection: string;
}

export default function Header({ onOpenAIChat, onScrollToSection, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "首頁", icon: Home },
    { id: "about", label: "關於我們", icon: Users },
    { id: "four-btn", label: "四大板塊", icon: Sparkles },
    { id: "timeline", label: "精彩足跡", icon: Image },
    { id: "events", label: "最新活動", icon: Compass },
    { id: "gallery", label: "精彩回憶", icon: Image },
    { id: "anti-fraud", label: "防詐宣導", icon: ShieldCheck },
    { id: "services", label: "我們的服務", icon: BookOpen },
    { id: "contact", label: "聯絡我們", icon: Phone },
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E6DEC8] bg-[#FAF7F0]/92 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl h-[68px] lg:h-[88px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo and Brand */}
        <div 
          onClick={() => handleNavClick("hero")}
          className="flex cursor-pointer items-center space-x-3 select-none group"
        >
          <div className="flex h-11 w-11 lg:h-12 lg:w-12 items-center justify-center rounded-2xl bg-[#284936] text-white shadow-sm border border-[#284936]/20 transition-transform duration-300 group-hover:scale-105">
            <span className="text-xl font-bold font-wenkai">玩</span>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-[19.4px] sm:text-[23.3px] font-black text-[#284936] tracking-tight font-wenkai transition-colors duration-200">
              玩美人生💞Wiselohas🌸
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center space-x-1.5 rounded-xl px-3 py-2 text-[15px] font-medium font-noto whitespace-nowrap transition-all duration-200 ${
                  isActive 
                    ? "bg-[#6E9477] text-white shadow-xs font-semibold" 
                    : "text-[#284936] hover:bg-[#6E9477]/12 hover:text-[#284936]"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-[#6E9477]"}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
          
          <button
            onClick={onOpenAIChat}
            className="ml-3 flex items-center space-x-2 rounded-2xl bg-[#E9A85D] hover:bg-[#d8964b] text-white px-4 py-2.5 text-sm font-bold font-noto shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <MessageSquare className="h-4 w-4" />
            <span>AI 退休生活規劃師</span>
          </button>
        </nav>

        {/* Medium Screen Navigation (lg to xl) */}
        <div className="hidden lg:flex xl:hidden items-center space-x-1">
          <button
            onClick={() => handleNavClick("hero")}
            className={`px-2.5 py-1.5 rounded-lg text-sm font-semibold ${activeSection === "hero" ? "bg-[#6E9477] text-white" : "text-[#284936]"}`}
          >
            首頁
          </button>
          <button
            onClick={() => handleNavClick("events")}
            className={`px-2.5 py-1.5 rounded-lg text-sm font-semibold ${activeSection === "events" ? "bg-[#6E9477] text-white" : "text-[#284936]"}`}
          >
            最新活動
          </button>
          <button
            onClick={() => handleNavClick("anti-fraud")}
            className={`px-2.5 py-1.5 rounded-lg text-sm font-semibold ${activeSection === "anti-fraud" ? "bg-[#6E9477] text-white" : "text-[#284936]"}`}
          >
            防詐宣導
          </button>
          <button
            onClick={() => handleNavClick("services")}
            className={`px-2.5 py-1.5 rounded-lg text-sm font-semibold ${activeSection === "services" ? "bg-[#6E9477] text-white" : "text-[#284936]"}`}
          >
            我們的服務
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-[#FAF7F0] border border-[#E6DEC8] text-[#284936] text-sm font-semibold hover:bg-[#EAE4D5]"
          >
            <Menu className="h-4 w-4 text-[#6E9477]" />
            <span>更多選單</span>
          </button>
          <button
            onClick={onOpenAIChat}
            className="ml-2 flex items-center space-x-1.5 rounded-xl bg-[#E9A85D] hover:bg-[#d8964b] text-white px-3 py-2 text-xs font-bold font-noto shadow-sm"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>AI 規劃師</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden space-x-2">
          <button
            onClick={onOpenAIChat}
            className="flex items-center space-x-1 rounded-xl bg-[#E9A85D] text-white px-3 py-1.5 text-xs font-bold shadow-xs active:scale-95"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>AI 規劃師</span>
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2.5 text-[#284936] bg-[#F5EFE4] hover:bg-[#EDE5D6] focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="border-t border-[#E6DEC8] bg-[#FAF7F0] px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-7xl mx-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2 rounded-xl p-3 text-sm font-semibold font-noto transition-all ${
                    isActive 
                      ? "bg-[#6E9477] text-white shadow-xs" 
                      : "bg-[#FAF7F0] border border-[#E6DEC8] text-[#284936] hover:bg-[#F0EAE0]"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-[#6E9477]"}`} />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>
          
          <button
            onClick={() => {
              onOpenAIChat();
              setIsOpen(false);
            }}
            className="mt-3 flex w-full max-w-7xl mx-auto items-center justify-center space-x-2 rounded-xl bg-[#E9A85D] hover:bg-[#d8964b] py-3 text-base font-bold text-white shadow-sm"
          >
            <MessageSquare className="h-4.5 w-4.5" />
            <span>立即諮詢 AI 退休生活規劃師</span>
          </button>
        </div>
      )}
    </header>
  );
}
