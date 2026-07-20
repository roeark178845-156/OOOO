import { useState, FormEvent, MouseEvent } from "react";
import { Image, Video, PlusCircle, Calendar, MessageSquare, Play, X, Heart, Smile } from "lucide-react";
import { GALLERY_IMAGES } from "../data";
import { GalleryItem } from "../types";

export default function GallerySmiles() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  
  // Local state for user's uploaded memories
  const [localMemories, setLocalMemories] = useState<GalleryItem[]>([]);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState<any>("travel");
  const [newDesc, setNewDesc] = useState("");
  const [newImgUrl, setNewImgUrl] = useState("");
  const [likes, setLikes] = useState<Record<string, number>>({});

  const filterTabs = [
    { id: "all", label: "全部", emoji: "🌸" },
    { id: "travel", label: "旅行", emoji: "✈️" },
    { id: "course", label: "課程", emoji: "📚" },
    { id: "party", label: "聚餐", emoji: "🍱" },
    { id: "service", label: "公益", emoji: "❤️" },
    { id: "exhibition", label: "成果展", emoji: "🏆" }
  ];

  const allMemories = [...GALLERY_IMAGES, ...localMemories];

  const filteredMemories = allMemories.filter(item => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  const handleLike = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const handleMockUpload = (e: FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newDesc) return;

    // Use a lovely backup Unsplash senior smile photo if they didn't input a URL
    const defaultUrls: Record<string, string> = {
      travel: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800",
      course: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800",
      party: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800",
      service: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      exhibition: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800"
    };

    const finalImg = newImgUrl || defaultUrls[newCategory] || "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800";

    const newItem: GalleryItem = {
      id: `local-${Date.now()}`,
      category: newCategory,
      title: newTitle,
      image: finalImg,
      date: new Date().toISOString().substring(0, 7), // e.g. "2026-07"
      description: newDesc
    };

    setLocalMemories([newItem, ...localMemories]);
    
    // Reset state
    setNewTitle("");
    setNewDesc("");
    setNewImgUrl("");
    setIsUploadOpen(false);
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#FAF8F3]/60 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E6E2DA]">
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 rounded-full bg-orange-100 px-4 py-1 text-sm font-bold text-orange-700">
              <span>😊 留下幸福・點亮精彩</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              大家的笑容
            </h2>
            <p className="text-base text-gray-500 font-semibold max-w-lg">
              看見每一張燦爛的笑臉、專注的眼神，這就是我們攜手旅行與學習最棒的收穫。
            </p>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setIsUploadOpen(!isUploadOpen)}
              className="flex items-center space-x-2 rounded-2xl bg-[#D8A44C] hover:bg-[#C08E3C] text-white px-5 py-3 text-base font-bold shadow-md hover:shadow-lg transition-all"
            >
              <PlusCircle className="h-5 w-5" />
              <span>分享我的精彩笑容</span>
            </button>
          </div>
        </div>

        {/* Categories Tab Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`flex items-center space-x-1.5 px-4.5 py-2.5 rounded-full text-base font-bold transition-all border ${
                activeCategory === tab.id
                  ? "bg-[#4E7C59] border-[#4E7C59] text-white shadow-md"
                  : "bg-white border-[#E6E2DA] text-gray-600 hover:bg-[#FAF8F3]"
              }`}
            >
              <span>{tab.emoji}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Upload Form (Expandable) */}
        {isUploadOpen && (
          <div className="mt-8 p-6 sm:p-8 bg-white border border-[#E6E2DA] rounded-3xl max-w-2xl mx-auto shadow-xl animate-in slide-in-from-top-4 duration-300">
            <div className="flex items-center justify-between border-b pb-3 mb-6">
              <h3 className="text-xl font-bold text-gray-800 flex items-center space-x-2">
                <Smile className="h-6 w-6 text-[#D8A44C]" />
                <span>分享您的樂活精彩瞬間</span>
              </h3>
              <button 
                onClick={() => setIsUploadOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleMockUpload} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  📸 回憶標題 <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="例如：第一次挑戰書法大合影"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 p-3 text-base font-medium focus:border-[#4E7C59] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    🏷️ 屬於哪一類活動？
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 p-3 text-base font-bold focus:border-[#4E7C59] focus:outline-none"
                  >
                    <option value="travel">✈️ 樂活旅遊</option>
                    <option value="course">📚 樂活課程</option>
                    <option value="party">🍱 溫馨聚餐</option>
                    <option value="service">❤️ 公益服務</option>
                    <option value="exhibition">🏆 成果發表展</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    🔗 照片網址 (選填，留空將使用大片花海美照)
                  </label>
                  <input
                    type="url"
                    placeholder="可貼上任何公開的圖片網址"
                    value={newImgUrl}
                    onChange={(e) => setNewImgUrl(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 p-3 text-sm font-medium focus:border-[#4E7C59] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">
                  ✍️ 感動心情與分享說明 <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="跟大家分享這個活動好玩、感動的地方吧！"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 p-3 text-base font-medium focus:border-[#4E7C59] focus:outline-none"
                ></textarea>
              </div>

              <div className="flex space-x-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-[#4E7C59] hover:bg-[#3D6646] text-white py-3 text-base font-bold shadow-md transition-all"
                >
                  確認上傳，同步到下方回憶牆 ➔
                </button>
                <button
                  type="button"
                  onClick={() => setIsUploadOpen(false)}
                  className="rounded-xl border border-gray-300 text-gray-600 px-6 py-3 text-base font-bold hover:bg-gray-50"
                >
                  取消
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Photos Grid Wall */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMemories.map((item) => {
            const likeCount = likes[item.id] || 0;
            return (
              <div 
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-[#E6E2DA] bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Photo frame */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/images/fallback.jpg";
                    }}
                  />
                  
                  {/* Golden Frame Ornament for gal-1 */}
                  {item.id === "gal-1" && (
                    <div className="absolute inset-0 pointer-events-none z-10 p-1">
                      {/* Top-Right Golden Swoosh */}
                      <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                        <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 120 120" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="goldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#FFF2D4" />
                              <stop offset="35%" stopColor="#F5D061" />
                              <stop offset="70%" stopColor="#C48F25" />
                              <stop offset="100%" stopColor="#875E0F" />
                            </linearGradient>
                            <linearGradient id="goldGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#FFFBF0" />
                              <stop offset="50%" stopColor="#E9B738" />
                              <stop offset="100%" stopColor="#664103" />
                            </linearGradient>
                          </defs>
                          <path d="M 0,0 C 40,0 120,80 120,120 L 120,0 Z" fill="url(#goldGrad1)" />
                          <path d="M 20,0 C 50,0 120,70 120,100 L 120,0 Z" fill="url(#goldGrad2)" opacity="0.85" />
                        </svg>
                      </div>

                      {/* Bottom-Left Golden Swoosh */}
                      <div className="absolute bottom-0 left-0 w-32 h-32 overflow-hidden rotate-180">
                        <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 120 120" preserveAspectRatio="none">
                          <path d="M 0,0 C 40,0 120,80 120,120 L 120,0 Z" fill="url(#goldGrad1)" />
                          <path d="M 20,0 C 50,0 120,70 120,100 L 120,0 Z" fill="url(#goldGrad2)" opacity="0.85" />
                        </svg>
                      </div>

                      {/* Top-Left Traditional Key Pattern */}
                      <div className="absolute top-3 left-3 text-[#F5D061]">
                        <svg className="w-14 h-14" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M 2,30 L 2,2 L 30,2" />
                          <path d="M 6,30 L 6,6 L 30,6" />
                          <path d="M 2,14 L 14,14 L 14,2" />
                          <path d="M 6,10 L 10,10 L 10,6" />
                        </svg>
                      </div>

                      {/* Bottom-Right Traditional Key Pattern */}
                      <div className="absolute bottom-3 right-3 text-[#F5D061] rotate-180">
                        <svg className="w-14 h-14" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M 2,30 L 2,2 L 30,2" />
                          <path d="M 6,30 L 6,6 L 30,6" />
                          <path d="M 2,14 L 14,14 L 14,2" />
                          <path d="M 6,10 L 10,10 L 10,6" />
                        </svg>
                      </div>

                    </div>
                  )}

                  {/* Decorative tag for Category */}
                  <span className="absolute bottom-3 left-3 rounded-lg bg-black/60 px-2.5 py-1 text-xs font-bold text-white uppercase tracking-wider backdrop-blur-xs z-20">
                    {item.category === "travel" && "✈️ 旅遊"}
                    {item.category === "course" && "📚 課程"}
                    {item.category === "party" && "🍱 聚餐"}
                    {item.category === "singing" && "🎤 唱歌"}
                    {item.category === "service" && "❤️ 公益"}
                    {item.category === "exhibition" && "🏆 成果展"}
                  </span>
                </div>

                {/* Info Overlay Panel */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-xs text-gray-400 font-bold">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3.5 w-3.5 text-[#4E7C59]" />
                      <span>{item.date}</span>
                    </div>
                    <span>點擊放大</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 line-clamp-1 group-hover:text-[#4E7C59] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 font-medium line-clamp-2">
                    {item.description || "大家玩得不亦樂乎，幸福回憶留在心中。"}
                  </p>

                  {/* Like Button */}
                  <div className="flex justify-end pt-2 border-t border-gray-100 mt-2">
                    <button
                      onClick={(e) => handleLike(item.id, e)}
                      className="flex items-center space-x-1.5 rounded-full px-3 py-1 bg-rose-50 text-rose-500 border border-rose-100 hover:bg-rose-100 text-xs font-bold transition-all"
                    >
                      <Heart className="h-3.5 w-3.5 fill-rose-500" />
                      <span>送花按讚 ({likeCount})</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty placeholder */}
        {filteredMemories.length === 0 && (
          <div className="mt-12 text-center p-12 bg-white rounded-3xl border border-[#E6E2DA] max-w-md mx-auto">
            <span className="text-5xl">📷</span>
            <p className="mt-4 text-lg font-bold text-gray-600">這個分類目前還沒有回憶喔</p>
            <p className="text-sm text-gray-400 font-semibold mt-1">歡迎點擊上方按鈕，分享您的第一張燦爛笑臉！</p>
          </div>
        )}

        {/* Lightbox Modal window */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
              
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white shadow"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Photo frame */}
                <div className="md:col-span-7 bg-black flex items-center justify-center min-h-[300px] max-h-[500px] relative overflow-hidden">
                  <img
                    src={selectedPhoto.image}
                    alt={selectedPhoto.title}
                    className="max-h-[500px] w-full object-contain"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/images/fallback.jpg";
                    }}
                  />
                  {selectedPhoto.id === "gal-1" && (
                    <div className="absolute inset-0 pointer-events-none z-10 p-1">
                      {/* Top-Right Golden Swoosh */}
                      <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                        <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 120 120" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="modalGoldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#FFF2D4" />
                              <stop offset="35%" stopColor="#F5D061" />
                              <stop offset="70%" stopColor="#C48F25" />
                              <stop offset="100%" stopColor="#875E0F" />
                            </linearGradient>
                            <linearGradient id="modalGoldGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#FFFBF0" />
                              <stop offset="50%" stopColor="#E9B738" />
                              <stop offset="100%" stopColor="#664103" />
                            </linearGradient>
                          </defs>
                          <path d="M 0,0 C 40,0 120,80 120,120 L 120,0 Z" fill="url(#modalGoldGrad1)" />
                          <path d="M 20,0 C 50,0 120,70 120,100 L 120,0 Z" fill="url(#modalGoldGrad2)" opacity="0.85" />
                        </svg>
                      </div>

                      {/* Bottom-Left Golden Swoosh */}
                      <div className="absolute bottom-0 left-0 w-32 h-32 overflow-hidden rotate-180">
                        <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 120 120" preserveAspectRatio="none">
                          <path d="M 0,0 C 40,0 120,80 120,120 L 120,0 Z" fill="url(#modalGoldGrad1)" />
                          <path d="M 20,0 C 50,0 120,70 120,100 L 120,0 Z" fill="url(#modalGoldGrad2)" opacity="0.85" />
                        </svg>
                      </div>

                      {/* Top-Left Traditional Key Pattern */}
                      <div className="absolute top-3 left-3 text-[#F5D061]">
                        <svg className="w-14 h-14" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M 2,30 L 2,2 L 30,2" />
                          <path d="M 6,30 L 6,6 L 30,6" />
                          <path d="M 2,14 L 14,14 L 14,2" />
                          <path d="M 6,10 L 10,10 L 10,6" />
                        </svg>
                      </div>

                      {/* Bottom-Right Traditional Key Pattern */}
                      <div className="absolute bottom-3 right-3 text-[#F5D061] rotate-180">
                        <svg className="w-14 h-14" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M 2,30 L 2,2 L 30,2" />
                          <path d="M 6,30 L 6,6 L 30,6" />
                          <path d="M 2,14 L 14,14 L 14,2" />
                          <path d="M 6,10 L 10,10 L 10,6" />
                        </svg>
                      </div>

                    </div>
                  )}
                </div>

                {/* Details side Panel */}
                <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="inline-block rounded-xl bg-green-50 border border-green-200 text-xs font-bold text-[#4E7C59] px-3 py-1">
                      樂活大家庭回憶錄
                    </span>
                    
                    <h3 className="text-2xl font-extrabold text-gray-900 leading-tight">
                      {selectedPhoto.title}
                    </h3>

                    <div className="flex items-center space-x-2 text-sm text-gray-400 font-bold">
                      <Calendar className="h-4.5 w-4.5 text-[#4E7C59]" />
                      <span>記錄時間：{selectedPhoto.date}</span>
                    </div>

                    <p className="text-base text-gray-700 font-medium leading-relaxed bg-[#FAF8F3] p-4 rounded-2xl border border-[#E6E2DA]">
                      {selectedPhoto.description || "大家在這個活動中度過了無與倫比的美好時光，心連著心，共同寫下暖意洋洋的樂活故事。"}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-1.5 text-[#4E7C59] font-bold text-sm">
                      <Smile className="h-5 w-5" />
                      <span>樂活幸福學堂</span>
                    </div>

                    <button
                      onClick={(e) => handleLike(selectedPhoto.id, e)}
                      className="flex items-center space-x-1.5 rounded-full px-4 py-2 bg-rose-50 text-rose-500 border border-rose-100 hover:bg-rose-100 text-sm font-bold transition-all"
                    >
                      <Heart className="h-4 w-4 fill-rose-500" />
                      <span>真棒！送朵小紅花 ({likes[selectedPhoto.id] || 0})</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
