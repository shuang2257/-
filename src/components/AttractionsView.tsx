import React, { useState, useMemo } from "react";
import { ATTRACTIONS_DATA } from "../data/attractions";
import { Attraction } from "../types";
import { AttractionCard } from "./AttractionCard";
import { AttractionModal } from "./AttractionModal";
import { Search, Filter, Sparkles, MapPin } from "lucide-react";

interface AttractionsViewProps {
  bookmarks: string[];
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
}

export const AttractionsView: React.FC<AttractionsViewProps> = ({
  bookmarks,
  onToggleBookmark,
}) => {
  const [selectedCity, setSelectedCity] = useState<string>("全部");
  const [selectedCategory, setSelectedCategory] = useState<string>("全部");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalAttraction, setActiveModalAttraction] = useState<Attraction | null>(null);

  const cities = ["全部", "威海市区", "威海高新区", "荣成市"];
  const categories = ["全部", "海岸风光", "网红打卡", "人文历史", "海岛探险", "主题公园"];

  const filteredAttractions = useMemo(() => {
    return ATTRACTIONS_DATA.filter((item) => {
      const matchCity = selectedCity === "全部" || item.city === selectedCity;
      const matchCategory = selectedCategory === "全部" || item.category === selectedCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.reviewSummary.teenHighlight.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCity && matchCategory && matchSearch;
    });
  }, [selectedCity, selectedCategory, searchQuery]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Banner for Spot Analysis */}
      <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl space-y-3">
        <div className="flex items-center space-x-2 text-teal-300 font-bold text-sm">
          <MapPin className="w-5 h-5" />
          <span>全网热门景点 · 真实网评验伪矩阵</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-teal-200 to-teal-300">
          威海与荣成景点“去滤镜”深度剖析
        </h2>
        <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
          比对全网小红书、大众点评与真实游客反馈，剥离夸张滤镜。特别标注<strong className="text-teal-300">14岁男孩玩法评分</strong>与<strong className="text-amber-300">真实避坑建议</strong>，帮助家长精准避开排队巨坑与低性价比景点。
        </p>
      </div>

      {/* Filter Controls Bar */}
      <div className="bg-white/5 backdrop-blur-xl p-5 rounded-3xl border border-white/10 shadow-xl space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            id="search-attractions-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索景点名称、标签或男孩兴奋点（例如：沉船、海鸥、潜艇、极速观光...）"
            className="w-full pl-11 pr-4 py-3 bg-slate-950/40 text-slate-100 placeholder-slate-400 rounded-2xl text-sm border border-white/10 focus:outline-none focus:border-teal-400/60 backdrop-blur-md transition"
          />
        </div>

        {/* Region & Category Filters */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          {/* Cities */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-300 font-semibold mr-1 flex items-center">
              <Filter className="w-3.5 h-3.5 mr-1 text-teal-300" />
              区域:
            </span>
            {cities.map((city) => (
              <button
                key={city}
                id={`filter-city-${city}`}
                onClick={() => setSelectedCity(city)}
                className={`px-3 py-1.5 rounded-full font-medium transition backdrop-blur-md border ${
                  selectedCity === city
                    ? "bg-teal-400 text-slate-950 font-bold border-white/20 shadow-sm"
                    : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/15 hover:text-white"
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-300 font-semibold mr-1">类型:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-category-${cat}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full font-medium transition backdrop-blur-md border ${
                  selectedCategory === cat
                    ? "bg-teal-500/30 text-teal-200 font-bold border-teal-400/50 shadow-sm"
                    : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/15 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-300 px-1">
        <span>共为您筛选出 <strong className="text-teal-300 font-bold">{filteredAttractions.length}</strong> 个景点分析</span>
        <span>提示：点击任意景点可展开侧边真实体感对比与打卡指引</span>
      </div>

      {/* Cards Grid */}
      {filteredAttractions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAttractions.map((attraction) => (
            <AttractionCard
              key={attraction.id}
              attraction={attraction}
              onSelect={(item) => setActiveModalAttraction(item)}
              isBookmarked={bookmarks.includes(attraction.id)}
              onToggleBookmark={onToggleBookmark}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/10 space-y-3">
          <p className="text-slate-300 text-sm">没有找到符合条件的景点分析</p>
          <button
            id="reset-attractions-filter-btn"
            onClick={() => {
              setSelectedCity("全部");
              setSelectedCategory("全部");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-2xl bg-white/10 text-teal-300 text-xs font-semibold hover:bg-white/20 transition border border-white/10"
          >
            重置筛选条件
          </button>
        </div>
      )}

      {/* Modal Detail View */}
      <AttractionModal
        attraction={activeModalAttraction}
        onClose={() => setActiveModalAttraction(null)}
        isBookmarked={activeModalAttraction ? bookmarks.includes(activeModalAttraction.id) : false}
        onToggleBookmark={onToggleBookmark}
      />
    </div>
  );
};
