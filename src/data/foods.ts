import { FoodItem } from "../types";

export const FOODS_DATA: FoodItem[] = [
  {
    id: "food-mackerel-dumplings",
    name: "威海地道鲅鱼水饺",
    category: "威海地道特色",
    avgPrice: "¥45 - 65/人",
    location: "威海市区及高新区均有店",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
    description: "威海代表性美食！选用了新鲜鲅鱼肉与适量韭菜、猪肉精心打浆，个头如巴掌般大，馅料如慕斯般细腻鲜嫩，多汁不腥。",
    mustTryDishes: ["招牌鲅鱼水饺", "海鲜海胆水饺", "温拌海螺", "蒜蓉粉丝蒸扇贝"],
    recommendedShops: ["清香水饺 (老字号)", "北方饺子王", "大鱼岛渔家菜"],
    teenRatingReason: "巴掌大的水饺一口咬下去满嘴鲜汁，没有刺，14岁男孩吃得超满足！"
  },
  {
    id: "food-sea-intestine-rice",
    name: "招牌海肠捞饭",
    category: "威海地道特色",
    avgPrice: "¥60 - 90/人",
    location: "威海市区海滨路/韩乐坊",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    description: "威海美食界顶流！新鲜海肠切段与韭菜迅速爆炒，加上浓郁的秘制酱汁浇在热气腾腾的五常大米饭上，鲜甜脆嫩，超级下饭。",
    mustTryDishes: ["海肠捞饭", "爆炒海螺片", "胶东黑醋焖黄鱼", "海鲜疙瘩汤"],
    recommendedShops: ["妈妈手味 (韩乐坊店)", "海西头海鲜菜馆", "老威海海鲜大排档"],
    teenRatingReason: "黑黄相间的酱汁与脆爽海肠包裹米饭，14岁男生连吃三碗的爆款“干饭神仙”菜！"
  },
  {
    id: "food-korean-bbq",
    name: "韩乐坊正宗韩式烤肉与炸鸡",
    category: "正宗韩餐烧烤",
    avgPrice: "¥70 - 100/人",
    location: "韩乐坊商圈 (威海站附近)",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    description: "威海隔海相望韩国，韩餐正宗度全国顶尖。厚切五花肉在烤盘上滋滋冒油，搭配苏子叶、韩式辣酱与爆浆韩式炸鸡，满足感拉满。",
    mustTryDishes: ["厚切五花肉", "果味调味牛排", "雪花芝士炸鸡", "石锅拌饭", "韩式冷面"],
    recommendedShops: ["韩乐坊老韩餐", "吴氏韩式烤肉", "兄弟炸鸡 (韩乐坊总店)"],
    teenRatingReason: "烤肉滋滋作响、炸鸡香脆爆浆，满桌韩国小菜无限续，极其受青少年喜爱。"
  },
  {
    id: "food-seafood-steam-pot",
    name: "原汁蒸鲜海鲜大咖锅",
    category: "渔家海鲜大排档",
    avgPrice: "¥80 - 120/人",
    location: "威海环翠区/荣成石岛码头",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1559742811-822863c46f83?auto=format&fit=crop&w=800&q=80",
    description: "不用复杂调料，直接将刚出海的生蚝、天鹅蛋、海胆、虾夷扇贝、皮皮虾放入大蒸锅，原汁原味，蘸上姜醋汁鲜甜无比。",
    mustTryDishes: ["乳山高品质生蚝", "活蒸皮皮虾", "海胆蒸蛋", "清蒸石斑鱼"],
    recommendedShops: ["渔夫码头海鲜蒸锅", "石岛海鲜大排档", "靖子头海鲜烧烤"],
    teenRatingReason: "自己动手剥皮皮虾和开生蚝，海鲜个头硕大，原汁原味的鲜爽体验感强。"
  },
  {
    id: "food-night-market-snacks",
    name: "韩乐坊夜市 & 帝王宫夜市小吃",
    category: "夜市小吃",
    avgPrice: "¥25 - 40/人",
    location: "韩乐坊夜市 / 帝王宫夜市",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=800&q=80",
    description: "热闹非凡的烟火夜市！充满韩国风味与胶东小吃，摇摇冰、炒年糕、泡菜卷烤肉、生蚝杯、烤鱿鱼大串应有尽有。",
    mustTryDishes: ["韩式烤冷面炒年糕", "现烤大鱿鱼串", "摇摇冰沙", "乳山烤生蚝串", "韩国炸热狗"],
    recommendedShops: ["韩乐坊核心步行街摊位", "帝王宫夜市小吃街"],
    teenRatingReason: "氛围热烈、种类繁多，买着吃逛着玩，极富夜生活乐趣。"
  },
  {
    id: "food-rongcheng-kelp-buns",
    name: "荣成渔家海带包子与鱼锅饼子",
    category: "青少年最爱",
    avgPrice: "¥35 - 55/人",
    location: "荣成市区及那香海周边",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    description: "荣成是“中国海带之都”，精选优质鲜嫩海带切碎搭五花肉包成的海带大包子，咸鲜爽口；大铁锅炖鲜鱼贴玉米饼子更是焦香浓郁。",
    mustTryDishes: ["荣成海带五花肉包", "柴火鱼锅贴玉米饼", "海菜凉粉", "海鲜炒疙瘩"],
    recommendedShops: ["荣成大鱼岛渔家饭庄", "成山头渔农家小院"],
    teenRatingReason: "鱼锅边的玉米饼底酥脆吸浓汁，海带包子馅香多汁，充满独特的地方风味。"
  }
];
