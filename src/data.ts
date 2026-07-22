import { EventItem, GalleryItem, ServiceItem, TimelineItem } from "./types";

export const COMPANY_ABOUT = {
  title: "關於我們",
  subtitle: "樂活，不只是生活，更是一種幸福。",
  paragraph: [
    "我們相信，人生每一個階段，都值得精彩。",
    "透過旅遊、課程、公益服務及各式樂齡活動，讓每位夥伴都能找到健康、快樂與歸屬感。",
    "在這裡，不是只有參加活動，而是認識一群陪伴彼此的人。"
  ]
};

export const BIG_FOUR_CATEGORIES = [
  {
    id: "travel",
    title: "樂活旅遊",
    icon: "✈️",
    badge: "走遍台灣・探索世界",
    description: "一起走遍台灣，探索世界，留下最美好的回憶。",
    buttonText: "查看更多旅遊",
    details: ["慢活台灣二日遊", "樂齡包車深度之旅", "大自然健走與深呼吸", "五星級溫泉放鬆之旅"]
  },
  {
    id: "course",
    title: "樂活課程",
    icon: "📚",
    badge: "多元學習・收穫滿滿",
    description: "舞蹈、瑜珈、書法、插花、陶藝、鋼琴、游泳、茶道，讓每天都有新的收穫。",
    buttonText: "查看熱門課程",
    details: ["養生伸展瑜珈", "養身書法課程", "優雅插花藝術", "樂齡舞蹈基礎班", "環保編織創作課程", "禪風茶道體驗"]
  },
  {
    id: "service",
    title: "公益服務",
    icon: "❤️",
    badge: "傳遞愛心・分享溫暖",
    description: "陪伴需要幫助的人，傳遞愛，分享溫暖，讓善意持續發光。",
    buttonText: "加入志工行列",
    details: ["偏鄉孩童課後陪伴", "社區獨居長者愛心送餐", "綠色大地環保淨灘", "社區樂活關懷大使"]
  },
  {
    id: "activity",
    title: "樂齡活動",
    icon: "🎉",
    badge: "歡樂時光・熱情滿分",
    description: "聯誼、聚餐、戶外活動、節慶晚會、成果展，每一天都充滿笑聲。",
    buttonText: "瀏覽近期活動",
    details: ["健康講座（營養、睡眠）", "中醫養生分享", "古蹟導覽", "健康料理"]
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2024",
    title: "從陌生，到成為一家人",
    description: "開啟我們的幸福起點，攜手跨出第一步。",
    image: "/images/travel-2024.jpg",
    details: [
      "✔️ 樂活學堂正式成立\n\n打造溫暖、安全的樂齡學習空間，\n陪伴每位學員快樂學習、\n自在交流，開啟精彩人生。",
      "✔️ 第一期課程熱烈展開\n\n推出書法、茶道等特色課程，\n吸引 80 位學員熱情參與，\n共同體驗文化之美。",
      "✔️ 第一次樂齡旅行\n\n一起走出教室，\n欣賞風景、分享歡笑，\n讓樂活學堂成為第二個家。"
    ]
  },
  {
    year: "2025",
    title: "一起旅行，一起上課，一起歡笑",
    description: "足跡遍布寶島，學習路上相互陪伴、共同成長。",
    image: "/images/travel-2025.jpg",
    details: [
      "花東慢活鐵道三日遊\n\n首次舉辦「花東慢活鐵道三日遊」，陪伴 30 多位學員一起踏上美好的旅程。沿著花東鐵道欣賞山海風光，漫步特色景點、品嚐在地美食，在歡笑與陪伴中認識新朋友，也留下人生中一段難忘的美好回憶。",
      "樂齡智慧生活課程\n\n開設「樂齡數位智慧手機班」與「活力舒壓瑜珈班」，陪伴學員學習智慧手機的日常應用，讓生活更加便利，也能隨時與親友分享生活點滴。同時透過規律運動與舒展身心，培養健康的生活習慣，享受充滿活力的每一天。",
      "愛心公益送暖行動\n\n舉辦「歲末愛心物資義賣暨偏鄉送暖」公益活動，學員們齊心協力製作手工餅乾、書寫春聯，將一份份溫暖與祝福送到偏鄉社區。因為相信「分享，能讓幸福延續」，每一次公益行動，都讓愛與關懷持續傳遞。"
    ]
  },
  {
    year: "2026",
    title: "精彩仍在持續，幸福每天都在發生",
    description: "走向更廣闊的世界，讓樂齡生活的每一天都閃閃發亮。",
    image: "/images/travel-2026.jpg",
    details: [
      "⭕️ 春季賞櫻 × 慢活旅行\n\n規劃「春季日本櫻花鐵道深度遊」及「全台溫泉慢活之旅」。陪伴學員欣賞四季美景、享受溫泉時光，一路歡笑、一路交流，留下許多珍貴而難忘的回憶。",
      "⭕️ 成果發表會\n\n年度成果發表會於演藝廳溫馨登場。學員們透過鋼琴演奏、舞蹈表演與作品展示，分享學習的喜悅，也展現自信與成長，在舞台上留下屬於自己的精彩時刻。",
      "⭕️ AI 智慧陪伴服務\n\n正式導入 AI 智慧陪伴服務。依照每位學員的興趣與喜好，推薦適合的課程、旅遊與活動，讓學習更輕鬆、生活更豐富，也讓每一天都充滿期待。"
    ]
  }
];

