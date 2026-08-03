import React from "react";
import {
  Compass,
  MapPin,
  UtensilsCrossed,
  Waves,
  Calculator,
  Bot,
  Bookmark,
  Sparkles
} from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  bookmarkedCount: number;
  onOpenBookmarks: () => void;
  onOpenAiModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  bookmarkedCount,
  onOpenBookmarks,
  onOpenAiModal,
}) => {
  const navItems = [
    { id: "itinerary", label: "五天四夜行程", icon: Compass },
    { id: "attractions", label: "景点网评比对", icon: MapPin },
    { id: "foods", label: "当地美食推荐", icon: UtensilsCrossed },
    { id: "tides", label: "潮汐赶海与避坑", icon: Waves },
    { id: "budget", label: "预算与清单", icon: Calculator },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/40 backdrop-blur-xl border-b border-white/10 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Audience Tag */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-400 via-blue-500 to-indigo-500 flex items-center justify-center text-slate-950 shadow-md shadow-teal-500/20 border border-white/20">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-teal-200 to-teal-300">
                  威海 · 荣成攻略
                </span>
                <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-500/20 backdrop-blur-md text-teal-200 border border-teal-500/30">
                  2大1小 (14岁男孩)
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                真实网评验伪 · 亲子动线规划
              </p>
            </div>
          </div>

          {/* Nav Tabs */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-teal-500/20 backdrop-blur-md text-teal-200 border border-teal-500/40 shadow-lg shadow-teal-500/10 font-bold"
                      : "text-slate-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-md border border-transparent"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-teal-300" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Actions & AI trigger */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              id="open-ai-assistant-btn"
              onClick={onOpenAiModal}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-teal-200 text-xs sm:text-sm font-medium transition shadow-md active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-teal-300 animate-spin" style={{ animationDuration: '4s' }} />
              <span>AI 专属智囊</span>
            </button>

            <button
              id="open-bookmarks-btn"
              onClick={onOpenBookmarks}
              className="relative p-2 rounded-xl bg-white/5 hover:bg-white/15 backdrop-blur-md border border-white/10 text-slate-300 hover:text-white transition"
              title="我的收藏"
            >
              <Bookmark className="w-5 h-5" />
              {bookmarkedCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-teal-400 text-slate-950 font-extrabold text-xs w-5 h-5 rounded-full flex items-center justify-center border border-white/20">
                  {bookmarkedCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Tab Bar */}
        <div className="md:hidden flex items-center justify-around py-2 border-t border-white/10 overflow-x-auto no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-tab-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center px-2 py-1 text-xs font-medium whitespace-nowrap transition-colors ${
                  isActive ? "text-teal-300 font-bold" : "text-slate-400"
                }`}
              >
                <Icon className="w-4 h-4 mb-0.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
