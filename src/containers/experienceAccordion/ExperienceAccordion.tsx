import React from "react";
import { Accordion, Panel } from "baseui/accordion";
import ExperienceCard from "../../components/cards/experienceCard/ExperienceCard";
import "./ExperienceAccordion.css";

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

interface Section {
  title: string;
  experiences: Experience[];
}

interface ExperienceAccordionProps {
  theme: {
    jacketColor: string;
    headerColor: string;
    body: string;
    text: string;           // Added this line
    dark: string;           // Added this line
    secondaryText: string;  // Added this line
  };
  sections: Section[];
}

const ExperienceAccordion: React.FC<ExperienceAccordionProps> = ({ theme, sections }) => {
  return (
    <div className="experience-accord">
      <Accordion>
        {sections.map((section) => (
          <Panel
            title={section.title}
            key={section.title}
          >
            {section.experiences.map((experience) => (
              <ExperienceCard
                experience={experience}
                theme={theme}
                key={experience.title}
              />
            ))}
          </Panel>
        ))}
      </Accordion>
    </div>
  );
};

export default ExperienceAccordion;
