import React from "react";
import "./ExperienceCard.css";

interface Experience {
  color: string;
  logo_path: string;
  title: string;
  company_url: string;
  company: string;
  duration: string;
  location: string;
  description: string;
}

interface ExperienceCardProps {
  theme: {
    text: string;
    secondaryText: string;
  };
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ theme, experience }) => {
  return (
    <div
      className="experience-card"
      style={{
        border: `1px solid ${experience.color}`,
      }}
    >
      <div className="experience-card-logo-div">
        <img
          className="experience-card-logo"
          src={require(`../../../assets/images/${experience.logo_path}`)}
          alt=""
        />
      </div>
      <div className="experience-card-body-div">
        <div className="experience-card-title-div">
          <div className="experience-card-heading-left">
            <h3 className="experience-card-title">
              {experience.title}
            </h3>
            <p className="experience-card-company" >
              <a
                href={experience.company_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience.company}
              </a>
            </p>
          </div>
          <div className="experience-card-heading-right">
            <p className="experience-card-duration">
              {experience.duration}
            </p>
            <p className="experience-card-location" >
              {experience.location}
            </p>
          </div>
        </div>
        <p className="experience-card-description" style={{ color: theme.text }}>
          {experience.description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
