import { TideSlot, TravelTrapItem, PackingCategory } from "../types";

export const TIDE_SLOTS_DATA: TideSlot[] = [
  {
    date: "8月1日 (农历初一)",
    dayOfWeek: "周五",
    lowTideTime1: "03:45",
    lowTideTime2: "16:10",
    bestBeachCombingWindow: "14:30 - 17:00 (大潮退潮，收获极佳)",
    recommendedBeach: "小石岛赶海区 / 九龙湾",
    targetHarvest: ["花蛤", "小螃蟹", "海星", "海螺"]
  },
  {
    date: "8月2日 (农历初二)",
    dayOfWeek: "周六",
    lowTideTime1: "04:30",
    lowTideTime2: "16:55",
    bestBeachCombingWindow: "15:15 - 17:45 (最佳体验期)",
    recommendedBeach: "小石岛赶海区 / 荣成海西头",
    targetHarvest: ["海胆", "竹节蛏", "小螃蟹", "海蛎子"]
  },
  {
    date: "8月3日 (农历初三)",
    dayOfWeek: "周日",
    lowTideTime1: "05:15",
    lowTideTime2: "17:40",
    bestBeachCombingWindow: "16:00 - 18:30 (适合傍晚赶海看夕阳)",
    recommendedBeach: "葡萄滩海水浴场两侧礁石",
    targetHarvest: ["花蛤", "海星", "小鱼", "海葵"]
  },
  {
    date: "8月4日 (农历初四)",
    dayOfWeek: "周一",
    lowTideTime1: "06:00",
    lowTideTime2: "18:25",
    bestBeachCombingWindow: "16:30 - 19:00 (凉爽避暑赶海)",
    recommendedBeach: "那香海沙滩偏东礁石区",
    targetHarvest: ["花蛤", "海螺", "小螃蟹"]
  },
  {
    date: "8月5日 (农历初五)",
    dayOfWeek: "周二",
    lowTideTime1: "06:45",
    lowTideTime2: "19:10",
    bestBeachCombingWindow: "17:00 - 19:30 (退潮平稳)",
    recommendedBeach: "小石岛赶海区",
    targetHarvest: ["花蛤", "海星", "海螺"]
  }
];

export const TRAVEL_TRAPS_DATA: TravelTrapItem[] = [
  {
    title: "火炬八街拥挤踩雷",
    trap: "白天上午10点到下午5点人头攒动，根本拍不到无人美景，且坡道有车辆行驶注意安全。",
    solution: "一定要清晨 06:30 - 07:30 前往，或者傍晚日落前半小时去，长焦镜头压缩空间拍摄。",
    impactLevel: "高"
  },
  {
    title: "出租车司机推荐海鲜店",
    trap: "部分车站/机场附近出租车司机热情推荐的“独家海鲜大排档”往往存在阴阳菜单或价格虚高。",
    solution: "提前在美团/大众点评看明码标价的老字号，或直接去韩乐坊/帝王宫夜市吃明码标价店铺。",
    impactLevel: "高"
  },
  {
    title: "海边未明码标价的项目",
    trap: "海滩上的沙滩摩托、骑骆驼或摩托艇，若不事先确认时间与价格容易产生消费纠纷。",
    solution: "玩任何水上/沙滩娱乐前，先明确问清：按次数还是按分钟计费？14岁孩子是否需要大人陪同？",
    impactLevel: "中"
  },
  {
    title: "海鸥投喂被啄伤/鸟粪袭击",
    trap: "荣成布鲁威斯号和海驴岛海鸥极其凶猛密集，直接手握小段面包容易被海鸥尖嘴划伤。",
    solution: "准备长竹签或手套，将食物举高；切记戴帽子或准备一把折叠伞防鸟粪。",
    impactLevel: "中"
  },
  {
    title: "电动车骑行环海路隐患",
    trap: "环海路弯多坡陡，部分山路没有机非隔离带，未满16周岁未成年人严禁独自骑电动车。",
    solution: "14岁男孩由家长骑车载乘或直接乘坐环海路观光公交车，系好头盔，控制车速。",
    impactLevel: "高"
  },
  {
    title: "刘公岛/海驴岛船票现场售罄",
    trap: "暑期旺季刘公岛和海驴岛船票极为紧张，现场排队可能买不到心仪时段。",
    solution: "提前 1-3 天在微信公众号【爱威海爱刘公岛】和【西霞口旅游】提前预约购票。",
    impactLevel: "高"
  }
];

export const PACKING_LIST_DATA: PackingCategory[] = [
  {
    categoryName: "衣物与防晒装备 (胶东海滨专属)",
    items: [
      { name: "防风薄外套/冲锋衣 (早晚海风大，成山头看日出必带)", requiredFor: "2大1小所有人", checked: true },
      { name: "高倍数防晒霜 SPF50+ & 防晒喷雾", requiredFor: "防晒伤", checked: true },
      { name: "遮阳帽 & 墨镜", requiredFor: "拍照+防强光", checked: true },
      { name: "替换短袖与运动短裤 (多带1-2套备用)", requiredFor: "海边玩水易湿", checked: true }
    ]
  },
  {
    categoryName: "鞋履与赶海神器",
    items: [
      { name: "厚底防滑包头水鞋 / 洞洞鞋 (礁石极滑且有藤壶)", requiredFor: "赶海与沙滩", checked: true },
      { name: "小铲子 + 塑料小桶 + 赶海手套", requiredFor: "九龙湾/小石岛赶海", checked: true },
      { name: "防水手机袋 (带挂绳)", requiredFor: "乘船海驴岛与玩水", checked: true }
    ]
  },
  {
    categoryName: "药品与随身护理",
    items: [
      { name: "晕船药 / 晕车贴", requiredFor: "刘公岛 & 海驴岛乘船", checked: true },
      { name: "肠胃药 (正露丸/黄连素)", requiredFor: "防止吃海鲜肠胃不适", checked: true },
      { name: "创可贴 & 消毒碘伏棉签", requiredFor: "防海边划伤", checked: true },
      { name: "防蚊喷雾 / 叮咬膏", requiredFor: "神雕山动物园/海岛", checked: true }
    ]
  },
  {
    categoryName: "证件与互动数码",
    items: [
      { name: "身份证 & 14岁男孩学生证/户口本", requiredFor: "景区门票优惠", checked: true },
      { name: "充电宝 (10000mAh+)", requiredFor: "全天拍照录像", checked: true },
      { name: "海鸥专用饲料 / 吐司片 / 火腿肠", requiredFor: "布鲁威斯号 & 海驴岛", checked: true }
    ]
  }
];
