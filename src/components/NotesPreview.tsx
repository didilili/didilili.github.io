import { Card } from "animal-island-ui";
import { notes } from "../data/profile";

export function NotesPreview() {
  return (
    <section className="content-section" id="notes">
      <div className="section-heading-center">
        <p className="section-kicker">Notes</p>
        <h2>还没长大的笔记区</h2>
      </div>
      <div className="note-grid">
        {notes.map((note) => (
          <Card key={note.title} type="dashed">
            <span className="note-status">{note.status}</span>
            <h3>{note.title}</h3>
            <p>{note.summary}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
