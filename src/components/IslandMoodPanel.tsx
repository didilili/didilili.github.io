import { Card, Switch, Time } from "animal-island-ui";
import { useState } from "react";
import { islandMoodReports } from "../data/profile";

function pickIslandMoodReport() {
  const index = Math.floor(Math.random() * islandMoodReports.length);
  return islandMoodReports[index] ?? islandMoodReports[0];
}

type IslandMoodPanelProps = {
  variant?: "section" | "hero";
};

export function IslandMoodPanel({ variant = "section" }: IslandMoodPanelProps) {
  const [report] = useState(pickIslandMoodReport);
  const [workingMode, setWorkingMode] = useState(true);

  if (variant === "hero") {
    return (
      <aside className="hero-mood-panel" aria-label="今日小岛状态">
        <div className="hero-weather-note">
          <span className="hero-weather-pin" aria-hidden="true" />
          <p className="section-kicker">Today's breeze</p>
          <p className="hero-weather-text">{report.mood}</p>
          <dl className="hero-weather-list">
            <div>
              <dt>天气</dt>
              <dd>{report.weather}</dd>
            </div>
            <div>
              <dt>状态</dt>
              <dd>{report.status}</dd>
            </div>
          </dl>
        </div>
      </aside>
    );
  }

  const panel = (
    <Card type="dashed" className="island-mood-card island-mood-card-section">
      <div className="island-mood-copy">
        <p className="section-kicker">Island Weather</p>
        <h2>小岛天气 / 今日心情</h2>
        <p>刷新会换一阵海风，看看今天适合怎样继续发光。</p>
      </div>
      <div className="island-mood-dashboard">
        <div className="island-time-card" aria-label="小岛时间">
          <span>小岛时间</span>
          <Time />
        </div>
        <div className="island-mood-toggle">
          <span>{workingMode ? "赶海模式" : "慢慢发光"}</span>
          <Switch
            checked={workingMode}
            onChange={setWorkingMode}
            checkedChildren="ON"
            unCheckedChildren="OFF"
          />
        </div>
        <dl className="island-mood-list">
          <div>
            <dt>今日天气</dt>
            <dd>{report.weather}</dd>
          </div>
          <div>
            <dt>今日心情</dt>
            <dd>{report.mood}</dd>
          </div>
          <div>
            <dt>今日状态</dt>
            <dd>{workingMode ? report.status : report.slowStatus}</dd>
          </div>
        </dl>
      </div>
    </Card>
  );

  return (
    <section className="content-section island-mood-section" id="mood">
      {panel}
    </section>
  );
}
