import React from "react";
import { Attraction } from "../types";
import { Star, Clock, Ticket, AlertTriangle, Eye, Bookmark, BookmarkCheck, Camera, Sparkles } from "lucide-react";

interface AttractionCardProps {
  attraction: Attraction;
  onSelect: (attraction: Attraction) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
}

export const AttractionCard: React.FC<AttractionCardProps> = ({
  attraction,
  onSelect,
  isBookmarked,
  onToggleBookmark,
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-xl hover:shadow-teal-500/10 hover:border-teal-400/50 transition-all duration-300 flex flex-col group">
      {/* Image & Badges */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          src={attraction.heroImage}
          alt={attraction.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

        {/* Region Badge */}
        <div className="absolute top-3 left-3 bg-slate-950/60 backdrop-blur-md text-teal-200 text-xs font-semibold px-2.5 py-1 rounded-full border border-teal-500/30 shadow">
          {attraction.city}
        </div>

        {/* Teen Score Badge */}
        <div className="absolute top-3 right-3 bg-teal-500/30 backdrop-blur-md text-teal-100 text-xs font-bold px-2.5 py-1 rounded-full border border-teal-400/40 shadow flex items-center space-x-1">
          <Sparkles className="w-3.5 h-3.5 text-teal-300" />
          <span>男孩得分: {attraction.teenScore}分</span>
        </div>

        {/* Bookmark Button */}
        <button
          id={`bookmark-btn-${attraction.id}`}
          onClick={(e) => onToggleBookmark(attraction.id, e)}
          className={`absolute bottom-3 right-3 p-2 rounded-xl backdrop-blur-md transition ${
            isBookmarked
              ? "bg-teal-400 text-slate-950 shadow-md border border-white/20"
              : "bg-slate-950/60 text-slate-300 hover:text-white hover:bg-white/20 border border-white/10"
          }`}
          title={isBookmarked ? "已收藏" : "加入收藏"}
        >
          {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
        </button>

        <div className="absolute bottom-3 left-3 right-12">
          <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-md">
            {attraction.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        {/* Info row */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300 border-b border-white/10 pb-3">
          <div className="flex items-center space-x-1 text-amber-300 font-semibold">
            <Star className="w-4 h-4 fill-amber-300" />
            <span>{attraction.rating} 分</span>
          </div>
          <div className="flex items-center space-x-1 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-teal-300" />
            <span>{attraction.suggestedHours}</span>
          </div>
          <div className="flex items-center space-x-1 text-slate-300">
            <Ticket className="w-3.5 h-3.5 text-emerald-400" />
            <span>{attraction.ticketPrice}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {attraction.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/5 backdrop-blur-md text-teal-200 border border-white/10"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Review Matrix Comparison Preview */}
        <div className="space-y-2 bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs">
          <div>
            <span className="text-teal-300 font-bold inline-block mr-1">【网红吹爆】</span>
            <span className="text-slate-300 line-clamp-1">{attraction.reviewSummary.onlineFilter}</span>
          </div>
          <div>
            <span className="text-amber-300 font-bold inline-block mr-1">【真实体感】</span>
            <span className="text-slate-300 line-clamp-2">{attraction.reviewSummary.realExperience}</span>
          </div>
        </div>

        {/* Teen Highlight Preview */}
        <div className="text-xs text-slate-300 bg-teal-500/10 backdrop-blur-md p-2.5 rounded-xl border border-teal-500/20 flex items-start space-x-2">
          <Sparkles className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
          <span className="line-clamp-2">{attraction.reviewSummary.teenHighlight}</span>
        </div>

        {/* Action button */}
        <button
          id={`view-detail-btn-${attraction.id}`}
          onClick={() => onSelect(attraction)}
          className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-teal-400 hover:text-slate-950 text-teal-200 font-semibold text-xs sm:text-sm transition flex items-center justify-center space-x-2 border border-white/10 backdrop-blur-md"
        >
          <Eye className="w-4 h-4" />
          <span>对比避坑细节 & 14岁男孩视角</span>
        </button>
      </div>
    </div>
  );
};
