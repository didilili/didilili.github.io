import { Footer } from "animal-island-ui";
import { profile } from "../data/profile";

const boatPath =
  "M460.215 0l-.418 60 42-5.928zm24.705 80.44L467.172 83l-18.326-2.539-14.79-4.87L426.798 63h75c-4.116 17.585-16.878 17.44-16.878 17.44z";

const tealFishPath =
  "M611.783 121.092c-.661-.178-1.322-.298-1.945-.536a36.709 36.709 0 00-4.841-1.827 4.742 4.742 0 00-3.83.786 4.943 4.943 0 00-2.004 3.424 12.164 12.164 0 000 3.971 5.159 5.159 0 002.437 3.462 4.963 4.963 0 004.155.41 15.753 15.753 0 003.072-1.35 5.755 5.755 0 013.364-1.171 15.938 15.938 0 00-1.36 2.204 2.77 2.77 0 00.27 2.483 2.651 2.651 0 002.14 1.21c2.645.14 4.706-.536 8.109-3.197 1.01.199 2.955.636 4.025.834l-.642.477c-.55.258-.918.803-.958 1.42a1.7 1.7 0 00.764 1.539 2.53 2.53 0 002.391.615 8.485 8.485 0 004.862-3.832c.865-.25 1.75-.423 2.644-.516a19.668 19.668 0 003.17-1.192 10.676 10.676 0 004.92-3.971c1.847-3.277-2.14-5.958-4.376-7.506-1.458-1.053-3.617-2.125-5.172-3.078-.858-2.396-3.144-3.942-5.64-3.813-1.61-.078-3.078.942-3.596 2.502 0 .179 0 .258-.137.397-.136.14-2.8 1.092-3.402 1.291a19.856 19.856 0 00-5.503-1.529c-3.092 0-4.064 2.125-3.364 4.964.152.42.34.826.564 1.212l-.117.317z";

const coralFishPath =
  "M696.356 146.814c.486-.14.993-.239 1.48-.418a27.507 27.507 0 013.62-1.352 3.54 3.54 0 012.908.564 3.693 3.693 0 011.512 2.598c.165.98.165 1.982 0 2.962a3.855 3.855 0 01-1.818 2.594 3.707 3.707 0 01-3.108.31 10.957 10.957 0 01-2.316-1.015 4.321 4.321 0 00-2.512-.875c.382.527.721 1.086 1.012 1.67.256.618.19 1.325-.174 1.882-.365.557-.98.889-1.636.883a8.41 8.41 0 01-6.094-2.406c-.76.139-2.22.477-3.018.636l.487.358c.413.191.688.6.717 1.062a1.26 1.26 0 01-.58 1.145 1.918 1.918 0 01-1.792.457 6.327 6.327 0 01-3.66-2.863 10.454 10.454 0 00-1.947-.398 14.465 14.465 0 01-2.395-.894 7.91 7.91 0 01-3.68-2.923c-1.401-2.446 1.597-4.415 3.271-5.628 1.09-.795 2.726-1.61 3.894-2.306.63-1.814 2.342-2.999 4.225-2.923 1.24-.044 2.352.774 2.706 1.988 0 .14 0 .18.117.299l2.55.974a14.211 14.211 0 014.128-1.153c2.317 0 3.057 1.59 2.511 3.718a5.464 5.464 0 01-.408.915v.139z";

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
      <div className="footer-ocean" aria-hidden="true">
        <Footer type="sea" className="footer-sea" />
        <div className="footer-ocean-life">
          <svg
            className="ocean-sprite ocean-fish ocean-fish-a"
            viewBox="595 110 55 30"
          >
            <path d={tealFishPath} fill="#008077" />
          </svg>
          <svg
            className="ocean-sprite ocean-fish ocean-fish-b"
            viewBox="670 139 40 24"
          >
            <path d={coralFishPath} fill="#EC7175" />
          </svg>
          <svg className="ocean-sprite ocean-boat" viewBox="420 0 90 88">
            <path d={boatPath} fill="#EC7175" />
          </svg>
          <svg className="ocean-gull ocean-gull-a" viewBox="0 0 86 34">
            <path
              className="ocean-gull-wing ocean-gull-wing-left"
              d="M42 18C30 5 15 6 4 18"
            />
            <path
              className="ocean-gull-wing ocean-gull-wing-right"
              d="M42 18C54 5 71 6 82 18"
            />
          </svg>
          <svg className="ocean-gull ocean-gull-b" viewBox="0 0 86 34">
            <path
              className="ocean-gull-wing ocean-gull-wing-left"
              d="M42 18C30 5 15 6 4 18"
            />
            <path
              className="ocean-gull-wing ocean-gull-wing-right"
              d="M42 18C54 5 71 6 82 18"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
}
