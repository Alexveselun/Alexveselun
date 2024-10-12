import React from "react";
import MotionWrapper from "../animations/MotionWrapper";
import "./PublicationCard.css";

const PublicationCard = ({ theme, publication }) => { // Destructure props
  const openPublicationInNewTab = (url) => {
    const win = window.open(url, "_blank");
    if (win) {
      win.focus(); // Ensure the window opens if pop-ups are allowed
    } else {
      console.error("Failed to open the publication. Please check your browser's pop-up settings.");
    }
  };

  return (
    <MotionWrapper>
      <div
        className="publication-card-div"
        role="button" // Accessibility improvement
        tabIndex={0} // Make the div focusable
        onClick={() => openPublicationInNewTab(publication.url)}
        onKeyPress={(e) => e.key === 'Enter' && openPublicationInNewTab(publication.url)} // Allow Enter key to trigger the link
        style={{ backgroundColor: theme.headerColor }}
        aria-label={`Open ${publication.name} in a new tab`} // Accessibility improvement
      >
        <div className="publication-name-div">
          <p className="publication-name" style={{ color: theme.text }}>
            {publication.name}
          </p>
        </div>
        <p className="publication-description" style={{ color: theme.text }}>
          {publication.description}
        </p>
        <div className="publication-details">
          <p
            className="publication-creation-date subTitle"
            style={{ color: theme.secondaryText }}
          >
            Published on {publication.createdAt.split("T")[0]}
          </p>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default PublicationCard;