export const LATEST_EVENTS: EventItem[] = [
  {
    id: "evt-1",
    category: "travel",
    title: "🏖 日月潭慢活山水二日遊",
    date: "2026-08-15",
    time: "週六 07:30 出發",
    location: "南投日月潭（台北車站集合出發）",
    description: "搭乘頂級樂齡保姆車，慢遊涵碧步道，環湖遊艇導覽，入住友善飯店，輕鬆無壓力享受湖光山色。",
    slots: 12,
    maxSlots: 20,
    image: "/images/travel-2027.jpg"
  },
  {
    id: "evt-2",
    category: "travel",
    title: "🌸 陽明山一日小旅行與手工茶點",
    date: "2026-08-22",
    time: "週六 09:00 - 16:30",
    location: "台北陽明山與草山茶堂",
    description: "漫步平緩無障礙步道賞花，隨後至古意茶堂，由專業茶師指導親手泡一壺好茶，品嚐手作養生綠豆糕。",
    slots: 6,
    maxSlots: 15,
    image: "/images/travel-2028.jpg"
  },
  {
    id: "evt-3",
    category: "course",
    title: "💃古典舞蹈基礎課程(第三期)",
    date: "2026-09-01",
    time: "每週二 14:00 - 15:30",
    location: "樂活學堂 201 教室",
    description: "免基礎！在輕鬆愉快的學習氛圍中，不僅能舒展筋骨、促進身心健康，更能結識志同道合的朋友，享受舞蹈帶來的快樂與成就感。",
    slots: 3,
    maxSlots: 8,
    image: "/images/travel-2029.jpg"
  },
  {
    id: "evt-4",
    category: "service",
    title: "❤️ 社區獨居長輩愛心送餐與暖心關懷",
    date: "2026-08-10",
    time: "每週四 10:00 - 13:00",
    location: "大安區社區發展據點",
    description: "與樂活志工隊一起，將溫熱的愛心便當親手送到社區獨居長者家中，並陪他們聊天十分鐘，遞送社會溫馨。",
    slots: 15,
    maxSlots: 30,
    image: "/images/travel-2030.jpg"
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: "gal-1",
    category: "travel",
    title: "2024 樂活旅遊 北部同樂會",
    image: "/images/travel-2031.jpg",
    date: "2024-10",
    description: "特別感謝陳柏霖夥伴的熱情贊助，帶領北部樂活大家庭的長輩們慢活漫步，在秋高氣爽的山林中留下燦爛的幸福笑容！"
  },
  {
    id: "gal-2",
    category: "course",
    title: "插花課：與美的初次相遇",
    image: "/images/travel-2032.jpg",
    date: "2024-11",
    description: "學員們神情專注地修剪花枝，在香氣中創作屬專門的花藝盆栽。"
  },
  {
    id: "gal-3",
    category: "party",
    title: "樂活關懷活動",
    image: "/images/travel-2033.jpg",
    date: "2025-09",
    description: "關懷長輩出一份心意🥰，美味佳餚配上歡笑聲，真幸福！"
  },
  {
    id: "gal-4",
    category: "service",
    title: "花蓮馬太鞍救災",
    image: "/images/travel-2034.jpg",
    date: "2025-11",
    description: "陳柏霖帶著夥伴們一起傳遞愛心，天災無情，人間有愛。每一份善意、每一次伸出援手，都成為受災鄉親重新站起來的重要力量。"
  },
  {
    id: "gal-5",
    category: "service",
    title: "參與社區清潔活動",
    image: "/images/travel-2035.jpg",
    date: "2025-12",
    description: "許多志願參加的夥伴們一同為社區道路清潔出一份力，每一次的相聚，不只是一次活動，更是一份陪伴、一份溫暖。"
  },
  {
    id: "gal-6",
    category: "exhibition",
    title: "學習成果發表：舞蹈課程",
    image: "/images/travel-2036.jpg",
    date: "2026-05",
    description: "舞蹈課程結束後可自願參加成果發表會，展現自信的自己。"
  }
];

