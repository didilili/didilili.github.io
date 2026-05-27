import { Cursor, Divider } from "animal-island-ui";
import { AboutSection } from "./components/AboutSection";
import { Hero } from "./components/Hero";
import { NotesPreview } from "./components/NotesPreview";
import { ProjectCard } from "./components/ProjectCard";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { Workbench } from "./components/Workbench";

export default function App() {
  return (
    <Cursor>
      <div className="island-page">
        <SiteHeader />
        <Hero />
        <main>
          <AboutSection />
          <Divider type="wave-yellow" />
          <ProjectCard />
          <Workbench />
          <NotesPreview />
        </main>
        <SiteFooter />
      </div>
    </Cursor>
  );
}
