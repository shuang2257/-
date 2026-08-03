import React, { useState } from "react";
import { TIDE_SLOTS_DATA, TRAVEL_TRAPS_DATA, PACKING_LIST_DATA } from "../data/tidesAndTips";
import { Waves, AlertTriangle, CheckSquare, Square, Anchor, Sparkles, HelpCircle, ShieldCheck } from "lucide-react";

export const TideAndTipsView: React.FC = () => {
  const [packingList, setPackingList] = useState(PACKING_LIST_DATA);

  const togglePackingItem = (catIdx: number, itemIdx: number) => {
    const updated = [...packingList];
    updated[catIdx].items[itemIdx].checked = !updated[catIdx].items[itemIdx].checked;
    setPackingList(updated);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Banner */}
      <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl space-y-3">
        <div className="flex items-center space-x-2 text-teal-300 font-bold text-sm">
          <Waves className="w-5 h-5" />
          <span>潮汐赶海指引与防坑天花板</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-teal-200 to-teal-300">
          威海与荣成赶海时刻表 & 实用行前准备
        </h2>
        <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
          赶海的灵魂在于“看准潮汐表”！海水大退潮前1-2小时是寻宝黄金期。同时提供全网最严谨的防踩雷避坑规则与2大1小专属行李清单。
        </p>
      </div>

      {/* Tide Schedule & Beach Combing Guide */}
      <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center space-x-2">
            <Anchor className="w-5 h-5 text-teal-300" />
            <h3 className="text-lg font-bold text-white">夏季威海/荣成潮汐赶海黄金时刻表</h3>
          </div>
          <span className="text-xs text-amber-300 font-semibold bg-amber-500/10 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/20">
            退潮前 1.5 小时进场最佳
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TIDE_SLOTS_DATA.map((slot, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 space-y-3 hover:border-teal-400/40 transition duration-300"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="font-bold text-slate-100 text-sm">{slot.date} ({slot.dayOfWeek})</span>
                <span className="text-xs font-semibold text-teal-300 bg-teal-500/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-teal-500/30">
                  低潮: {slot.lowTideTime2}
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300">
                <div>
                  <span className="text-slate-400">赶海黄金窗口：</span>
                  <span className="font-bold text-emerald-400">{slot.bestBeachCombingWindow}</span>
                </div>
                <div>
                  <span className="text-slate-400">推荐海域：</span>
                  <span className="text-slate-200">{slot.recommendedBeach}</span>
                </div>
                <div className="flex items-center space-x-1 pt-1">
                  <span className="text-slate-400">可捕获：</span>
                  <div className="flex flex-wrap gap-1">
                    {slot.targetHarvest.map((item, i) => (
                      <span key={i} className="px-2 py-0.5 bg-teal-500/10 backdrop-blur-md text-teal-200 rounded-full border border-teal-500/20 text-[10px]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Traps & Avoidance Matrix */}
      <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-xl space-y-4">
        <div className="flex items-center space-x-2 border-b border-white/10 pb-3">
          <AlertTriangle className="w-5 h-5 text-rose-400" />
          <h3 className="text-lg font-bold text-white">威海与荣成旅游 6 大避坑踩雷规则</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TRAVEL_TRAPS_DATA.map((trapItem, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md p-4.5 rounded-2xl border border-white/10 space-y-2.5 hover:border-rose-400/40 transition duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-rose-300 text-sm flex items-center">
                  <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold flex items-center justify-center mr-2 border border-rose-500/30">
                    {idx + 1}
                  </span>
                  {trapItem.title}
                </span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  影响程度: {trapItem.impactLevel}
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-rose-500/10 backdrop-blur-md border border-rose-500/20">
                  <span className="text-rose-400 font-bold mr-1">【避坑陷阱】</span>
                  <span>{trapItem.trap}</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20">
                  <span className="text-emerald-400 font-bold mr-1">【破局方案】</span>
                  <span className="text-slate-200">{trapItem.solution}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Packing Checklist */}
      <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">2大1小 (14岁男孩) 行前准备清单</h3>
          </div>
          <span className="text-xs text-slate-300">点击勾选可核对整理进度</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packingList.map((category, catIdx) => (
            <div key={catIdx} className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 space-y-3">
              <h4 className="font-bold text-teal-300 text-xs uppercase tracking-wider border-b border-white/10 pb-2">
                {category.categoryName}
              </h4>

              <div className="space-y-2">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    onClick={() => togglePackingItem(catIdx, itemIdx)}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/40 hover:bg-white/10 backdrop-blur-md transition cursor-pointer text-xs border border-white/5"
                  >
                    <div className="flex items-center space-x-2.5">
                      {item.checked ? (
                        <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-500 shrink-0" />
                      )}
                      <span className={`font-medium ${item.checked ? "text-slate-300 line-through opacity-75" : "text-slate-100"}`}>
                        {item.name}
                      </span>
                    </div>

                    <span className="text-[10px] text-slate-300 bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                      {item.requiredFor}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
