import { Button, Time } from "animal-island-ui";
import { profile } from "../data/profile";

const navItems = [
  { label: "关于", href: "#about" },
  { label: "公告", href: "#bulletin" },
  { label: "成果", href: "#project" },
  { label: "工作台", href: "#workbench" },
  { label: "笔记", href: "#notes" },
  { label: "友链", href: "#friends" },
  { label: "联系", href: "#contact" },
];

type SiteHeaderProps = {
  theme: "day" | "night";
  onThemeToggle: () => void;
  themeTransitioning?: boolean;
};

export function SiteHeader({
  theme,
  onThemeToggle,
  themeTransitioning = false,
}: SiteHeaderProps) {
  const isNight = theme === "night";

  return (
    <header className="site-header">
      <a className="brand-bubble" href="#top" aria-label="回到顶部">
        {profile.name}
      </a>
      <nav className="site-nav" aria-label="页面导航">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-tools">
        <span className="status-pill">{profile.status}</span>
        <button
          type="button"
          className="theme-toggle"
          aria-label={isNight ? "切换到白天主题" : "切换到黑夜主题"}
          aria-pressed={isNight}
          disabled={themeTransitioning}
          onClick={onThemeToggle}
        >
          <span className="theme-toggle-track" aria-hidden="true">
            <span className="theme-toggle-orb" />
          </span>
          <span>{isNight ? "夜晚" : "白天"}</span>
        </button>
      </div>
      <div className="header-time" aria-label="小岛时间">
        <Time />
      </div>
    </header>
  );
}
