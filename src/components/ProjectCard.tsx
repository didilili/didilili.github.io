import { Button, Card, Collapse } from "animal-island-ui";
import { profile } from "../data/profile";

export function ProjectCard() {
  return (
    <section className="content-section project-section" id="project">
      <Card type="title" color="app-blue">
        <p className="section-kicker">Main project</p>
        <h2>ai-agents-from-zero</h2>
        <p className="section-copy">
          目前最像“成果”的东西：一份从零开始理解 AI agents
          的教程仓库。它不是终点，更像我给自己和后来者铺的一条上岛路线。
        </p>
        <div className="project-tags">
          <span>AI Agents</span>
          <span>Tutorial</span>
          <span>From Zero</span>
        </div>
        <div className="project-actions">
          <Button
            type="primary"
            onClick={() =>
              window.open(profile.links.tutorial, "_blank", "noopener")
            }
          >
            打开教程仓库
          </Button>
          <Button
            type="dashed"
            onClick={() =>
              window.open(profile.links.github, "_blank", "noopener")
            }
          >
            查看更多代码
          </Button>
        </div>
        <Collapse
          question="这个教程适合谁？"
          answer="适合想从概念、工具和实际项目慢慢进入 AI agents 的人。内容会随着我的实践继续整理。"
        />
      </Card>
    </section>
  );
}
