import React, { useState } from "react";
import { ITINERARY_DAYS } from "../data/itinerary";
import { Compass, Clock, MapPin, Sparkles, Navigation, DollarSign, CloudSun, ChevronRight, AlertCircle, CheckCircle } from "lucide-react";

interface ItineraryViewProps {
  onOpenAiForDay: (dayNumber: number) => void;
}

export const ItineraryView: React.FC<ItineraryViewProps> = ({ onOpenAiForDay }) => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const currentDayData = ITINERARY_DAYS.find((d) => d.day === activeDay) || ITINERARY_DAYS[0];

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Header Card */}
      <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2 text-teal-300 font-bold text-sm">
            <Compass className="w-5 h-5" />
            <span>威海 + 荣成 5天4夜 2大1小 (14岁男孩) 专属定制动线</span>
          </div>
          <button
            id="customize-day-ai-btn"
            onClick={() => onOpenAiForDay(activeDay)}
            className="px-4 py-2 rounded-xl bg-teal-500/20 backdrop-blur-md text-teal-200 border border-teal-500/40 text-xs font-bold hover:bg-teal-500/30 transition flex items-center space-x-1.5 shadow"
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-300" />
            <span>用 AI 调整第 {activeDay} 天行程</span>
          </button>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-teal-200 to-teal-300">
          五天四夜全景路线：历史军事 + 绝美海岛 + 沉船海鸥狂欢
        </h2>

        <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
          针对14岁少年身心特点，行程摒弃了单一平淡的逛公园，将<strong className="text-teal-300">真潜艇探秘</strong>、<strong className="text-teal-300">巨轮搁浅</strong>、<strong className="text-teal-300">快艇万羽海鸥追杀</strong>与<strong className="text-teal-300">退潮赶海</strong>无缝衔接。节奏张弛有度，不赶路、不折腾。
        </p>
      </div>

      {/* Day Selector Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {ITINERARY_DAYS.map((dayItem) => {
          const isActive = dayItem.day === activeDay;
          return (
            <button
              key={dayItem.day}
              id={`itinerary-day-tab-${dayItem.day}`}
              onClick={() => setActiveDay(dayItem.day)}
              className={`p-4 rounded-2xl text-left transition-all duration-200 flex flex-col justify-between backdrop-blur-xl border ${
                isActive
                  ? "bg-teal-500/25 border-teal-400/60 shadow-lg shadow-teal-500/10 font-bold"
                  : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/15 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span
                  className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                    isActive ? "bg-teal-400 text-slate-950" : "bg-white/10 text-slate-300"
                  }`}
                >
                  DAY {dayItem.day}
                </span>
                <span className="text-[10px] text-slate-300 hidden sm:inline">
                  {dayItem.day === 1 ? "抵达" : dayItem.day === 5 ? "返程" : "游览"}
                </span>
              </div>
              <div className={`text-xs font-bold line-clamp-1 ${isActive ? "text-white" : "text-slate-300"}`}>
                {dayItem.title.split("：")[1] || dayItem.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Current Day Detail Banner */}
      <div className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center space-x-2 text-teal-300 font-bold text-xs">
              <span>第 {currentDayData.day} 天行程主题</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
              {currentDayData.title}
            </h3>
            <p className="text-xs text-slate-300 mt-1">{currentDayData.subTitle}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-teal-300" />
              <div>
                <div className="text-[10px] text-slate-400">建议宿点</div>
                <div className="font-semibold text-slate-200">{currentDayData.stayLocation}</div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center space-x-2">
              <Navigation className="w-4 h-4 text-emerald-400" />
              <div>
                <div className="text-[10px] text-slate-400">估计车程/拉车</div>
                <div className="font-semibold text-slate-200">{currentDayData.distanceCovered}</div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-amber-300" />
              <div>
                <div className="text-[10px] text-slate-400">参考预算 (2大1小)</div>
                <div className="font-semibold text-amber-300">{currentDayData.dayBudgetEstimate}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Day Summary & Weather Notice */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="md:col-span-2 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
            <div className="font-bold text-teal-300 mb-1">今日总体动线概览：</div>
            <p className="text-slate-300 leading-relaxed">{currentDayData.summary}</p>
          </div>

          <div className="bg-amber-500/10 backdrop-blur-md p-4 rounded-2xl border border-amber-500/20 flex items-start space-x-2.5">
            <CloudSun className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-amber-300">天气与潮汐特别提醒</div>
              <p className="text-slate-300 mt-0.5 leading-relaxed">{currentDayData.weatherAndTideTips}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Time Block Schedule List */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold text-white flex items-center space-x-2">
          <Clock className="w-5 h-5 text-teal-300" />
          <span>全天详细时间轴与14岁男孩视角</span>
        </h4>

        <div className="relative pl-4 sm:pl-6 space-y-6 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-white/10">
          {currentDayData.schedule.map((block, idx) => (
            <div
              key={idx}
              className="relative bg-white/5 backdrop-blur-xl p-5 sm:p-6 rounded-3xl border border-white/10 shadow-xl space-y-3.5 hover:border-teal-400/40 transition"
            >
              {/* Node indicator */}
              <div className="absolute -left-4 sm:-left-6 top-6 w-4 h-4 rounded-full bg-teal-400 border-4 border-slate-950 shadow-md"></div>

              {/* Time header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-xs text-teal-200 bg-teal-500/20 backdrop-blur-md px-3 py-1 rounded-full border border-teal-500/30">
                    {block.time}
                  </span>
                  <h5 className="text-base sm:text-lg font-bold text-white">{block.activity}</h5>
                </div>

                <div className="flex items-center space-x-2 text-xs text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-teal-300" />
                  <span>{block.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {block.description}
              </p>

              {/* 14yo Teenager Fun Highlight Badge */}
              <div className="bg-teal-500/10 backdrop-blur-md p-3.5 rounded-2xl border border-teal-500/20 flex items-start space-x-2.5 text-xs">
                <Sparkles className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-teal-300 mr-1">14岁男孩最爽点：</span>
                  <span className="text-slate-200">{block.teenFunPoint}</span>
                </div>
              </div>

              {/* Footer Tips & Travel details */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300 pt-1">
                <div className="flex items-center space-x-1.5 text-amber-300">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>{block.tips}</span>
                </div>

                {block.drivingDistance && (
                  <div className="text-slate-300 bg-white/5 backdrop-blur-md border border-white/10 px-3 py-0.5 rounded-full text-[11px]">
                    交通车程: {block.drivingDistance}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
