import React from "react";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
import { experience } from "../../portfolio";
import "./ExperienceSection.css";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion";

// Визначення типів для props
interface ExperienceSectionProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}

// Визначення типу для даних досвіду
interface ExperienceData {
  title: string;
  subtitle: string;
  description: string;
  display: boolean;
  sections: Section[]; // Додано для секцій
}

interface Section {
  title: string;
  experiences: Experience[];
}

interface Experience {
  title: string;
  company: string;
  company_url: string;
  logo_path: string;
  duration: string;
  location: string;
  description: string;
  color: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ theme }) => {
  const expData = experience as unknown as ExperienceData;

  if (!expData.display) {
    return null;
  }

  return (
    <div className="basic-experience">
      <MotionWrapper>
        <div className="section-two-components">
          <div className="heading-img-div">
          </div>
          <div className="heading-text-div">
            <h1 className="text-second-title">{expData.title}</h1>
            <h2 className="text-subtitle">{expData.subtitle}</h2>
            <p className="text-detail">{expData.description}</p>
          </div>
        </div>
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />
      </MotionWrapper>
    </div>
  );
};

export default ExperienceSection;
