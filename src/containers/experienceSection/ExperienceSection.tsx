import React from "react";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
import ExperienceImg from "./ExperienceImg";
import { experience } from "../../portfolio";
import "./ExperienceSection.css";

// Define the types for the props
interface ExperienceSectionProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}

// Define the type for experience data
interface ExperienceData {
  title: string;
  subtitle: string;
  description: string;
  display: boolean;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ theme }) => {
  const expData = experience as unknown as ExperienceData;

  if (!expData.display) {
    return null;
  }

  return (
    <div className="basic-experience">
      <MotionWrapper>
        <div className="heading-div">
          <div className="experience-heading-img-div">
            <ExperienceImg theme={theme} />
          </div>
          <div className="heading-text-div">
            <h1 className="experience-heading-text" style={{ color: theme.text }}>
              {expData.title}
            </h1>
            <h3 className="experience-heading-sub-text" style={{ color: theme.text }}>
              {expData.subtitle}
            </h3>
            <p className="header-detail-text" style={{ color: theme.secondaryText }}>
              {expData.description}
            </p>
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
};

export default ExperienceSection;
