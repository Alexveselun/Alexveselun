import React from "react";
import MotionWrapper from "../animations/MotionWrapper";
import "./PublicationCard.css";

const PublicationCard = (props) => {
  const { theme, publication } = props;
  function openpublicationinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <MotionWrapper>
      <div
        className="publication-card-div"
        key={publication.id}
        onClick={() => openpublicationinNewTab(publication.url)}
        style={{ backgroundColor: theme.headerColor }}
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
