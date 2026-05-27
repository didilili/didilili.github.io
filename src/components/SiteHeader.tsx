import { Button, Time } from "animal-island-ui";
import { profile } from "../data/profile";

const navItems = [
  { label: "关于", href: "#about" },
  { label: "成果", href: "#project" },
  { label: "工作台", href: "#workbench" },
  { label: "笔记", href: "#notes" },
  { label: "友链", href: "#friends" },
  { label: "联系", href: "#contact" },
];

export function SiteHeader() {
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
        <Button
          type="primary"
          size="small"
          onClick={() => window.open(profile.links.github, "_blank", "noopener")}
        >
          GitHub
        </Button>
      </div>
      <div className="header-time" aria-label="小岛时间">
        <Time />
      </div>
    </header>
  );
}
