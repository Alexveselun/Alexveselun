import React from "react";
import TechStack from "../../components/media/techStack/TechStack";
import SkillSection from "./SkillSection";
import "./Skills.css";

interface SkillsProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}

const Skills: React.FC<SkillsProps> = ({ theme }) => {
  return (
    <div className="skills-main" id="skills">
          <h1 className="title-main">
            What I Do?
          </h1>
      <SkillSection theme={theme} />
      <TechStack theme={theme} />
    </div>
  );
};

export default Skills;
