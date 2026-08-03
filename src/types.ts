export interface Attraction {
  id: string;
  name: string;
  city: "威海市区" | "威海高新区" | "荣成市" | "临港区/其他";
  category: "海岸风光" | "网红打卡" | "人文历史" | "海岛探险" | "主题公园";
  rating: number; // e.g. 4.8
  teenScore: number; // e.g. 95 (out of 100) for 14yo boys
  suggestedHours: string;
  ticketPrice: string;
  address: string;
  heroImage: string;
  tags: string[];

  // Review Analysis & Synthesis (网评比对核心)
  reviewSummary: {
    onlineFilter: string; // 网评滤镜/网上吹爆点
    realExperience: string; // 真实体验/体感真相
    pros: string[]; // 核心优点
    consAndWarnings: string[]; // 踩雷/避坑/缺点提醒
    teenHighlight: string; // 14岁男孩专属兴奋点
    bestVisitTime: string; // 最佳游览时段
    photoTips: string; // 拍照出片秘诀
  };
}

export interface FoodItem {
  id: string;
  name: string;
  category: "威海地道特色" | "正宗韩餐烧烤" | "渔家海鲜大排档" | "夜市小吃" | "青少年最爱";
  avgPrice: string; // e.g. "¥40-60/人"
  location: string;
  rating: number;
  image: string;
  description: string;
  mustTryDishes: string[];
  recommendedShops: string[];
  teenRatingReason: string;
}

export interface ItineraryTimeBlock {
  time: string;
  activity: string;
  location: string;
  description: string;
  teenFunPoint: string; // 14岁男孩快乐点
  tips?: string;
  drivingDistance?: string; // 交通/车程
  estimatedCost?: string;
  category: "attraction" | "food" | "transit" | "hotel" | "rest";
}

export interface ItineraryDay {
  day: number;
  title: string;
  subTitle: string;
  summary: string;
  stayLocation: string;
  distanceCovered: string;
  schedule: ItineraryTimeBlock[];
  weatherAndTideTips: string;
  dayBudgetEstimate: string;
}

export interface TideSlot {
  date: string;
  dayOfWeek: string;
  lowTideTime1: string;
  lowTideTime2: string;
  bestBeachCombingWindow: string; // 最佳赶海时间段
  recommendedBeach: string;
  targetHarvest: string[]; // 可捡到的海鲜 (蛤蜊、海星、小螃蟹)
}

export interface TravelTrapItem {
  title: string;
  trap: string;
  solution: string;
  impactLevel: "高" | "中" | "低";
}

export interface PackingCategory {
  categoryName: string;
  items: { name: string; requiredFor: string; checked: boolean }[];
}
