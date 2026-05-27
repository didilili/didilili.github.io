import { Button, Card, Collapse } from "animal-island-ui";
import { profile } from "../data/profile";

export function ProjectCard() {
  return (
    <section className="content-section project-section" id="project">
      <Card type="title" color="app-blue">
        <p className="section-kicker">Main project</p>
        <h2>ai-agents-from-zero</h2>
        <p className="section-copy">
          如果要在岛上插一面小旗，目前最像小旗的就是它：一份从零开始理解
          AI agents 的教程仓库。它不是宏伟纪念碑，更像我一边赶海一边铺下的路标，
          希望后来的人少绕一点弯，也多保留一点好奇。
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
          answer="适合想从概念、工具和实际项目慢慢进入 AI agents 的人。内容会随着我的实践继续生长，像岛上的小树一样，今天多一片叶子，明天多一条路。"
        />
      </Card>
    </section>
  );
}
