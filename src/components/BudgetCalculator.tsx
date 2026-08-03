import React, { useState } from "react";
import { Calculator, DollarSign, Hotel, Car, Utensils, Ticket, Gift, Sparkles } from "lucide-react";

export const BudgetCalculator: React.FC = () => {
  const [hotelTier, setHotelTier] = useState<"comfort" | "premium">("comfort");
  const [transportMode, setTransportMode] = useState<"rental" | "taxi">("rental");
  const [diningTier, setDiningTier] = useState<"standard" | "deluxe">("deluxe");
  const [shoppingBudget, setShoppingBudget] = useState<number>(600);

  // Dynamic cost calculations for 2 Adults + 1 14yo Teen (4 nights, 5 days)
  const hotelRates = {
    comfort: 480 * 4, // 4 nights = 1920
    premium: 950 * 4, // 4 nights = 3800
  };

  const transportRates = {
    rental: 220 * 5 + 300, // 5 days car rental + gas = 1400
    taxi: 150 * 5, // Taxis/buses = 750
  };

  const diningRates = {
    standard: 120 * 3 * 5, // ¥120/person/day = 1800
    deluxe: 180 * 3 * 5, // ¥180/person/day (seafood + korean BBQ) = 2700
  };

  // Fixed Tickets for 2 Adults + 1 Teenager (14yo usually adult ticket)
  // Liugong Island: 122*3 = 366
  // Sea Donkey Boat: 120*3 = 360
  // Shendiaoshan Zoo: 160*3 = 480
  // Chengshantou: 148*3 = 444
  const ticketsTotal = 366 + 360 + 480 + 444; // 1650

  const totalBudget = hotelRates[hotelTier] + transportRates[transportMode] + diningRates[diningTier] + ticketsTotal + shoppingBudget;

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl space-y-3">
        <div className="flex items-center space-x-2 text-teal-300 font-bold text-sm">
          <Calculator className="w-5 h-5" />
          <span>预算智能测算器</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-teal-200 to-teal-300">
          2大1小 (14岁男孩) 五天四夜旅行花费精准预估
        </h2>
        <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
          透明化各项门票、海景住宿、餐饮与交通成本。根据不同的出行喜好调整选项，实时计算家庭总预算。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Hotel Tier */}
          <div className="bg-white/5 backdrop-blur-xl p-5 rounded-3xl border border-white/10 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-sm font-bold text-white">
              <Hotel className="w-4 h-4 text-teal-300" />
              <span>住宿标准 (4晚家庭房/双床房)</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <button
                id="hotel-comfort-btn"
                onClick={() => setHotelTier("comfort")}
                className={`p-4 rounded-2xl border text-left transition backdrop-blur-md ${
                  hotelTier === "comfort"
                    ? "bg-teal-500/20 border-teal-400/60 text-white shadow"
                    : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                }`}
              >
                <div className="font-bold text-sm text-teal-300">舒适海景/酒店</div>
                <div className="text-slate-400 mt-0.5">约 ¥480 / 晚</div>
                <div className="text-[11px] text-slate-300 mt-1">韩乐坊/高新区高性价比海景酒店</div>
              </button>

              <button
                id="hotel-premium-btn"
                onClick={() => setHotelTier("premium")}
                className={`p-4 rounded-2xl border text-left transition backdrop-blur-md ${
                  hotelTier === "premium"
                    ? "bg-teal-500/20 border-teal-400/60 text-white shadow"
                    : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                }`}
              >
                <div className="font-bold text-sm text-teal-300">高端度假村/一线海景</div>
                <div className="text-slate-400 mt-0.5">约 ¥950 / 晚</div>
                <div className="text-[11px] text-slate-300 mt-1">那香海/威海海滨高端品牌度假酒店</div>
              </button>
            </div>
          </div>

          {/* Transportation Mode */}
          <div className="bg-white/5 backdrop-blur-xl p-5 rounded-3xl border border-white/10 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-sm font-bold text-white">
              <Car className="w-4 h-4 text-emerald-400" />
              <span>出行交通方式 (威海+荣成跨区)</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <button
                id="trans-rental-btn"
                onClick={() => setTransportMode("rental")}
                className={`p-4 rounded-2xl border text-left transition backdrop-blur-md ${
                  transportMode === "rental"
                    ? "bg-emerald-500/20 border-emerald-400/60 text-white shadow"
                    : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                }`}
              >
                <div className="font-bold text-sm text-emerald-300">自驾租车 / 包车 (推荐)</div>
                <div className="text-slate-400 mt-0.5">约 ¥1,400 (5天含油费/过路费)</div>
                <div className="text-[11px] text-slate-300 mt-1">自由随停，携带行李与沿海骑行最便捷</div>
              </button>

              <button
                id="trans-taxi-btn"
                onClick={() => setTransportMode("taxi")}
                className={`p-4 rounded-2xl border text-left transition backdrop-blur-md ${
                  transportMode === "taxi"
                    ? "bg-emerald-500/20 border-emerald-400/60 text-white shadow"
                    : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                }`}
              >
                <div className="font-bold text-sm text-emerald-300">打车 + 观光公交</div>
                <div className="text-slate-400 mt-0.5">约 ¥750 (5天灵活打车)</div>
                <div className="text-[11px] text-slate-300 mt-1">适用于市区打车与跨区城际大巴</div>
              </button>
            </div>
          </div>

          {/* Dining Standard */}
          <div className="bg-white/5 backdrop-blur-xl p-5 rounded-3xl border border-white/10 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-sm font-bold text-white">
              <Utensils className="w-4 h-4 text-amber-300" />
              <span>餐饮美食标准 (2大1小 5天共15餐)</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <button
                id="dining-standard-btn"
                onClick={() => setDiningTier("standard")}
                className={`p-4 rounded-2xl border text-left transition backdrop-blur-md ${
                  diningTier === "standard"
                    ? "bg-amber-500/20 border-amber-400/60 text-white shadow"
                    : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                }`}
              >
                <div className="font-bold text-sm text-amber-300">地道经济型</div>
                <div className="text-slate-400 mt-0.5">¥120 / 人 / 天</div>
                <div className="text-[11px] text-slate-300 mt-1">鲅鱼水饺、韩乐坊夜市、平价海鲜</div>
              </button>

              <button
                id="dining-deluxe-btn"
                onClick={() => setDiningTier("deluxe")}
                className={`p-4 rounded-2xl border text-left transition backdrop-blur-md ${
                  diningTier === "deluxe"
                    ? "bg-amber-500/20 border-amber-400/60 text-white shadow"
                    : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                }`}
              >
                <div className="font-bold text-sm text-amber-300">海鲜大咖 + 烤肉大餐 (推荐)</div>
                <div className="text-slate-400 mt-0.5">¥180 / 人 / 天</div>
                <div className="text-[11px] text-slate-300 mt-1">蒸鲜海鲜锅、爆炒海肠、正宗韩式烤肉</div>
              </button>
            </div>
          </div>

          {/* Shopping & Souvenirs slider */}
          <div className="bg-white/5 backdrop-blur-xl p-5 rounded-3xl border border-white/10 shadow-xl space-y-3">
            <div className="flex items-center justify-between text-sm font-bold text-white">
              <span className="flex items-center">
                <Gift className="w-4 h-4 text-purple-300 mr-2" />
                伴手礼与购物预算 (特产/零食/海味)
              </span>
              <span className="text-teal-300 font-extrabold text-base">¥{shoppingBudget}</span>
            </div>
            <input
              id="shopping-budget-range"
              type="range"
              min="200"
              max="2000"
              step="100"
              value={shoppingBudget}
              onChange={(e) => setShoppingBudget(Number(e.target.value))}
              className="w-full accent-teal-400 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-300">
              <span>¥200 (简单特产)</span>
              <span>¥1000 (干海味+韩国进口零食)</span>
              <span>¥2000 (高端海产品)</span>
            </div>
          </div>
        </div>

        {/* Breakdown Panel */}
        <div className="lg:col-span-5">
          <div className="bg-white/5 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl space-y-6 sticky top-24">
            <div className="border-b border-white/10 pb-4 space-y-1">
              <span className="text-xs font-semibold text-teal-300 uppercase tracking-wider">
                预估花费总计 (2大1小 5天4夜)
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white flex items-baseline">
                <span className="text-xl text-amber-300 mr-1">¥</span>
                <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-amber-100 bg-clip-text text-transparent">
                  {totalBudget.toLocaleString()}
                </span>
                <span className="text-xs font-normal text-slate-300 ml-2">人均约 ¥{Math.round(totalBudget / 3)}</span>
              </div>
            </div>

            {/* Itemized List */}
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center justify-between p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                <span className="flex items-center">
                  <Hotel className="w-3.5 h-3.5 text-teal-300 mr-2" />
                  住宿费用 (4晚)
                </span>
                <span className="font-bold text-slate-100">¥{hotelRates[hotelTier]}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                <span className="flex items-center">
                  <Car className="w-3.5 h-3.5 text-emerald-400 mr-2" />
                  交通及油费 (5天)
                </span>
                <span className="font-bold text-slate-100">¥{transportRates[transportMode]}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                <span className="flex items-center">
                  <Utensils className="w-3.5 h-3.5 text-amber-300 mr-2" />
                  餐饮伙食 (2大1小 15餐)
                </span>
                <span className="font-bold text-slate-100">¥{diningRates[diningTier]}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                <span className="flex items-center">
                  <Ticket className="w-3.5 h-3.5 text-blue-300 mr-2" />
                  门票通票 (刘公岛+海驴岛+动物园+成山头)
                </span>
                <span className="font-bold text-slate-100">¥{ticketsTotal}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                <span className="flex items-center">
                  <Gift className="w-3.5 h-3.5 text-purple-300 mr-2" />
                  伴手礼与购物
                </span>
                <span className="font-bold text-slate-100">¥{shoppingBudget}</span>
              </div>
            </div>

            <div className="p-4 bg-teal-500/10 backdrop-blur-md rounded-2xl border border-teal-500/20 text-xs text-teal-200 space-y-1">
              <div className="font-bold flex items-center text-teal-300">
                <Sparkles className="w-3.5 h-3.5 mr-1" />
                省钱小妙招：
              </div>
              <p className="text-slate-300 leading-relaxed">
                14岁孩子若持学生证，部分景区（成山头、动物园）可享受半价票；刘公岛及海驴岛船票在公众号提前预约可优惠10-20元。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
