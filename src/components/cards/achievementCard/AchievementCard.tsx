import React from "react";

// Define the structure for card info
interface CardInfo {
  image: string;
  title: string;
  description: string;
  footer: { name: string; url: string }[];
}

// Define the props for the AchievementCard component
interface AchievementCardProps {
  theme: { text: string; secondaryText: string };
  cardInfo: CardInfo;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ theme, cardInfo }) => {
  // Function to open URL in a new tab
  function openUrlInNewTab(url: string) {
    const win = window.open(url, "_blank");
    if (win) win.focus();
  }

  return (
    <div className="certificate-card">
      <div className="certificate-image-div">
        <img src={cardInfo.image} alt="PWA" className="card-image" />
      </div>
      <div className="certificate-detail-div">
        <h5 className="card-title" style={{ color: theme.text }}>
          {cardInfo.title}
        </h5>
        <p className="card-subtitle" style={{ color: theme.secondaryText }}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v) => (
          <p onClick={() => openUrlInNewTab(v.url)} key={v.url}>
            {v.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AchievementCard;
