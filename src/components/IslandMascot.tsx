import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";

type MascotMood = "idle" | "peek" | "pat" | "happy";

const mascotLines = [
  "今日小岛任务：挑一个小问题，做成能复用的小工具。",
  "今天适合给 agent 画一张回家的路线图。",
  "今天的岛务：把一个混乱问题整理成温柔路线。",
  "岛务处提醒：慢一点也没关系，先让想法长出脚。",
  "摸摸头收到，灵感值加一。",
  "如果 agent 卡住了，就先给它一张小地图。",
  "岛上规定：写代码也要留一点浪漫。",
];

const mascotActions = [
  { label: "公告板", href: "#bulletin", note: "带你去看看岛上的便签。" },
  { label: "看教程", href: profile.links.tutorial, note: "从零登岛路线准备好了。", external: true },
  { label: "孵化器", href: "#incubator", note: "去孵一只新的 agent 草图。" },
  { label: "联系岛主", href: "#contact", note: "给岛主递一封漂流瓶。" },
];

function getTodayLineIndex() {
  return new Date().getDate() % mascotLines.length;
}

export function IslandMascot() {
  const [mood, setMood] = useState<MascotMood>("idle");
  const [line, setLine] = useState(mascotLines[getTodayLineIndex()]);
  const [patCount, setPatCount] = useState(0);
  const [imageMissing, setImageMissing] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const restTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (restTimer.current) {
        window.clearTimeout(restTimer.current);
      }
    };
  }, []);

  const scheduleRest = () => {
    if (restTimer.current) {
      window.clearTimeout(restTimer.current);
    }

    restTimer.current = window.setTimeout(() => {
      setMood("idle");
      restTimer.current = null;
    }, 1800);
  };

  const handlePat = () => {
    const nextPatCount = patCount + 1;

    setPatCount(nextPatCount);
    setLine(mascotLines[nextPatCount % mascotLines.length]);
    setMood(nextPatCount % 3 === 0 ? "happy" : "pat");
    setMenuOpen((current) => !current);
    scheduleRest();
  };

  const handleAction = (note: string) => {
    setMenuOpen(false);
    setMood("happy");
    setLine(note);
    scheduleRest();
  };

  return (
    <aside
      className="island-mascot"
      data-menu-open={menuOpen}
      data-mood={mood}
      aria-label="岛务处小助手"
    >
      <div className="mascot-bubble" role="status" aria-live="polite">
        <strong>岛务处小狸</strong>
        <span>{line}</span>
      </div>
      <nav className="mascot-menu" aria-label="岛务处快捷入口">
        {mascotActions.map((action) => (
          <a
            key={action.href}
            href={action.href}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noopener noreferrer" : undefined}
            onClick={() => handleAction(action.note)}
          >
            {action.label}
          </a>
        ))}
      </nav>
      <button
        className="mascot-touch-zone"
        type="button"
        aria-expanded={menuOpen}
        aria-label="摸摸岛务处小狸的头并打开快捷入口"
        onClick={handlePat}
        onPointerEnter={() =>
          setMood((current) => (current === "idle" ? "peek" : current))
        }
        onPointerLeave={() =>
          setMood((current) => (current === "peek" ? "idle" : current))
        }
      >
        <span className="mascot-sparkle mascot-sparkle-a" aria-hidden="true" />
        <span className="mascot-sparkle mascot-sparkle-b" aria-hidden="true" />
        <span className="mascot-stage" aria-hidden="true">
          {imageMissing ? (
            <span className="mascot-placeholder">
              <span className="mascot-ear mascot-ear-left" />
              <span className="mascot-ear mascot-ear-right" />
              <span className="mascot-face">
                <span className="mascot-eye mascot-eye-left" />
                <span className="mascot-eye mascot-eye-right" />
                <span className="mascot-nose" />
              </span>
              <span className="mascot-apron" />
            </span>
          ) : (
            <>
              <img
                className="mascot-image mascot-image-day"
                src="/mascot/tom-nook-day.png"
                alt=""
                draggable="false"
                onError={() => setImageMissing(true)}
              />
              <img
                className="mascot-image mascot-image-night"
                src="/mascot/tom-nook-night.png"
                alt=""
                draggable="false"
                onError={() => setImageMissing(true)}
              />
            </>
          )}
        </span>
        <span className="mascot-shadow" aria-hidden="true" />
      </button>
    </aside>
  );
}
