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
    "曾经写前端，现在在折腾 AI agents。这里放一些教程、实验记录和还没完全长成的想法。",
  status: "Agent island online",
  links: {
    github: "https://github.com/didilili",
    tutorial: "https://github.com/didilili/ai-agents-from-zero",
    email: "mailto:dili@outlook.com",
  },
  about:
    "我是一位 AI agents 开发工程师，也做过很长一段时间前端。现在更关心怎么把 agents、工作流、工具调用和产品体验连接起来，然后把踩过的坑整理成别人也能上手的路线。",
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
    description: "前端出身，现在在做 agents",
    href: "#about",
    color: "app-teal",
    iconName: "icon-map",
  },
  {
    key: "tutorial",
    label: "教程",
    description: "ai-agents-from-zero",
    href: profile.links.tutorial,
    external: true,
    color: "app-yellow",
    iconName: "icon-diy",
  },
  {
    key: "notes",
    label: "笔记",
    description: "实验、草稿和踩坑记录",
    href: "#notes",
    color: "app-pink",
    iconName: "icon-design",
  },
  {
    key: "github",
    label: "GitHub",
    description: "代码和公开项目",
    href: profile.links.github,
    external: true,
    color: "app-blue",
    iconName: "icon-miles",
  },
];

export const workbenchTabs = [
  {
    key: "doing",
    label: "现在在做",
    items: ["整理 agents 入门路线", "把前端经验迁移到 AI 产品", "研究工具调用和工作流编排"],
  },
  {
    key: "writing",
    label: "想写",
    items: ["从零搭一个 agent", "Dify / Coze 实战对比", "agents 产品里的前端体验"],
  },
  {
    key: "done",
    label: "已整理",
    items: ["ai-agents-from-zero 教程仓库", "一些 prompt 和工作流实践", "这个可爱的小岛工作台"],
  },
];

export const notes: NotePreview[] = [
  {
    title: "Agent 实验记录",
    status: "drafting",
    summary: "把零散实验整理成可以复现的步骤，先从最小可用 agent 开始。",
  },
  {
    title: "工作流踩坑",
    status: "idea",
    summary: "记录 Dify、Coze、工具调用和编排时遇到的真实问题。",
  },
  {
    title: "前端开发旧笔记",
    status: "coming soon",
    summary: "有些前端经验仍然有用，尤其是体验、状态和工程化。",
  },
];
