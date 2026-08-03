import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroBanner } from "./components/HeroBanner";
import { ItineraryView } from "./components/ItineraryView";
import { AttractionsView } from "./components/AttractionsView";
import { FoodGuideView } from "./components/FoodGuideView";
import { TideAndTipsView } from "./components/TideAndTipsView";
import { BudgetCalculator } from "./components/BudgetCalculator";
import { AiAssistantModal } from "./components/AiAssistantModal";
import { BookmarksDrawer } from "./components/BookmarksDrawer";
import { AttractionModal } from "./components/AttractionModal";
import { Attraction } from "./types";
import { Compass, MapPin, UtensilsCrossed, Waves, Calculator, Heart, Sparkles } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("itinerary");
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("weihai_bookmarks");
      return saved ? JSON.parse(saved) : ["spot-bruvis-shipwreck", "spot-liugong-island", "spot-sea-donkey-island"];
    } catch {
      return ["spot-bruvis-shipwreck", "spot-liugong-island", "spot-sea-donkey-island"];
    }
  });

  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(false);
  const [aiPrompt, setAiPrompt] = useState<string>("");
  const [isBookmarksOpen, setIsBookmarksOpen] = useState<boolean>(false);
  const [selectedAttractionModal, setSelectedAttractionModal] = useState<Attraction | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem("weihai_bookmarks", JSON.stringify(bookmarks));
    } catch (e) {
      console.error("Failed to save bookmarks:", e);
    }
  }, [bookmarks]);

  const handleToggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleOpenAiForDay = (dayNum: number) => {
    setAiPrompt(`请问针对第 ${dayNum} 天的行程安排（2大1小，14岁男孩），有没有根据天气或偏好进行灵活微调的备选建议？`);
    setIsAiModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-400 selection:text-slate-950 relative overflow-x-hidden">
      {/* Frosted Glass Background Ambient Orbs */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-blue-950 via-slate-950 to-teal-950 opacity-90 pointer-events-none"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/15 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-teal-500/15 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="fixed top-[40%] right-[10%] w-[35%] h-[35%] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

      {/* Main Content & Navigation Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          bookmarkedCount={bookmarks.length}
          onOpenBookmarks={() => setIsBookmarksOpen(true)}
          onOpenAiModal={() => {
            setAiPrompt("");
            setIsAiModalOpen(true);
          }}
        />

        {/* Main Content Area */}
        <main className="flex-1 pb-16">
          {/* Show Hero Banner on Itinerary or Attractions tabs */}
          {(activeTab === "itinerary" || activeTab === "attractions") && (
            <HeroBanner
              onExploreItinerary={() => setActiveTab("itinerary")}
              onExploreAttractions={() => setActiveTab("attractions")}
              onOpenAi={() => {
                setAiPrompt("");
                setIsAiModalOpen(true);
              }}
            />
          )}

          {/* Tab Views */}
          {activeTab === "itinerary" && (
            <ItineraryView onOpenAiForDay={handleOpenAiForDay} />
          )}

          {activeTab === "attractions" && (
            <AttractionsView
              bookmarks={bookmarks}
              onToggleBookmark={handleToggleBookmark}
            />
          )}

          {activeTab === "foods" && <FoodGuideView />}

          {activeTab === "tides" && <TideAndTipsView />}

          {activeTab === "budget" && <BudgetCalculator />}
        </main>

        {/* Floating AI Assistant Quick Trigger */}
        <div className="fixed bottom-6 right-6 z-40">
          <button
            id="floating-ai-trigger-btn"
            onClick={() => {
              setAiPrompt("");
              setIsAiModalOpen(true);
            }}
            className="group relative flex items-center space-x-2 px-4 py-3 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-teal-500/20 hover:scale-105 backdrop-blur-md border border-white/20 transition active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-slate-950 animate-bounce" />
            <span className="hidden sm:inline">2大1小 AI 行程助手</span>
            <span className="sm:hidden">AI 助手</span>
          </button>
        </div>

        {/* Modals & Drawers */}
        <AiAssistantModal
          isOpen={isAiModalOpen}
          onClose={() => setIsAiModalOpen(false)}
          initialPrompt={aiPrompt}
        />

        <BookmarksDrawer
          isOpen={isBookmarksOpen}
          onClose={() => setIsBookmarksOpen(false)}
          bookmarks={bookmarks}
          onRemoveBookmark={(id) => handleToggleBookmark(id)}
          onClearBookmarks={() => setBookmarks([])}
          onSelectAttraction={(attr) => setSelectedAttractionModal(attr)}
        />

        <AttractionModal
          attraction={selectedAttractionModal}
          onClose={() => setSelectedAttractionModal(null)}
          isBookmarked={selectedAttractionModal ? bookmarks.includes(selectedAttractionModal.id) : false}
          onToggleBookmark={handleToggleBookmark}
        />

        {/* Footer */}
        <footer className="border-t border-white/10 bg-slate-950/60 backdrop-blur-xl text-slate-400 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 text-teal-300 font-bold text-sm">
              <Compass className="w-4 h-4" />
              <span>威海与荣成 2大1小（14岁男孩）专属五天四夜旅游攻略</span>
            </div>
            <p className="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
              融合真实网评对比验伪、威海地道美食、荣成搁浅巨轮与海鸥探险。愿您的威海与荣成之行收获无尽惬意与少年欢笑！
            </p>
            <div className="text-[11px] text-slate-400">
              © {new Date().getFullYear()} 威海荣成亲子旅游攻略 · 真实体验去伪存真
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
