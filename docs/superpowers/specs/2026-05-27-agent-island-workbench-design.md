# Agent 工程师的小岛工作台设计

## 背景

目标是在 `didilili.github.io` 上搭建一个个人博客/主页，定位为“Agent 工程师的小岛工作台”。站点不需要假装拥有大量履历或内容，而是用有趣、完整、可互动的界面表达作者身份：曾经做前端，现在专注 AI agents 开发，并把 `ai-agents-from-zero` 作为目前最主要的公开成果展示出来。

## 设计方向

采用“工程作品集 + 温柔个人博客”的混合方向：

- 结构上像一个工程师工作台，清楚展示身份、项目、技能、链接和未来文章入口。
- 语气上像个人小岛，不夸大成就，表达真实、轻松、愿意持续整理和分享。
- 视觉上重点使用 `animal-island-ui` 的趣味组件和风格，让内容不多时页面仍然完整、有记忆点。

## 技术选择

站点使用 React + Vite 构建，而不是单独维护 `index.html`。

核心依赖：

- `react`
- `react-dom`
- `vite`
- `typescript`
- `animal-island-ui`

部署目标仍然是 GitHub Pages。构建产物输出到 `dist/`，仓库保留源码和配置。由于仓库名是 `didilili.github.io`，生产环境按根路径部署。

## 页面结构

首页是一个单页工作台，先不引入完整路由系统。页面包含以下区域：

### 顶部状态栏

使用类似 `Time`、胶囊按钮、状态标签的组合，营造“进入小岛工作台”的感觉。

内容包括：

- 站点名：`didilili`
- 导航锚点：关于、成果、工作台、笔记、联系
- 一个轻量状态文案，例如 `Agent island online`

### 第一屏

第一屏标题为 `Agent 工程师的小岛工作台`。

副标题表达真实定位：

> 曾经写前端，现在在折腾 AI agents。这里放一些教程、实验记录和还没完全长成的想法。

主要操作：

- 查看 `ai-agents-from-zero`
- 访问 GitHub

视觉组成：

- 左侧是标题、简介、按钮。
- 右侧是 NookPhone/应用网格风格的卡片区，用彩色 app tile 展示“关于我”“教程”“笔记”“GitHub”等入口。

### 关于我

短文案，不做过度包装：

- AI agents 开发工程师
- 曾经做前端
- 喜欢把复杂工具整理成可复用教程和小实验
- 关注 Dify、Coze、工作流、工具调用、前端体验与工程化

### 主要成果

突出 `ai-agents-from-zero`。

展示方式：

- 使用 `Card` 或自定义的 animal 风格成果卡。
- 文案强调“从零开始学习 AI agents 的教程/路线”。
- 提供 GitHub 链接。
- 可放 3 个小标签：`AI Agents`、`Tutorial`、`From Zero`。

### 小岛工作台

这是页面的趣味核心。用多个 `animal-island-ui` 组件制造“内容不多但很有意思”的体验。

建议组件：

- `Card`：技能/兴趣卡片
- `Button`：主要链接
- `Tabs`：切换“现在在做 / 想写 / 已整理”
- `Collapse`：折叠一些轻量说明
- `Switch` 或自定义状态控件：展示“学习中 / 实验中”状态
- `CodeBlock` 或深色代码块：放一段 agent 伪代码
- `Divider` / `Footer`：增加页面节奏和装饰

### 笔记入口

先做成视觉完整的占位区，不承诺已有大量文章。

卡片示例：

- `Agent 实验记录`
- `工作流踩坑`
- `前端开发旧笔记`

每张卡可以标注 `coming soon`、`drafting` 或 `idea`。后续如果内容变多，再演进为真实博客列表或 Markdown 驱动。

### 联系方式

提供 GitHub 和邮箱。

语气保持轻松，例如：

> 如果你也在折腾 agents，欢迎来岛上串门。

## 视觉规范

整体参考 `animal-island-ui`：

- 暖纸色背景和浅绿色岛屿氛围
- 棕色正文，不使用纯黑
- 大圆角、胶囊按钮、底部 3D 阴影
- 彩色 NookPhone app tile
- hover 时轻微上浮或按压
- 中文字体优先使用 `Noto Sans SC`，搭配 `Nunito` / `Zen Maru Gothic`

实现时优先直接使用 `animal-island-ui` 组件；如果某些版式组件库没有提供，则用本地 CSS 复刻其设计 token，而不是引入额外 UI 框架。

## 内容策略

页面要避免空洞的“履历包装”。内容少是设计前提，不是缺陷。

文案原则：

- 真诚，不吹嘘。
- 用“正在整理”“实验记录”“学习路线”这种表达。
- 让趣味 UI 承担第一印象，让少量文字承担可信度。

## 架构

建议源码结构：

```text
src/
  App.tsx
  main.tsx
  styles.css
  data/
    profile.ts
  components/
    Hero.tsx
    NookPhoneDock.tsx
    ProjectCard.tsx
    Workbench.tsx
    NotesPreview.tsx
    SiteFooter.tsx
```

`profile.ts` 存放文案、链接、技能标签和占位文章数据，避免页面组件里堆太多静态内容。

## 响应式要求

- 桌面端第一屏使用左右布局。
- 移动端改为单列，NookPhone/app 区域放在标题下方。
- 所有按钮和卡片文字必须完整显示，不应溢出。
- 彩色 app tile 在移动端保持稳定尺寸和间距。

## 测试与验证

实现完成后需要验证：

- `npm run build` 成功。
- 本地 Vite 开发服务可打开。
- 桌面和移动视口截图检查无明显重叠、溢出、空白或资源加载失败。
- GitHub Pages 所需的构建配置可用。

## 非目标

本阶段不做：

- 多页面博客系统
- Markdown/MDX 内容管线
- 评论系统
- 后台管理
- 复杂动画或 3D 场景

这些可以在首页稳定后再扩展。
