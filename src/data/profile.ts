import type { CardColor, IconName } from "animal-island-ui";

export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type DockItem = LinkItem & {
  key: string;
  description: string;
  color: CardColor;
  iconName: IconName;
};

export type NotePreview = {
  title: string;
  status: "drafting" | "idea" | "coming soon";
  category: "tutorial" | "experiment" | "frontend";
  summary: string;
};

export type IslandTask = {
  key: string;
  task: string;
  state: string;
  tool: string;
  sparkle: string;
};

export type FriendLink = {
  name: string;
  description: string;
  href: string;
  avatar: string;
  tag: string;
  note: string;
};

export type BulletinEntry = {
  question: string;
  answer: string;
};

export type IslandMoodReport = {
  weather: string;
  mood: string;
  status: string;
  slowStatus: string;
};

export const profile = {
  name: "didilili的小岛工作台",
  title: "Agent 工程师的小岛工作台",
  subtitle:
    "这里是一座给 AI agents、前端手艺和奇思妙想停靠的小岛。我把教程、实验、失败日志和发光的念头都晒在海风里，慢慢造一间可以招待后来者的工具屋。",
  status: "Island dream lab online",
  links: {
    github: "https://github.com/didilili",
    tutorial: "https://github.com/didilili/ai-agents-from-zero",
    email: "mailto:dili@outlook.com",
  },
  avatar: "https://github.com/didilili.png",
  email: "dili@outlook.com",
  about:
    "履历没有烟花，但我还在认真收集星星。从前写前端，后来把好奇心驶向 AI agents。喜欢把混乱的问题拆成可以摸到的按钮、流程和小工具，也相信技术不只用来交付功能，还可以帮人把想象力照亮一点。",
  skills: [
    "AI Agents",
    "Dify",
    "Coze",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "Workflow",
  ],
};

export const dockItems: DockItem[] = [
  {
    key: "about",
    label: "关于我",
    description: "一个还在发光的普通人",
    href: "#about",
    color: "app-teal",
    iconName: "icon-map",
  },
  {
    key: "tutorial",
    label: "教程",
    description: "从零登岛的 agent 航线",
    href: profile.links.tutorial,
    external: true,
    color: "app-yellow",
    iconName: "icon-diy",
  },
  {
    key: "contact",
    label: "联系我",
    description: "给岛主递一封信",
    href: "#contact",
    color: "app-blue",
    iconName: "icon-chat",
  },
  {
    key: "notes",
    label: "笔记",
    description: "漂流瓶、灵感碎片",
    href: "#notes",
    color: "app-pink",
    iconName: "icon-design",
  },
  {
    key: "resources",
    label: "资源收藏",
    description: "邻岛航线和工具贝壳",
    href: "#friends",
    color: "app-yellow",
    iconName: "icon-shopping",
  },
  {
    key: "projects",
    label: "外部项目",
    description: "飞去 GitHub 看代码",
    href: profile.links.github,
    external: true,
    color: "app-blue",
    iconName: "icon-helicopter",
  },
];

export const workbenchTabs = [
  {
    key: "doing",
    label: "正在发芽",
    items: [
      "给 agents 入门路线铺小径",
      "把前端手艺改造成 AI 产品的木工台",
      "研究工具调用、记忆和工作流的潮汐",
    ],
  },
  {
    key: "writing",
    label: "想慢慢写",
    items: [
      "从零孵出一个可用 agent",
      "Dify / Coze 的小岛测评",
      "agents 产品里那些会发光的前端体验",
    ],
  },
  {
    key: "done",
    label: "已经上岸",
    items: [
      "ai-agents-from-zero 教程仓库",
      "一些 prompt、流程和工具调用实践",
      "这座可爱的小岛工作台",
    ],
  },
];

