import { useEffect, useRef, useState } from "react";
import { Cursor, Divider, Loading } from "animal-island-ui";
import { AboutSection } from "./components/AboutSection";
import { AgentIncubator } from "./components/AgentIncubator";
import { FriendLinks } from "./components/FriendLinks";
import { Hero } from "./components/Hero";
import { IslandBulletinBoard } from "./components/IslandBulletinBoard";
import { IslandBroadcast } from "./components/IslandBroadcast";
import { NotesPreview } from "./components/NotesPreview";
import { ProjectCard } from "./components/ProjectCard";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { Workbench } from "./components/Workbench";

export type IslandTheme = "day" | "night";
type CelestialTransition = "sunset" | "sunrise" | null;

function getInitialTheme(): IslandTheme {
  if (typeof window === "undefined") {
    return "day";
  }

  const themeFromUrl = new URLSearchParams(window.location.search).get("theme");
  if (themeFromUrl === "day" || themeFromUrl === "night") {
    return themeFromUrl;
  }

  return window.localStorage.getItem("island-theme") === "night"
    ? "night"
    : "day";
}

export default function App() {
  const [theme, setTheme] = useState<IslandTheme>(getInitialTheme);
  const [celestialTransition, setCelestialTransition] =
    useState<CelestialTransition>(null);
  const [loaderActive, setLoaderActive] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const transitionTimers = useRef<number[]>([]);

  useEffect(() => {
    document.documentElement.dataset.islandTheme = theme;
    window.localStorage.setItem("island-theme", theme);
  }, [theme]);

  useEffect(() => {
    return () => {
      transitionTimers.current.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const enterDelay = prefersReducedMotion ? 150 : 950;
    const removeDelay = prefersReducedMotion ? 450 : 1800;

    const closeTimer = window.setTimeout(() => {
      setLoaderActive(false);
    }, enterDelay);
    const removeTimer = window.setTimeout(() => {
      setShowLoader(false);
    }, removeDelay);

    return () => {
      window.clearTimeout(closeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  const handleThemeToggle = () => {
    if (celestialTransition) {
      return;
    }

    const nextTheme = theme === "day" ? "night" : "day";
    const transition = theme === "day" ? "sunset" : "sunrise";
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    transitionTimers.current.forEach((timer) => window.clearTimeout(timer));
    transitionTimers.current = [];

    if (prefersReducedMotion) {
      setTheme(nextTheme);
      return;
    }

    setCelestialTransition(transition);

    const swapTimer = window.setTimeout(() => {
      setTheme(nextTheme);
    }, 760);
    const finishTimer = window.setTimeout(() => {
      setCelestialTransition(null);
      transitionTimers.current = [];
    }, 1700);

    transitionTimers.current = [swapTimer, finishTimer];
  };

  return (
    <Cursor>
      <div
        className="island-page"
        data-theme={theme}
        data-celestial-transition={celestialTransition ?? undefined}
      >
        {showLoader ? (
          <div className="island-loading-overlay" aria-hidden={!loaderActive}>
            <Loading
              active={loaderActive}
              className="island-loading-surface"
            />
          </div>
        ) : null}
        {celestialTransition ? (
          <div
            className={`celestial-transition celestial-transition-${celestialTransition}`}
            aria-hidden="true"
          >
            <span className="celestial-sky-wash" />
            <span className="celestial-orb celestial-sun" />
            <span className="celestial-orb celestial-moon" />
            <span className="celestial-sparkle celestial-sparkle-a" />
            <span className="celestial-sparkle celestial-sparkle-b" />
            <span className="celestial-horizon" />
            <span className="celestial-ripple celestial-ripple-a" />
            <span className="celestial-ripple celestial-ripple-b" />
          </div>
        ) : null}
        <SiteHeader
          theme={theme}
          onThemeToggle={handleThemeToggle}
          themeTransitioning={Boolean(celestialTransition)}
        />
        <IslandBroadcast />
        <Hero />
        <main>
          <AboutSection />
          <IslandBulletinBoard />
          <Divider type="wave-yellow" />
          <ProjectCard />
          <Workbench />
          <AgentIncubator />
          <NotesPreview />
          <FriendLinks />
        </main>
        <SiteFooter />
      </div>
    </Cursor>
  );
}
