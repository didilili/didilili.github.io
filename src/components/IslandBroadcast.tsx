import { Button, Modal, Typewriter } from "animal-island-ui";
import { useEffect, useState } from "react";

const broadcastStorageKey = "didilili-island-broadcast-seen";

export function IslandBroadcast() {
  const [open, setOpen] = useState(false);

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
          早上好，didilili 小岛今日天气晴。今日任务：继续给 agents
          搭桥，把混乱的问题做成会发光的小工具。
        </Typewriter>
      </div>
    </Modal>
  );
}