export const bulletinEntries: BulletinEntry[] = [
  {
    question: "为什么做这个博客？",
    answer:
      "因为我想给自己的学习和实验留一座小岛。这里不急着证明什么，只把走过的路、踩过的坑、偶尔发亮的念头晒出来，等后来的人路过时能少迷路一点。",
  },
  {
    question: "为什么转向 AI agents？",
    answer:
      "前端让我相信体验可以照顾人，agents 让我看到工具也可以有一点主动性。我想把这两件事接起来：让复杂流程不再像迷宫，而像一条有人点灯的小路。",
  },
  {
    question: "这个教程会持续更新吗？",
    answer:
      "会慢慢更新。它不会是一座一次性完工的城堡，更像每天补一块木板的码头：先能登岛，再把路线、示例、工具和真实问题一点点补齐。",
  },
  {
    question: "我相信什么样的技术？",
    answer:
      "我相信温柔但有用的技术。它应该把人从重复和混乱里托起来，也应该允许一点好奇、一点审美、一点不那么功利的理想主义。",
  },
];

export const islandMoodReports: IslandMoodReport[] = [
  {
    weather: "灵感微风",
    mood: "适合把零散念头排成小路",
    status: "正在把混乱整理成路线",
    slowStatus: "先给想法晒晒太阳",
  },
  {
    weather: "工具屋晴",
    mood: "适合修一点小按钮和大问题",
    status: "正在给 agents 补一块木板",
    slowStatus: "慢慢打磨，也算向前",
  },
  {
    weather: "海面有星光",
    mood: "适合写一点不那么功利的代码",
    status: "正在把实验变成可以复现的贝壳",
    slowStatus: "允许自己在海边多想一会儿",
  },
  {
    weather: "流程潮汐",
    mood: "适合观察工具调用和真实问题",
    status: "正在给工作流系上更稳的绳结",
    slowStatus: "把节奏调轻一点，海风会帮忙",
  },
];

export const notes: NotePreview[] = [
  {
    title: "Agent 魔法手账",
    status: "drafting",
    category: "experiment",
    summary: "把零散实验晒成一张能复现的藏宝图，从最小可用 agent 开始。",
  },
  {
    title: "前端旧船票",
    status: "coming soon",
    category: "frontend",
    summary:
      "从前端时代带来的手艺还在发光：体验、状态、组件和工程化，都能继续给 agents 造桥。",
  },
  {
    title: "从零登岛路线",
    status: "drafting",
    category: "tutorial",
    summary:
      "把 ai-agents-from-zero 整理成更温柔的航线图，让第一次登岛的人也不迷路。",
  },
];

export const friendLinks: FriendLink[] = [
  {
    name: "Chiikawa 吉伊卡哇情报站",
    description: "乌萨奇的好朋友，停靠在这条温柔又热闹的邻岛航线。",
    href: "https://www.anime-chiikawa.jp/",
    avatar:
      "https://i0.wp.com/chiikawahk.com/wp-content/uploads/2023/12/image-3.png?resize=300%2C295&ssl=1",
    tag: "Neighbor island",
    note: "坐小船去看看吉伊卡哇的可爱情报。",
  },
];

export const islandTasks: IslandTask[] = [
  {
    key: "minimum-agent",
    task: "孵化最小可用 agent",
    state: "正在发芽",
    tool: "Python / Workflow",
    sparkle: "让概念先跑起来",
  },
  {
    key: "tutorial-map",
    task: "整理从零教程航线",
    state: "已经上岸",
    tool: "Markdown / GitHub",
    sparkle: "给后来者留路标",
  },
  {
    key: "tool-calling",
    task: "观察工具调用潮汐",
    state: "潮汐观察中",
    tool: "Dify / Coze",
    sparkle: "找到可靠的编排节奏",
  },
  {
    key: "frontend-spells",
    task: "把前端体验变成 agent 手艺",
    state: "慢慢打磨",
    tool: "React / TypeScript",
    sparkle: "让界面也会照顾人",
  },
];
