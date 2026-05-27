import { Button, Footer } from "animal-island-ui";
import { profile } from "../data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-card">
        <p className="section-kicker">Contact</p>
        <h2>如果你也在折腾 agents，欢迎来岛上串门。</h2>
        <a className="footer-email" href={profile.links.email}>
          {profile.email}
        </a>
        <div className="hero-actions footer-actions">
          <Button
            type="primary"
            onClick={() =>
              window.open(profile.links.github, "_blank", "noopener")
            }
          >
            GitHub
          </Button>
          <Button
            type="dashed"
            onClick={() => {
              window.location.href = profile.links.email;
            }}
          >
            邮箱
          </Button>
        </div>
      </div>
      <Footer type="sea" />
    </footer>
  );
}
