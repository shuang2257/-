import React from "react";
import { Attraction } from "../types";
import { X, CheckCircle2, AlertTriangle, Sparkles, Clock, MapPin, Ticket, Camera, Bookmark, BookmarkCheck } from "lucide-react";

interface AttractionModalProps {
  attraction: Attraction | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
}

export const AttractionModal: React.FC<AttractionModalProps> = ({
  attraction,
  onClose,
  isBookmarked,
  onToggleBookmark,
}) => {
  if (!attraction) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-slate-900/85 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image Header */}
        <div className="relative h-64 sm:h-72 shrink-0">
          <img
            src={attraction.heroImage}
            alt={attraction.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

          {/* Close button */}
          <button
            id="close-attraction-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 text-slate-300 hover:text-white hover:bg-white/20 transition backdrop-blur-md border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title & Metadata */}
          <div className="absolute bottom-4 left-4 right-4 space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="bg-teal-500/20 backdrop-blur-md text-teal-200 font-semibold px-2.5 py-1 rounded-full border border-teal-500/30">
                {attraction.city}
              </span>
              <span className="bg-white/10 backdrop-blur-md text-slate-200 font-semibold px-2.5 py-1 rounded-full border border-white/10">
                {attraction.category}
              </span>
              <span className="bg-teal-400 text-slate-950 font-bold px-2.5 py-1 rounded-full flex items-center shadow">
                <Sparkles className="w-3.5 h-3.5 mr-1 text-slate-950" />
                14岁男孩推荐分: {attraction.teenScore}分
              </span>
            </div>

            <div className="flex items-center justify-between">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {attraction.name}
              </h2>

              <button
                id={`modal-bookmark-btn-${attraction.id}`}
                onClick={(e) => onToggleBookmark(attraction.id, e)}
                className={`px-3.5 py-1.5 rounded-full font-bold text-xs flex items-center space-x-1.5 transition border ${
                  isBookmarked
                    ? "bg-teal-400 text-slate-950 border-white/20 shadow"
                    : "bg-white/10 backdrop-blur-md text-slate-200 border-white/10 hover:bg-white/20"
                }`}
              >
                {isBookmarked ? (
                  <>
                    <BookmarkCheck className="w-4 h-4" />
                    <span>已收藏</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-4 h-4" />
                    <span>加入行程收藏</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto custom-scrollbar flex-1 text-slate-200">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/5 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-xs">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-teal-300 shrink-0" />
              <div>
                <div className="text-slate-400">建议用时</div>
                <div className="font-semibold text-slate-200">{attraction.suggestedHours}</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Ticket className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <div className="text-slate-400">门票参考</div>
                <div className="font-semibold text-slate-200">{attraction.ticketPrice}</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-amber-300 shrink-0" />
              <div>
                <div className="text-slate-400">最佳时段</div>
                <div className="font-semibold text-slate-200 truncate">{attraction.reviewSummary.bestVisitTime}</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-teal-300 shrink-0" />
              <div>
                <div className="text-slate-400">景点位置</div>
                <div className="font-semibold text-slate-200 truncate">{attraction.address}</div>
              </div>
            </div>
          </div>

          {/* Core Feature: 网评比对 (Online Review vs Reality) */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center border-l-4 border-teal-300 pl-2">
              真实网评比对 (去伪存真)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Online Filter / Social Media */}
              <div className="p-4 rounded-2xl bg-teal-500/10 backdrop-blur-md border border-teal-500/20 space-y-2">
                <div className="text-xs font-bold text-teal-300 flex items-center space-x-1">
                  <span>网红滤镜吹爆点</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {attraction.reviewSummary.onlineFilter}
                </p>
              </div>

              {/* Reality / Actual Experience */}
              <div className="p-4 rounded-2xl bg-amber-500/10 backdrop-blur-md border border-amber-500/20 space-y-2">
                <div className="text-xs font-bold text-amber-300 flex items-center space-x-1">
                  <span>真实游客体验体感</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {attraction.reviewSummary.realExperience}
                </p>
              </div>
            </div>
          </div>

          {/* Pros & Cons / Pitfalls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pros */}
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-2.5">
              <h4 className="text-xs font-bold text-emerald-400 flex items-center space-x-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>核心亮点与优势</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {attraction.reviewSummary.pros.map((pro, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons / Pitfalls */}
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-2.5">
              <h4 className="text-xs font-bold text-rose-400 flex items-center space-x-1">
                <AlertTriangle className="w-4 h-4" />
                <span>踩雷提醒与避坑指南</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {attraction.reviewSummary.consAndWarnings.map((con, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 14yo Teenager Perspective */}
          <div className="p-4 rounded-2xl bg-teal-500/15 backdrop-blur-md border border-teal-500/30 space-y-2">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-teal-300" />
              <h4 className="text-xs font-bold text-teal-300">2大1小 (14岁男孩) 专属视角</h4>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              {attraction.reviewSummary.teenHighlight}
            </p>
          </div>

          {/* Photo Advice */}
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-start space-x-3 text-xs">
            <Camera className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amber-300 mr-1">摄影与打卡贴士：</span>
              <span className="text-slate-300">{attraction.reviewSummary.photoTips}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950/80 backdrop-blur-xl border-t border-white/10 flex justify-end shrink-0">
          <button
            id="modal-close-bottom-btn"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold transition border border-white/10"
          >
            关闭详情
          </button>
        </div>
      </div>
    </div>
  );
};
