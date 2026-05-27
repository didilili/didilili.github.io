import { Button, Card, Divider } from "animal-island-ui";
import { profile } from "../data/profile";
import { NookPhoneDock } from "./NookPhoneDock";

export function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <Card type="title" color="app-teal">
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