export const OUR_SERVICES: ServiceItem[] = [
  {
    id: "serv-1",
    title: "🚍 國內旅遊",
    icon: "🚌",
    description: "舒適頂級巴士接送，貼心規劃平緩步道，步調輕鬆、少走階梯，最適合長輩的經典旅程。"
  },
  {
    id: "serv-2",
    title: "🌏 國外旅遊",
    icon: "🗺️",
    description: "精選樂齡友善路線（如日本鐵道、東南亞避暑），全程有志工與醫護保障，旅途舒適安全無憂。"
  },
  {
    id: "serv-3",
    title: "🎓 樂齡課程",
    icon: "✏️",
    description: "豐富心靈的書法、繪畫，以及強健身體的瑜珈、太極，講師溫柔有耐心，小班教學好吸收。"
  },
  {
    id: "serv-4",
    title: "❤️ 公益服務",
    icon: "🎁",
    description: "大手拉小手！協助長輩組隊參與淨灘、偏鄉陪伴及送餐，透過助人肯定生命價值，活得更有朝氣。"
  },
  {
    id: "serv-6",
    title: "🎊 節慶活動",
    icon: "🏮",
    description: "重陽敬老茶會、中秋星空晚會、年節圍爐聚餐，在每一個大日子裡都有家人在身旁溫暖相伴。"
  },
  {
    id: "serv-7",
    title: "🏆 成果展演",
    icon: "⭐",
    description: "提供專業大型演藝舞台，舉辦年度學習發表、畫展與樂團合奏，讓您退休後依然是生命的主角！"
  }
];

export const FOOTER_INFO = {
  academy: {
    title: "樂活學堂",
    address: "📍 台北市大安區新生南路三段 88 號（近捷運公館站 3 號出口）",
    time: "⏰ 營業時間：週一至週五 09:00 - 18:00"
  },
  contact: {
    phone: "📞 聯絡電話：(02) 2366-1788",
    email: "📧 電子信箱：service@lohas-academy.org",
    line: "📱 LINE官方帳號：@lohas_academy (點擊加入領取萬元課程券)",
    facebook: "👥 臉書粉絲專頁：樂活老後・精彩生活學堂"
  }
};

export const WHY_CHOOSE_US = [
  {
    icon: "🩺",
    title: "醫護志工全程護航",
    description: "旅遊、大型活動全程皆有醫護背景志工或專業救護人員隨護，隨時關注學員身體狀況，安心無憂。"
  },
  {
    icon: "🧘",
    title: "100% 樂齡客製步調",
    description: "不趕行程、少走階梯、慢活漫遊，隨處有休息區與洗手間，真正適合樂齡夥伴的專屬節奏。"
  },
  {
    icon: "🏠",
    title: "溫馨如家的學習氛圍",
    description: "小班制教學，講師親切溫柔有耐心。課堂上互相陪伴、課後攜手旅遊，結識相伴一生的真摯摯友。"
  },
  {
    icon: "🚍",
    title: "頂級無障礙貼心接送",
    description: "精選友善低底盤巴士或頂級樂齡保姆車，全程無縫接軌，為行動較不便的夥伴提供最周延的照顧。"
  },
  {
    icon: "🔒",
    title: "國家級最高保險額度",
    description: "所有活動與課程皆投保足額責任險與意外險，並與特約醫療機構建立緊急連通機制，全方位安全滴水不漏。"
  },
  {
    icon: "🌟",
    title: "豐富多采的生命舞台",
    description: "提供大型年度成果展、畫展、音樂會，讓每位學員重新站在聚光燈下，展現自信，活出精彩老後！"
  }
];

