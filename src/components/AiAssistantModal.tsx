import React, { useState, useRef, useEffect } from "react";
import { X, Send, Bot, User, Sparkles, Loader2, Compass, HelpCircle } from "lucide-react";

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({
  isOpen,
  onClose,
  initialPrompt,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "您好！我是您的威海荣成专属旅行智囊。针对【2大1小（14岁男孩）】的五天四夜行程，您有什么想了解的？（例如：下雨备选路线、韩乐坊不踩雷老店、赶海装备或摄影机位等）",
    },
  ]);
  const [inputQuery, setInputQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialPrompt && isOpen) {
      handleSendPrompt(initialPrompt);
    }
  }, [initialPrompt, isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  if (!isOpen) return null;

  const quickQuestions = [
    "如果旅行途中遇到暴雨或大风停航，有什么优质室内备选方案？",
    "布鲁威斯号沉船怎么拍出电影感镜头？海鸥怎么喂才安全？",
    "带着14岁男孩赶海需要带什么工具？去哪里小生灵最多？",
    "推荐3家韩乐坊正宗不踩雷的韩式烤肉与海肠捞饭名店",
  ];

  const handleSendPrompt = async (promptToSend: string) => {
    if (!promptToSend.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: promptToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInputQuery("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: promptToSend,
          context: "威海与荣成5天4夜旅行，2大1小，男孩14岁，喜欢潜艇军事、沉船海鸥、赶海探险与韩餐烤肉。",
        }),
      });

      const data = await response.json();
      if (data.reply) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "【本地智囊回复】威海与荣成非常适合14岁男孩！推荐优先安排布鲁威斯号沉船与刘公岛真潜艇体验。如需详细解答，请再次尝试提问。",
          },
        ]);
      }
    } catch (err) {
      console.error("AI Error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "网络小故障，请重试。如需建议，第一天晚餐强烈推荐去韩乐坊吃韩式烤五花肉与炸鸡！",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-slate-900/85 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[85vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-2xl bg-teal-400 flex items-center justify-center text-slate-950 shadow-md font-bold">
              <Sparkles className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white flex items-center">
                <span>AI 威海荣成专属智囊</span>
                <span className="ml-2 text-[10px] bg-teal-500/20 text-teal-200 font-semibold px-2 py-0.5 rounded-full border border-teal-500/30">
                  Gemini 驱动
                </span>
              </h3>
              <p className="text-xs text-slate-300">2大1小 (14岁男孩) 行程随问随答</p>
            </div>
          </div>

          <button
            id="close-ai-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Question Presets */}
        <div className="p-3 bg-slate-950/50 backdrop-blur-md border-b border-white/10 shrink-0 overflow-x-auto no-scrollbar">
          <div className="flex items-center space-x-2 text-xs text-slate-300 mb-2 font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-teal-300" />
            <span>热点问题直通车：</span>
          </div>
          <div className="flex space-x-2 text-xs">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                id={`preset-question-${idx}`}
                onClick={() => handleSendPrompt(q)}
                disabled={isLoading}
                className="whitespace-nowrap px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-teal-200 border border-white/10 transition shrink-0 text-left backdrop-blur-md"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Message Thread */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 custom-scrollbar text-xs sm:text-sm">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start space-x-2.5 ${
                msg.role === "user" ? "flex-row-reverse space-x-reverse" : ""
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  msg.role === "user"
                    ? "bg-teal-400 text-slate-950 font-bold shadow"
                    : "bg-white/10 border border-white/15 text-teal-300 backdrop-blur-md"
                }`}
              >
                {msg.role === "user" ? <User className="w-4 h-4 text-slate-950" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`p-3.5 rounded-2xl max-w-[82%] leading-relaxed ${
                  msg.role === "user"
                    ? "bg-teal-400 text-slate-950 font-medium rounded-tr-none shadow"
                    : "bg-white/5 text-slate-200 border border-white/10 rounded-tl-none whitespace-pre-wrap backdrop-blur-md"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 text-teal-300 flex items-center justify-center shrink-0 backdrop-blur-md">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 text-slate-300 border border-white/10 rounded-tl-none flex items-center space-x-2 text-xs backdrop-blur-md">
                <Loader2 className="w-4 h-4 animate-spin text-teal-300" />
                <span>威海当地智囊思考中...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3.5 sm:p-4 bg-slate-950/80 backdrop-blur-xl border-t border-white/10 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendPrompt(inputQuery);
            }}
            className="flex items-center space-x-2"
          >
            <input
              id="ai-assistant-input"
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="输入任何关于威海/荣成行程、美食或避坑的问题..."
              className="flex-1 px-4 py-3 bg-slate-900/60 backdrop-blur-md text-slate-100 placeholder-slate-400 rounded-2xl text-xs sm:text-sm border border-white/10 focus:outline-none focus:border-teal-400/60 transition"
              disabled={isLoading}
            />
            <button
              id="ai-assistant-send-btn"
              type="submit"
              disabled={isLoading || !inputQuery.trim()}
              className="px-4 py-3 rounded-2xl bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm hover:bg-teal-300 transition disabled:opacity-50 flex items-center space-x-1 shadow"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">发送</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
