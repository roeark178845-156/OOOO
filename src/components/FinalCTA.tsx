import { useState, FormEvent } from "react";
import { Heart, UserCheck, Sparkles, Phone, User, Calendar, Award, ShieldCheck, Download } from "lucide-react";

interface FinalCTAProps {
  isModalMode?: boolean;
  onCloseModal?: () => void;
}

export default function FinalCTA({ isModalMode = false, onCloseModal }: FinalCTAProps) {
  // Membership Card generator states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [ageRange, setAgeRange] = useState("60-69");
  const [interests, setInterests] = useState<string[]>([]);
  const [isJoined, setIsJoined] = useState(false);
  const [memberCardNo, setMemberCardNo] = useState("");
  const [joinDate, setJoinDate] = useState("");

  const interestOptions = [
    { id: "travel", label: "✈️ 慢活旅遊" },
    { id: "course", label: "📚 學習課程" },
    { id: "service", label: "❤️ 暖心公益" },
    { id: "party", label: "😆 樂齡活動" }
  ];

  const handleInterestToggle = (id: string) => {
    setInterests(prev => 
      prev.includes(id) 
        ? prev.filter(x => x !== id) 
        : [...prev, id]
    );
  };

  const handleSubmitJoin = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Generate a unique card number like LH-2026-XXXXX
    const randomNo = Math.floor(10000 + Math.random() * 90000);
    setMemberCardNo(`LH-2026-${randomNo}`);
    
    const today = new Date();
    setJoinDate(`${today.getFullYear()} 年 ${today.getMonth() + 1} 月 ${today.getDate()} 日`);
    
    setIsJoined(true);
  };

  return (
    <section id="cta-join" className={`py-16 ${isModalMode ? 'p-1' : 'md:py-24 bg-[#FAF8F3]/40'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* If already joined: Show beautiful membership card */}
        {isJoined ? (
          <div className="mx-auto max-w-2xl bg-white border border-[#EBE6DD] rounded-3xl p-6 sm:p-10 shadow-2xl text-center space-y-8 animate-in zoom-in-95 duration-300">
            <div className="space-y-3">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-[#7BBF6A] text-4xl">
                🎉
              </span>
              <h2 className="text-3xl font-extrabold text-[#7BBF6A]">
                歡迎加入樂活大家庭！
              </h2>
              <p className="text-base text-gray-500 font-semibold max-w-md mx-auto">
                您的入會申請已成功！下面是您的專屬樂活尊榮會員卡，截圖或保存，下次報名活動出示可享獨家優惠喔！
              </p>
            </div>

            {/* Simulated VIP Card Frame */}
            <div className="relative mx-auto max-w-md rounded-2xl bg-gradient-to-br from-gray-900 via-emerald-950 to-[#7BBF6A] p-[2px] shadow-xl text-left overflow-hidden">
              {/* Card glossy reflection pattern */}
              <div className="absolute inset-0 bg-white/5 skew-y-12 origin-top-left"></div>
              
              <div className="relative rounded-[14px] bg-gradient-to-br from-[#102a1d] via-[#1c3f2d] to-[#7BBF6A]/80 p-6 text-white flex flex-col justify-between h-[250px]">
                
                {/* Card Top Brand */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7BBF6A] text-white font-bold text-sm">
                      樂
                    </div>
                    <div>
                      <h4 className="text-base font-bold tracking-tight">樂活退休生活網</h4>
                      <p className="text-[9px] text-[#8CCAF7] tracking-widest uppercase">Lohas Academy VIP Card</p>
                    </div>
                  </div>
                  <span className="rounded-md border border-amber-400/50 bg-amber-400/10 px-2 py-0.5 text-[10px] font-bold text-amber-300 tracking-wider">
                    ⭐ 尊榮會員
                  </span>
                </div>

                {/* Card Middle Name */}
                <div className="space-y-1">
                  <p className="text-[10px] text-[#FAF8F3]/60 tracking-wider">MEMBER NAME</p>
                  <p className="text-2xl font-black tracking-wide flex items-center space-x-2">
                    <span>{name}</span>
                    <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded text-[#FAF8F3] font-normal">{ageRange} 歲</span>
                  </p>
                </div>

                {/* Card Bottom Metadata */}
                <div className="flex items-end justify-between border-t border-white/10 pt-3">
                  <div>
                    <p className="text-[8px] text-[#FAF8F3]/50">會員編號 CARD NO.</p>
                    <p className="font-mono text-sm font-bold tracking-wider text-amber-300">{memberCardNo}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[8px] text-[#FAF8F3]/50">入會日期 JOIN DATE</p>
                    <p className="text-[11px] font-bold">{joinDate}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Back instructions */}
            <div className="text-sm font-bold text-gray-500 bg-[#FAF8F3] p-4 rounded-xl border border-gray-200">
              💡 我們的秘書將於 24 小時內與您電話聯絡 ({phone})，為您寄送紙本入會歡迎信與精美保溫杯小禮物喔！
            </div>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center space-x-1.5 rounded-xl border border-gray-300 hover:bg-gray-50 text-gray-700 px-5 py-2.5 text-base font-bold transition-all"
              >
                <Download className="h-4.5 w-4.5" />
                <span>列印 / 存為PDF</span>
              </button>
              
              {isModalMode && onCloseModal && (
                <button
                  onClick={onCloseModal}
                  className="rounded-xl bg-[#7BBF6A] text-white px-6 py-2.5 text-base font-bold hover:bg-[#6AA85B]"
                >
                  確認關閉
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Normal form card */
          <div className="mx-auto max-w-4xl bg-white border border-[#EBE6DD] rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Message Column */}
              <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-500 text-2xl">
                  ❤️
                </div>
                
                <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  一起創造下一段
                  <br />
                  <span className="text-[#F4B36A]">幸福旅程</span>
                </h3>

                <p className="text-base text-gray-600 font-bold leading-relaxed">
                  人生最美的風景，
                  <br />
                  不是去了多少地方，
                  <br />
                  而是遇見了一群願意陪伴彼此的人。
                </p>

                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                  歡迎加入樂活大家庭，一起旅行、一起學習、一起歡笑，讓退休生活更加精彩。
                </p>

                <div className="pt-2 border-t border-gray-100 space-y-3 text-left hidden lg:block text-xs font-semibold text-gray-400">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="h-4 w-4 text-[#7BBF6A]" />
                    <span>個資安全保護・無任何推銷騷擾</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-yellow-500" />
                    <span>入會即贈一次一日小旅行免費體驗券</span>
                  </div>
                </div>
              </div>

              {/* Form Input Column */}
              <div className="lg:col-span-7 bg-[#FAF8F3] p-6 sm:p-8 rounded-2xl border border-[#EBE6DD]">
                <h4 className="text-xl font-extrabold text-gray-800 text-center mb-6">
                  立即加入我們的行列
                </h4>

                <form onSubmit={handleSubmitJoin} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">
                        尊姓大名 <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 h-4.5 w-4.5 text-gray-400" />
                        <input
                          type="text"
                          required
                          placeholder="例如：王小明"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full rounded-xl border border-gray-300 bg-white pl-10 pr-3 py-3 text-base font-bold focus:border-[#7BBF6A] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">
                        聯絡電話 <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 h-4.5 w-4.5 text-gray-400" />
                        <input
                          type="tel"
                          required
                          placeholder="例如：0912-345678"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full rounded-xl border border-gray-300 bg-white pl-10 pr-3 py-3 text-base font-bold focus:border-[#7BBF6A] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Age Range */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                      年齡區間
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["50-59", "60-69", "70+"].map((age) => (
                        <button
                          key={age}
                          type="button"
                          onClick={() => setAgeRange(age)}
                          className={`py-2 rounded-xl text-sm font-bold border transition-all ${
                            ageRange === age
                              ? "bg-[#7BBF6A] border-[#7BBF6A] text-white shadow-sm"
                              : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {age === "70+" ? "70 歲以上" : `${age} 歲`}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Interest Checklist */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">
                      感興趣的幸福板塊 (可多選)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {interestOptions.map((opt) => {
                        const isSel = interests.includes(opt.id);
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => handleInterestToggle(opt.id)}
                            className={`flex items-center justify-between p-3 rounded-xl border text-sm font-bold transition-all ${
                              isSel
                                ? "bg-[#8CCAF7]/20 border-[#8CCAF7] text-blue-800"
                                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            <span>{opt.label}</span>
                            <span className={`h-4 w-4 rounded-full border flex items-center justify-center text-[9px] ${
                              isSel ? "bg-blue-600 border-blue-600 text-white" : "border-gray-400"
                            }`}>
                              {isSel ? "✓" : ""}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-[#F4B36A] to-amber-500 hover:from-amber-500 hover:to-[#F4B36A] text-white py-4 text-lg font-black shadow-lg shadow-orange-100 transition-all transform hover:-translate-y-0.5"
                    >
                      <UserCheck className="h-5 w-5" />
                      <span>加入我們</span>
                    </button>
                  </div>
                </form>

                <p className="text-[10px] text-gray-400 font-semibold text-center mt-4">
                  🔒 所有送出資訊均經加密處理，僅供樂活秘書核對入會資格與聯絡，絕不對外洩漏。
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
