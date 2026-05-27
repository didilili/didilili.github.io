import { Button, Card, Divider } from "animal-island-ui";
import { profile } from "../data/profile";
import { NookPhoneDock } from "./NookPhoneDock";

export function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <Card type="title" color="app-teal">
          <a
            className="hero-profile-badge"
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="打开 didilili 的 GitHub 主页"
          >
            <img src={profile.avatar} alt="didilili 的 GitHub 头像" />
            <span>
              <strong>didilili</strong>
              <small>岛主 / agent builder</small>
            </span>
          </a>
          <p className="eyebrow">AI agents / frontend / notes</p>
          <h1>{profile.title}</h1>
          <p className="hero-subtitle">{profile.subtitle}</p>
          <div className="hero-actions">
            <Button
              type="primary"
              size="large"
              onClick={() =>
                window.open(profile.links.tutorial, "_blank", "noopener")
              }
            >
              查看教程
            </Button>
            <Button
              type="dashed"
              size="large"
              onClick={() =>
                window.open(profile.links.github, "_blank", "noopener")
              }
            >
              逛逛 GitHub
            </Button>
          </div>
        </Card>
        <Divider type="line-teal" />
      </div>
      <NookPhoneDock />
    </section>
  );
}
