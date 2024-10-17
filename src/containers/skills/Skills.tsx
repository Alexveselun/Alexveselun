import React from "react";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
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
    <div className="main" id="skills">
      <div className="skills-header-div">
        <MotionWrapper>
          <h1 className="skills-header" style={{ color: theme.text }}>
            What I Do?
          </h1>
        </MotionWrapper>
      </div>
      <SkillSection theme={theme} />
      <TechStack theme={theme} />
    </div>
  );
};

export default Skills;
