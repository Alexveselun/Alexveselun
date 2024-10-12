import React from "react";
import MotionWrapper from "../../components/animations/MotionWrapper.js";
import { publications } from "../../portfolio.js";
import PublicationCard from "../../components/publicationCard/PublicationCard";
import "./Publications.css";

const Publications = ({ theme }) => { // Destructure theme directly from props
  const { display, title, description, publications: pubData } = publications;

  if (!display) {
    return null;
  }

  return (
    <div>
      <div className="basic-projects">
        <MotionWrapper>
          <div className="publications-heading-div">
            <div className="publications-heading-text-div">
              <h1 className="publications-heading-text" style={{ color: theme.text }}>
                {title}
              </h1>
              <p className="projects-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                {description}
              </p>
            </div>
          </div>
        </MotionWrapper>
      </div>
      <div className="repo-cards-div-main">
        {pubData.data.length > 0 ? (
          pubData.data.map((pubs) => {
            if (!pubs.name || pubs.name.length === 0) {
              return null;
            }

            return (
              <PublicationCard
                publication={pubs}
                theme={theme}
                key={pubs.id || pubs.title} // Use a unique identifier if available
              />
            );
          })
        ) : (
          <p style={{ color: theme.secondaryText }}>No publications available.</p> // Fallback message
        )}
      </div>
    </div>
  );
};

export default Publications;
