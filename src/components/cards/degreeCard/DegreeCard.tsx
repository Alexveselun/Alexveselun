import React from "react";
import MotionWrapper from "../../layouts/animations/MotionWrapper";
import "./DegreeCard.css";

interface Degree {
  logo_path: string;
  alt_name: string;
  title: string;
  subtitle: string;
  duration: string;
  descriptions: string[];
  website_link: string;
}

interface DegreeCardProps {
  degree: Degree;
  theme: { headerColor: string; text: string };
}

const DegreeCard: React.FC<DegreeCardProps> = ({ degree, theme }) => {
  return (
    <div className="degree-card">
      <MotionWrapper>
        <div className="degree-card-img">
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              transform: "scale(0.9)",
            }}
            src={require(`../../../assets/images/${degree.logo_path}`)}
            alt={degree.alt_name}
          />
        </div>
      </MotionWrapper>
      <MotionWrapper>
        <div className="card-body">
          <div
            className="body-titler"
            style={{ backgroundColor: theme.headerColor }}
          >
            <div className="title-main">
              <h2 className="card-title" style={{ color: theme.text }}>
                {degree.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: theme.text }}>
                {degree.subtitle}
              </h3>
            </div>
            <div className="body-title-duration">
              <h3 className="duration" style={{ color: theme.text }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div className="body-content">
            {degree.descriptions.map((sentence, index) => (
              <p
                className="content-list"
                style={{ color: theme.text }}
                key={index}
              >
                {sentence}
              </p>
            ))}
            <a
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="btn"
                style={{ backgroundColor: theme.headerColor }}
              >
                <p className="btn-text" style={{ color: theme.text }}>
                  Visit Website
                </p>
              </div>
            </a>
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
};

export default DegreeCard;
