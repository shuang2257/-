import React from "react";
import { Users, Calendar, Ship, Sparkles, MapPin, CheckCircle2, ChevronRight } from "lucide-react";

interface HeroBannerProps {
  onExploreItinerary: () => void;
  onExploreAttractions: () => void;
  onOpenAi: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onExploreItinerary,
  onExploreAttractions,
  onOpenAi,
}) => {
  return (
    <div className="relative overflow-hidden bg-white/5 backdrop-blur-xl border-b border-white/10 text-white">
      {/* Background Image Overlay with Gradient */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
          alt="Weihai Coastal"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-blue-950/80 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 backdrop-blur-md border border-teal-500/30 text-teal-200 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 text-teal-300" />
              <span>专属定制路线 · 2大1小 (14岁男孩) 5天4夜</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-teal-200 to-teal-300">
              威海 & 荣成 山海亲子慢游 深度攻略
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              专为带着<strong className="text-teal-300">14岁青春期男孩</strong>的家庭量身打造。剔除网评虚假“网红滤镜”，精选海军潜艇、搁浅巨轮、万羽海鸥追船与赶海大探险，搭配正宗韩餐与地道鲅鱼水饺！
            </p>

            {/* Feature Highlights Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="text-xs text-slate-400">行程规划</div>
                <div className="font-bold text-sm text-teal-300 flex items-center mt-0.5">
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  5天4夜 节奏舒适
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="text-xs text-slate-400">核心成员</div>
                <div className="font-bold text-sm text-teal-300 flex items-center mt-0.5">
                  <Users className="w-3.5 h-3.5 mr-1" />
                  2大人 + 14岁男孩
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="text-xs text-slate-400">景点网评比对</div>
                <div className="font-bold text-sm text-teal-300 flex items-center mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                  100%滤镜验伪
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="text-xs text-slate-400">男孩满分爆点</div>
                <div className="font-bold text-sm text-teal-300 flex items-center mt-0.5">
                  <Ship className="w-3.5 h-3.5 mr-1 text-amber-300" />
                  潜艇 + 巨轮喂海鸥
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                id="hero-explore-itinerary-btn"
                onClick={onExploreItinerary}
                className="px-5 py-3 rounded-2xl bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 text-slate-950 font-extrabold text-sm hover:opacity-90 transition shadow-lg shadow-teal-500/20 flex items-center space-x-2 cursor-pointer active:scale-95 border border-white/20"
              >
                <span>查看5天4夜专享行程</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                id="hero-explore-attractions-btn"
                onClick={onExploreAttractions}
                className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-slate-200 font-semibold text-sm border border-white/15 backdrop-blur-md transition flex items-center space-x-2 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-teal-300" />
                <span>网评真实比对 (去伪存真)</span>
              </button>

              <button
                id="hero-ask-ai-btn"
                onClick={onOpenAi}
                className="px-5 py-3 rounded-2xl bg-teal-500/15 hover:bg-teal-500/25 text-teal-200 font-semibold text-sm border border-teal-500/30 backdrop-blur-md transition flex items-center space-x-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-teal-300" />
                <span>提问AI专属智囊</span>
              </button>
            </div>
          </div>

          {/* Quick Focus Card Side Panel */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="font-bold text-slate-200 text-sm flex items-center">
                  <MapPin className="w-4 h-4 text-teal-300 mr-1.5" />
                  14岁男孩必刷 TOP 4 高光
                </span>
                <span className="text-xs text-teal-200 bg-teal-500/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-teal-500/30">100% 好评</span>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start space-x-2.5">
                  <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 font-bold flex items-center justify-center shrink-0 text-xs border border-teal-500/30">1</span>
                  <div>
                    <span className="font-bold text-slate-100">刘公岛登真实退役潜艇：</span>走进鱼雷舱与驾驶舱，触碰近代海军史。
                  </div>
                </div>
                <div className="flex items-start space-x-2.5">
                  <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 font-bold flex items-center justify-center shrink-0 text-xs border border-teal-500/30">2</span>
                  <div>
                    <span className="font-bold text-slate-100">布鲁威斯号搁浅巨轮：</span>近距离观赏万吨破浪巨轮，手喂成群海鸥。
                  </div>
                </div>
                <div className="flex items-start space-x-2.5">
                  <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 font-bold flex items-center justify-center shrink-0 text-xs border border-teal-500/30">3</span>
                  <div>
                    <span className="font-bold text-slate-100">海驴岛乘快艇喂海鸥：</span>万羽黑尾鸥遮天蔽日追杀快艇，狂欢感爆棚。
                  </div>
                </div>
                <div className="flex items-start space-x-2.5">
                  <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 font-bold flex items-center justify-center shrink-0 text-xs border border-teal-500/30">4</span>
                  <div>
                    <span className="font-bold text-slate-100">小石岛潮汐赶海：</span>拿小铲翻礁石挖花蛤抓螃蟹，体验渔民乐趣。
                  </div>
                </div>
              </div>

              <div className="pt-2 text-center border-t border-white/10">
                <span className="text-[11px] text-slate-400">提示：无购物无隐形消费 · 交通与门票透明标注</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
