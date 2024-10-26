import React from "react";
import "./PublicationCard.css";

interface PublicationProps {
  theme: {
    text: string;
    secondaryText: string;
  };
  publication: {
    name: string;
    description: string;
    url: string;
    createdAt: string;
  };
}

const PublicationCard: React.FC<PublicationProps> = ({ theme, publication }) => {
  const openPublicationInNewTab = (url: string) => {
    const win = window.open(url, "_blank");
    if (win) {
      win.focus();
    } else {
      console.error("Failed to open the publication. Please check your browser's pop-up settings.");
    }
  };

  return (
    <div className="publication-card-div second-heading-text-div">
      <div
        role="button"
        tabIndex={0}
        onClick={() => openPublicationInNewTab(publication.url)}
        onKeyPress={(e) => e.key === 'Enter' && openPublicationInNewTab(publication.url)}
        aria-label={`Open ${publication.name} in a new tab`}
      >

        <div className="heading-text-div">
          <h1 className="text-second-title">
            {publication.name}
          </h1>
        </div>
        <p className="text-detail">
          {publication.description}
        </p>
        <div className="publication-details-div">
          <p
            className="text-detail"
          >
            Published on: {publication.createdAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
