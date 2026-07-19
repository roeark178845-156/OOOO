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
  MessageSquare
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
    { id: "services", label: "我們的服務", icon: BookOpen },
    { id: "contact", label: "聯絡我們", icon: Phone },
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#EBE6DD] bg-[#FAF8F3]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo and Brand */}
        <div 
          onClick={() => handleNavClick("hero")}
          className="flex cursor-pointer items-center space-x-2"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7BBF6A] text-white shadow-md">
            <span className="text-xl font-bold">樂</span>
          </div>
          <div>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight hover:text-[#7BBF6A] transition-colors duration-200">樂活生活網</h1>
            <p className="text-xs font-medium text-[#7BBF6A]">樂活學堂・陪伴您精彩每一步</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center space-x-1.5 rounded-lg px-3 py-2 text-base font-semibold transition-all duration-200 ${
                  isActive 
                    ? "bg-[#7BBF6A] text-white shadow-sm" 
                    : "text-gray-600 hover:bg-[#FAF8F3] hover:text-[#7BBF6A]"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
          
          <button
            onClick={onOpenAIChat}
            className="ml-4 flex items-center space-x-1.5 rounded-full bg-gradient-to-r from-[#F4B36A] to-amber-500 hover:from-amber-500 hover:to-[#F4B36A] text-white px-4 py-2 text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 animate-pulse"
          >
            <MessageSquare className="h-4 w-4" />
            <span>AI 退休生活規劃師</span>
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden space-x-2">
          <button
            onClick={onOpenAIChat}
            className="flex items-center space-x-1 rounded-full bg-[#F4B36A] text-white px-3 py-1.5 text-sm font-bold shadow-sm"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>AI 規劃師</span>
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-600 hover:bg-[#FAF8F3] hover:text-gray-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-[#EBE6DD] bg-[#FAF8F3] px-4 pt-2 pb-6 shadow-inner animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="grid grid-cols-2 gap-2 mt-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2 rounded-xl p-3 text-base font-semibold transition-all ${
                    isActive 
                      ? "bg-[#7BBF6A] text-white shadow-sm" 
                      : "bg-[#FAF8F3] border border-[#EBE6DD] text-gray-700 hover:bg-[#F0EDE6]"
                  }`}
                >
                  <Icon className="h-4.5 w-4.5 text-inherit" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
          
          <button
            onClick={() => {
              onOpenAIChat();
              setIsOpen(false);
            }}
            className="mt-4 flex w-full items-center justify-center space-x-2 rounded-xl bg-[#F4B36A] py-3.5 text-base font-bold text-white shadow-md"
          >
            <MessageSquare className="h-5 w-5" />
            <span>立即諮詢 AI 退休生活規劃師</span>
          </button>
        </div>
      )}
    </header>
  );
}
