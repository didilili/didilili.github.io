import { useEffect, useState } from "react";
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

export default function App() {
  const [loaderActive, setLoaderActive] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

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

  return (
    <Cursor>
      <div className="island-page">
        {showLoader ? (
          <div className="island-loading-overlay" aria-hidden={!loaderActive}>
            <Loading
              active={loaderActive}
              className="island-loading-surface"
            />
          </div>
        ) : null}
        <SiteHeader />
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
