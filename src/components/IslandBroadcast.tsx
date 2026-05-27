import { Button, Modal, Typewriter } from "animal-island-ui";
import { useEffect, useState } from "react";

const broadcastStorageKey = "didilili-island-broadcast-seen";

function getIslandGreeting(date = new Date()) {
  const hour = date.getHours();

  if (hour < 5) {
    return "夜深了，小岛的星星还醒着";
  }

  if (hour < 9) {
    return "早上好，小岛今日海风很轻";
  }

  if (hour < 12) {
    return "上午好，小岛的阳光已经铺到工作台";
  }

  if (hour < 14) {
    return "中午好，小岛正在晒暖暖的云";
  }

  if (hour < 18) {
    return "下午好，小岛的潮水适合继续造工具";
  }

  if (hour < 22) {
    return "晚上好，小岛的灯已经一盏盏亮起来";
  }

  return "深夜好，小岛进入安静的灵感时间";
}

export function IslandBroadcast() {
  const [open, setOpen] = useState(false);
  const [greeting] = useState(() => getIslandGreeting());

  useEffect(() => {
    if (window.sessionStorage.getItem(broadcastStorageKey)) {
      return;
    }

    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 2100);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const closeBroadcast = () => {
    window.sessionStorage.setItem(broadcastStorageKey, "true");
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      title="小岛广播"
      width={520}
      onClose={closeBroadcast}
      onOk={closeBroadcast}
      typewriter={false}
      footer={
        <Button type="primary" onClick={closeBroadcast}>
          收到，去逛岛
        </Button>
      }
    >
      <div className="broadcast-copy">
        <Typewriter speed={42} trigger={open}>
          {greeting}。今日任务：继续给 agents
          搭桥，把混乱的问题做成会发光的小工具。
        </Typewriter>
      </div>
    </Modal>
  );
}
