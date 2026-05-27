import { Card } from "animal-island-ui";
import { friendLinks } from "../data/profile";

export function FriendLinks() {
  return (
    <section className="content-section friends-section" id="friends">
      <div className="section-heading-center">
        <p className="section-kicker">Friends Ferry</p>
        <h2>邻岛航线</h2>
        <p>把喜欢的小岛系在码头边，海风一吹，就可以去朋友那里串门。</p>
      </div>
      <div className="friend-link-grid">
        {friendLinks.map((friend) => (
          <a
            className="friend-ticket"
            href={friend.href}
            key={friend.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`打开 ${friend.name}`}
          >
            <Card type="dashed">
              <span className="friend-ticket-tag">{friend.tag}</span>
              <span className="friend-avatar-wrap">
                <img src={friend.avatar} alt={`${friend.name} 头像`} />
              </span>
              <span className="friend-ticket-copy">
                <strong>{friend.name}</strong>
                <span>{friend.description}</span>
                <small>{friend.note}</small>
              </span>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
