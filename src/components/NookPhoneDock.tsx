import { Card, Icon } from "animal-island-ui";
import { dockItems } from "../data/profile";

export function NookPhoneDock() {
  return (
    <aside className="nook-phone" aria-label="小岛应用入口">
      <div className="phone-speaker" />
      <div className="phone-screen">
        <div className="phone-title">Island apps</div>
        <div className="dock-grid">
          {dockItems.map((item) => (
            <a
              className={`dock-link dock-link-${item.key}`}
              href={item.href}
              key={item.key}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              <Card color={item.color}>
                <span className="dock-icon">
                  <Icon name={item.iconName} size={36} bounce />
                </span>
                <strong>{item.label}</strong>
                <small>{item.description}</small>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
