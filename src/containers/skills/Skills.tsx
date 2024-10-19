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

      <>
      <SkillSection theme={theme} /><TechStack theme={theme} /></>
  );
};

export default Skills;
