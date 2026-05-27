import { Footer } from "animal-island-ui";
import { profile } from "../data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-card">
        <p className="section-kicker">Contact</p>
        <h2>如果你也在给 agents 造梦，欢迎来岛上串门。</h2>
        <div className="hero-actions footer-actions">
          <a
            className="footer-link-button footer-link-button-dashed"
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="footer-link-button footer-link-button-dashed"
            href={profile.links.email}
          >
            邮箱
          </a>
        </div>
      </div>
      <Footer type="sea" className="footer-sea" />
    </footer>
  );
}
