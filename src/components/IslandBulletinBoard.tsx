import { Card, Collapse } from "animal-island-ui";
import { bulletinEntries } from "../data/profile";

export function IslandBulletinBoard() {
  return (
    <section className="content-section bulletin-section" id="bulletin">
      <div className="section-heading-center">
        <p className="section-kicker">Bulletin Board</p>
        <h2>岛上公告板</h2>
        <p>把一些还在发光的想法，钉成几张会被海风翻动的便签。</p>
      </div>
      <Card type="dashed" className="bulletin-board-card">
        <div className="bulletin-pin-row" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="bulletin-note-grid">
          {bulletinEntries.map((entry) => (
            <div className="bulletin-note" key={entry.question}>
              <Collapse question={entry.question} answer={entry.answer} />
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
