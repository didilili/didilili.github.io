import { Card } from "animal-island-ui";
import { profile } from "../data/profile";

export function AboutSection() {
  return (
    <section className="content-section two-column" id="about">
      <div>
        <p className="section-kicker">About</p>
        <h2>不是很辉煌，但还挺认真。</h2>
      </div>
      <Card color="app-yellow">
        <p className="section-copy">{profile.about}</p>
        <div className="skill-cloud">
          {profile.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </Card>
    </section>
  );
}
