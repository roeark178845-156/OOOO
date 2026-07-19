import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Sparkles, Smile, RotateCcw, AlertTriangle, Coffee } from "lucide-react";
import { ChatMessage } from "../types";

interface AIConsultantWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export default function AIConsultantWidget({ isOpen, onClose, onOpen }: AIConsultantWidgetProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "model",
          text: "您好！我是您的『樂活 AI 退休生活規劃師』🌸。退休是人生最精緻的黃金新起點！\n\n不論您是想找「步調緩慢、不爬階梯的台灣慢活一日遊」🚍，想學點「修身養性的書法或插花課程」📚，還是想用行動參與「暖心送餐公益服務」❤️，我都能為您推薦規劃喔！\n\n您今天想探索什麼樣的精彩生活呢？可以在下方輸入，或者點選我有興趣的推薦主題喔！👇",
          timestamp: new Date()
        }
      ]);
    }
  }, [messages]);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const presetSuggestions = [
    { text: "推薦我適合長輩的慢活旅遊 🏖", label: "🏖 慢活旅遊" },
    { text: "有哪些輕鬆、好上手的樂活課程？ 🎹", label: "🎹 樂活課程" },
    { text: "我想做暖心志工，有什麼管道可以開始？ ❤️", label: "❤️ 志工公益" },
    { text: "樂活學堂在哪裡？要怎麼報名參加活動？ 🏡", label: "🏡 聯絡諮詢" }
  ];

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    setErrorText(null);
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Map history for Gemini API, skipping the first welcome message to keep it clean
      const apiHistory = messages
        .filter(m => m.id !== "welcome")
        .map(m => ({
          role: m.role,
          text: m.text
        }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: textToSend,
          history: apiHistory
        })
      });

      if (!res.ok) {
        throw new Error("伺服器倒茶水去了，請稍候重試。");
      }

      const data = await res.json();
      
      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: "model",
        text: data.reply,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err: any) {
      console.error(err);
      setErrorText("抱歉，我的思緒飛到櫻花季去了 🌸，請再跟我說一次好嗎？");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    setMessages([]);
    setErrorText(null);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#F4B36A] to-amber-500 text-white shadow-2xl hover:shadow-orange-200 transition-all hover:scale-110 focus:outline-none select-none group"
        >
          <MessageSquare className="h-7 w-7 group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-10 right-0 bg-white border border-[#EBE6DD] text-[#FAF8F3] bg-[#F4B36A] text-[11px] font-black rounded-lg px-2.5 py-1 whitespace-nowrap shadow-md scale-0 group-hover:scale-100 origin-bottom transition-all">
            💬 點我！AI 規劃師為您推薦生活
          </span>
          {/* Animated pulsing circle */}
          <span className="absolute inset-0 -z-10 rounded-full bg-amber-500/30 animate-ping" style={{ animationDuration: "2s" }}></span>
        </button>
      )}

      {/* Chat Window Dialog */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[92%] sm:w-[420px] h-[580px] bg-white rounded-3xl border border-[#EBE6DD] shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-6 duration-300">
          
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-[#7BBF6A] to-emerald-700 text-white p-4.5 flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white">
                <Sparkles className="h-5.5 w-5.5 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-black tracking-wide">樂活 AI 退休規劃師</h3>
                <p className="text-[10px] text-white/70 font-semibold flex items-center space-x-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  <span>陪伴在線中・溫馨解答長輩疑惑</span>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={handleClearHistory}
                title="重新對話"
                className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-all"
              >
                <RotateCcw className="h-4.5 w-4.5" />
              </button>
              
              <button 
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-all"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-[#FAF8F3]/50 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-4 text-base font-bold leading-relaxed shadow-sm whitespace-pre-line border ${
                    msg.role === "user"
                      ? "bg-[#7BBF6A] border-[#7BBF6A] text-white rounded-br-none"
                      : "bg-white border-[#EBE6DD] text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-[#EBE6DD] rounded-2xl rounded-bl-none p-4 shadow-sm flex items-center space-x-2.5 max-w-[85%] text-gray-500 font-bold text-sm">
                  <Coffee className="h-5 w-5 text-[#F4B36A] animate-bounce" />
                  <span>規劃師正在幫您倒杯熱茶、並整理推薦活動喔...</span>
                </div>
              </div>
            )}

            {/* Error Message */}
            {errorText && (
              <div className="rounded-xl bg-rose-50 border border-rose-200 p-3 text-sm font-bold text-rose-600 flex items-start space-x-2">
                <AlertTriangle className="h-4.5 w-4.5 shrink-0 mt-0.5" />
                <span>{errorText}</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions Tray (Before input) */}
          <div className="px-4 py-2 border-t border-[#EBE6DD]/60 bg-[#FAF8F3]/80">
            <p className="text-[10px] text-gray-400 font-bold mb-1.5">💡 長輩快速點選（免打字）：</p>
            <div className="flex flex-wrap gap-1.5">
              {presetSuggestions.map((sug, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(sug.text)}
                  disabled={isLoading}
                  className="rounded-full bg-white border border-[#EBE6DD] px-3 py-1.5 text-xs font-bold text-gray-700 hover:border-[#7BBF6A] hover:bg-[#7BBF6A]/5 transition-all text-left"
                >
                  {sug.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input Panel Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputValue);
            }}
            className="p-3 bg-white border-t border-[#EBE6DD] flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="請輸入您想問的事情..."
              disabled={isLoading}
              className="flex-1 bg-gray-50 rounded-xl px-4 py-3 text-base font-bold text-gray-800 placeholder-gray-400 border border-gray-200 focus:outline-none focus:border-[#7BBF6A] focus:bg-white disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7BBF6A] hover:bg-[#6AA85B] text-white shadow-md disabled:opacity-50 disabled:bg-gray-200 disabled:text-gray-400 transition-all focus:outline-none"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
