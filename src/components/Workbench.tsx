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
        <p>内容还不多，所以让组件先热闹起来。</p>
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
            answer="因为这个站点首先是一个小工作台，不是正式文档。伪代码刚好表达我在思考的方向。"
          />
        </Card>
      </div>
    </section>
  );
}
