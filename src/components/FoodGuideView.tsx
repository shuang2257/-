import React, { useState, useMemo } from "react";
import { FOODS_DATA } from "../data/foods";
import { UtensilsCrossed, Star, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

export const FoodGuideView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("全部");

  const categories = [
    "全部",
    "威海地道特色",
    "正宗韩餐烧烤",
    "渔家海鲜大排档",
    "夜市小吃",
    "青少年最爱"
  ];

  const filteredFoods = useMemo(() => {
    if (selectedCategory === "全部") return FOODS_DATA;
    return FOODS_DATA.filter((f) => f.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Banner */}
      <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl space-y-3">
        <div className="flex items-center space-x-2 text-teal-300 font-bold text-sm">
          <UtensilsCrossed className="w-5 h-5" />
          <span>威海 & 荣成美食品鉴指南</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-teal-200 to-teal-300">
          当地特色海鲜与正宗韩餐美食精选
        </h2>
        <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
          威海毗邻韩国且拥有广阔海域，既有巴掌大的地道<strong className="text-teal-300">【鲅鱼水饺】</strong>与爆炒<strong className="text-teal-300">【海肠捞饭】</strong>，也有超高性价比的<strong className="text-teal-300">【韩式烤肉与炸鸡】</strong>以及<strong className="text-teal-300">【韩乐坊夜市】</strong>。精选无防腐剂不踩雷老店，大人小孩都满意。
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 bg-white/5 backdrop-blur-xl p-4 sm:p-5 rounded-3xl border border-white/10 shadow-xl">
        <span className="text-xs text-slate-300 font-semibold mr-1">美食分类:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            id={`food-cat-${cat}`}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition backdrop-blur-md border ${
              selectedCategory === cat
                ? "bg-teal-400 text-slate-950 font-bold border-white/20 shadow-md"
                : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/15 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Food Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFoods.map((food) => (
          <div
            key={food.id}
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-xl flex flex-col hover:border-teal-400/50 transition duration-300"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

              <div className="absolute top-3 left-3 bg-teal-500/20 backdrop-blur-md text-teal-200 text-xs font-semibold px-2.5 py-1 rounded-full border border-teal-500/30">
                {food.category}
              </div>

              <div className="absolute top-3 right-3 bg-slate-950/60 backdrop-blur-md text-amber-300 text-xs font-bold px-2.5 py-1 rounded-full flex items-center space-x-1 border border-white/10">
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                <span>{food.rating} 分</span>
              </div>

              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-xl font-bold text-white drop-shadow-md">{food.name}</h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-xs text-slate-300">
              <p className="leading-relaxed text-slate-200">{food.description}</p>

              {/* Price & Location */}
              <div className="flex items-center justify-between p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 font-medium">
                <span className="text-amber-300 font-bold">{food.avgPrice}</span>
                <span className="text-slate-300 flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-teal-300" />
                  {food.location}
                </span>
              </div>

              {/* Must try dishes */}
              <div className="space-y-1.5">
                <span className="font-bold text-slate-200 block">必点推荐菜:</span>
                <div className="flex flex-wrap gap-1.5">
                  {food.mustTryDishes.map((dish, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-full bg-teal-500/20 backdrop-blur-md text-teal-200 border border-teal-500/30 text-[11px]"
                    >
                      {dish}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recommended shops */}
              <div className="space-y-1">
                <span className="font-bold text-slate-200 block">当地口碑名店:</span>
                <div className="text-slate-300 space-y-0.5">
                  {food.recommendedShops.map((shop, idx) => (
                    <div key={idx} className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{shop}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Teenager appeal */}
              <div className="p-3.5 bg-teal-500/10 backdrop-blur-md rounded-2xl border border-teal-500/20 flex items-start space-x-2">
                <Sparkles className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-teal-300 block">14岁青少年评价：</span>
                  <span className="text-slate-200">{food.teenRatingReason}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
