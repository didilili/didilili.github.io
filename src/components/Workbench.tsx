import { Card, CodeBlock, Collapse, Switch, Tabs } from "animal-island-ui";
import { useState } from "react";
import { workbenchTabs } from "../data/profile";

const agentSnippet = `const agent = createAgent({
  role: "curious-builder",
  tools: ["search", "workflow", "frontend"],
  goal: "turn messy notes into useful paths",
});`;

export function Workbench() {
  const [learning, setLearning] = useState(true);

  return (
    <section className="content-section workbench-section" id="workbench">
      <div className="section-heading-center">
        <p className="section-kicker">Workbench</p>
        <h2>小岛工作台</h2>
        <p>内容还在长叶子，先让按钮、标签和小组件一起热闹起来。</p>
      </div>
      <div className="workbench-grid">
        <Card color="app-teal">
          <div className="status-row">
            <span>学习模式</span>
            <Switch
              checked={learning}
              onChange={setLearning}
              checkedChildren="ON"
              unCheckedChildren="OFF"
            />
          </div>
          <Tabs
            defaultActiveKey="doing"
            items={workbenchTabs.map((tab) => ({
              key: tab.key,
              label: tab.label,
              children: (
                <ul className="tab-list">
                  {tab.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ),
            }))}
          />
        </Card>
        <Card color="app-yellow">
          <h3>Agent 伪代码</h3>
          <CodeBlock code={agentSnippet} className="local-code-block" />
          <Collapse
            question="为什么放伪代码？"
            answer="因为这里首先是一张手作工作台，不是严肃到不能呼吸的正式文档。伪代码像铅笔草图，刚好可以留下我正在想象的方向。"
          />
        </Card>
      </div>
    </section>
  );
}
