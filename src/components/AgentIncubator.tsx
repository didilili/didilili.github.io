import { Card, CodeBlock } from "animal-island-ui";
import { useMemo, useState } from "react";

type IncubatorOption = {
  key: string;
  label: string;
  description: string;
  code: string;
};

type IncubatorGroup = {
  key: "goal" | "tool" | "memory" | "workflow" | "output";
  label: string;
  options: IncubatorOption[];
};

const incubatorGroups: IncubatorGroup[] = [
  {
    key: "goal",
    label: "目标",
    options: [
      {
        key: "route",
        label: "整理路线",
        description: "把混乱问题变成可执行步骤",
        code: "turn messy notes into a gentle route",
      },
      {
        key: "answer",
        label: "回答访客",
        description: "接住问题，再给出温柔解释",
        code: "answer visitor questions with context",
      },
      {
        key: "compare",
        label: "观察工具",
        description: "比较工具能力和真实使用感",
        code: "compare agent tools in real workflows",
      },
    ],
  },
  {
    key: "tool",
    label: "工具",
    options: [
      {
        key: "search",
        label: "检索贝壳",
        description: "查资料、找链接、补上下文",
        code: "search",
      },
      {
        key: "workflow",
        label: "流程木牌",
        description: "拆步骤、排顺序、标记状态",
        code: "workflow",
      },
      {
        key: "browser",
        label: "浏览器小船",
        description: "打开页面、观察界面、收集线索",
        code: "browser",
      },
    ],
  },
  {
    key: "memory",
    label: "记忆",
    options: [
      {
        key: "scratch",
        label: "便签记忆",
        description: "只记这一轮任务里的关键线索",
        code: "scratchpad",
      },
      {
        key: "project",
        label: "项目记忆",
        description: "记住仓库规则、风格和约定",
        code: "project_notes",
      },
      {
        key: "none",
        label: "轻装上岸",
        description: "不保存记忆，只输出一次性草图",
        code: "none",
      },
    ],
  },
  {
    key: "workflow",
    label: "工作流",
    options: [
      {
        key: "plan",
        label: "先画航线",
        description: "计划、执行、复盘三步走",
        code: "plan -> act -> review",
      },
      {
        key: "loop",
        label: "潮汐循环",
        description: "观察结果，再调整下一步",
        code: "observe -> adjust -> retry",
      },
      {
        key: "handoff",
        label: "邀请岛主",
        description: "关键选择交给人类确认",
        code: "draft -> ask_human -> continue",
      },
    ],
  },
  {
    key: "output",
    label: "输出方式",
    options: [
      {
        key: "map",
        label: "路线图",
        description: "输出步骤、风险和下一步",
        code: "route_map",
      },
      {
        key: "board",
        label: "任务板",
        description: "输出待办、状态和工具清单",
        code: "task_board",
      },
      {
        key: "snippet",
        label: "伪代码",
        description: "输出可继续改造的 agent 草图",
        code: "pseudo_code",
      },
    ],
  },
];

const initialSelections = incubatorGroups.reduce(
  (selection, group) => ({
    ...selection,
    [group.key]: group.options[0].key,
  }),
  {} as Record<IncubatorGroup["key"], string>,
);

function findOption(group: IncubatorGroup, key: string) {
  return group.options.find((option) => option.key === key) ?? group.options[0];
}

export function AgentIncubator() {
  const [selections, setSelections] = useState(initialSelections);

  const selectedOptions = useMemo(() => {
    return incubatorGroups.reduce(
      (current, group) => ({
        ...current,
        [group.key]: findOption(group, selections[group.key]),
      }),
      {} as Record<IncubatorGroup["key"], IncubatorOption>,
    );
  }, [selections]);

  const agentName = `${selectedOptions.goal.label} Agent`;
  const agentSnippet = `const agentSketch = createIslandAgent({
  name: "${agentName}",
  goal: "${selectedOptions.goal.code}",
  tools: ["${selectedOptions.tool.code}"],
  memory: "${selectedOptions.memory.code}",
  workflow: "${selectedOptions.workflow.code}",
  output: "${selectedOptions.output.code}",
});

agentSketch.whenStuck(() => askHuman("这一步要不要换条航线？"));`;

  return (
    <section className="content-section incubator-section" id="incubator">
      <div className="section-heading-center">
        <p className="section-kicker">Agent Incubator</p>
        <h2>Agent 孵化器</h2>
        <p>点几块小木牌，孵出一只暂时只存在于草图里的 agent。</p>
      </div>
      <div className="incubator-shell">
        <div className="incubator-controls">
          {incubatorGroups.map((group) => (
            <Card key={group.key} type="dashed" className="incubator-group">
              <div className="incubator-group-head">
                <span>{group.label}</span>
              </div>
              <div className="incubator-option-grid">
                {group.options.map((option) => {
                  const active = selections[group.key] === option.key;

                  return (
                    <button
                      key={option.key}
                      type="button"
                      className="incubator-option"
                      aria-pressed={active}
                      onClick={() =>
                        setSelections((current) => ({
                          ...current,
                          [group.key]: option.key,
                        }))
                      }
                    >
                      <strong>{option.label}</strong>
                      <small>{option.description}</small>
                    </button>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
        <Card color="app-blue" className="incubator-result-card">
          <div className="incubator-result-head">
            <p className="section-kicker">Hatching now</p>
            <h3>{agentName}</h3>
            <span>草图状态：正在破壳</span>
          </div>
          <div className="incubator-sketch">
            <div>
              <span>目标</span>
              <strong>{selectedOptions.goal.description}</strong>
            </div>
            <div>
              <span>工具</span>
              <strong>{selectedOptions.tool.label}</strong>
            </div>
            <div>
              <span>记忆</span>
              <strong>{selectedOptions.memory.label}</strong>
            </div>
            <div>
              <span>工作流</span>
              <strong>{selectedOptions.workflow.label}</strong>
            </div>
            <div>
              <span>输出</span>
              <strong>{selectedOptions.output.label}</strong>
            </div>
          </div>
          <CodeBlock code={agentSnippet} className="local-code-block" />
        </Card>
      </div>
    </section>
  );
}
