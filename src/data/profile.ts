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
  summary: string;
};

export const profile = {
  name: "didilili",
  title: "Agent 工程师的小岛工作台",
  subtitle:
    "这里是一座给 AI agents、前端手艺和奇思妙想停靠的小岛。我把教程、实验、失败日志和发光的念头都晒在海风里，慢慢造一间可以招待后来者的工具屋。",
  status: "Island dream lab online",
  links: {
    github: "https://github.com/didilili",
    tutorial: "https://github.com/didilili/ai-agents-from-zero",
    email: "mailto:dili@outlook.com",
  },
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
    key: "notes",
    label: "笔记",
    description: "漂流瓶、草稿和灵感碎片",
    href: "#notes",
    color: "app-pink",
    iconName: "icon-design",
  },
  {
    key: "github",
    label: "GitHub",
    description: "代码贝壳和公开作品",
    href: profile.links.github,
    external: true,
    color: "app-blue",
    iconName: "icon-miles",
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

export const notes: NotePreview[] = [
  {
    title: "Agent 魔法手账",
    status: "drafting",
    summary: "把零散实验晒成一张能复现的藏宝图，从最小可用 agent 开始。",
  },
  {
    title: "工作流退潮笔记",
    status: "idea",
    summary: "记录 Dify、Coze、工具调用和编排里那些真实的浪花、暗礁和小发现。",
  },
  {
    title: "前端旧船票",
    status: "coming soon",
    summary: "从前端时代带来的手艺还在发光：体验、状态、组件和工程化，都能继续给 agents 造桥。",
  },
];
