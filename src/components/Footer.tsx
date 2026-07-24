import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  ArrowUpCircle, 
  Award,
  Clock
} from "lucide-react";
import { FOOTER_INFO } from "../data";

interface FooterProps {
  onScrollToSection: (id: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  
  const scrollToTop = () => {
    onScrollToSection("hero");
  };

  return (
    <footer className="bg-[#1C2C18] text-[#FAF8F3]/90 pt-16 pb-8 border-t border-emerald-950 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/50">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4E7C59] text-white font-bold text-lg shadow-md">
                樂
              </div>
              <span className="text-2xl font-black tracking-tight text-white">樂活退休生活網</span>
            </div>
            <p className="text-sm text-[#FAF8F3]/70 font-semibold leading-relaxed">
              退休，不是人生的終點，而是精彩人生的新起點。我們用最貼心的規劃、最安心的隨行、最溫馨的陪伴，與您攜手漫遊世界、多元學習、分享溫馨，重獲歸屬感。
            </p>
            <div className="flex items-center space-x-2 bg-emerald-950/80 p-3.5 rounded-xl border border-emerald-900/40 text-xs font-bold text-amber-300">
              <Award className="h-5 w-5" />
              <span>榮獲中華樂齡健康生活品質優等楷模獎</span>
            </div>
          </div>

          {/* Lohas Academy Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-lg font-black text-[#4E7C59] tracking-wider uppercase border-l-3 border-[#4E7C59] pl-2.5">
              {FOOTER_INFO.academy.title}
            </h4>
            <div className="space-y-3.5 text-sm font-semibold">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-[#8CCAF7] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{FOOTER_INFO.academy.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4.5 w-4.5 text-[#8CCAF7] shrink-0" />
                <span>{FOOTER_INFO.academy.time}</span>
              </div>
            </div>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-lg font-black text-[#D8A44C] tracking-wider uppercase border-l-3 border-[#D8A44C] pl-2.5">
              聯絡我們
            </h4>
            <div className="space-y-3.5 text-sm font-semibold">
              <div className="flex items-center space-x-2">
                <Phone className="h-4.5 w-4.5 text-[#D8A44C]" />
                <span>{FOOTER_INFO.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4.5 w-4.5 text-[#D8A44C]" />
                <span>{FOOTER_INFO.contact.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4.5 w-4.5 text-[#D8A44C]" />
                <span>{FOOTER_INFO.contact.line}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#FAF8F3]/50 font-bold">
          <div className="space-y-1 text-center sm:text-left">
            <p>© 2026 樂活退休生活網・樂活學堂。保留所有權利。</p>
            <p>本站各項旅遊活動與全台樂友旅行社（乙種旅行業）合作承辦</p>
          </div>

          <div className="flex items-center space-x-6">
            <button 
              onClick={() => onScrollToSection("about")}
              className="hover:text-white transition-colors"
            >
              隱私權宣告
            </button>
            <button 
              onClick={() => onScrollToSection("events")}
              className="hover:text-white transition-colors"
            >
              服務條款
            </button>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-xl px-3.5 py-2 transition-all"
            >
              <ArrowUpCircle className="h-4.5 w-4.5" />
              <span>回到頂部</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
