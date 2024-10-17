import React, { Component } from "react";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
import { skills } from "../../portfolio";
import FullStackImg from "./FullStackImg";
import TerminalImg from "./TerminalImg";
import DesignImg from "./DesignImg";
import AppDevelopImg from "./AppDevelopImg";
import CloudInfraImg from "./CloudInfraImg";
import DataScienceImg from "./DataScienceImg";
import SoftwareSkills from "../../components/media/softwareSkills/SoftwareSkills";
import "./Skills.css";

// Define the Theme interface
interface Theme {
  text: string;
  secondaryText: string;
}

// Define the SoftwareSkill interface to match the data structure
interface SoftwareSkill {
  skillName: string;
  fontAwesomeClassname: string;
  style: {
    backgroundColor?: string;
    color: string;
  };
}

// Update the Skill interface to match the portfolio structure
interface Skill {
  title: string;
  imageName: string;
  softwareSkills: SoftwareSkill[]; // Updated to match the structure
  skills: string[];
}

// Define the SkillSectionProps interface
interface SkillSectionProps {
  theme: Theme;
}

// Skill image components mapping
const skillImageComponents: Record<string, React.FC<{ theme: Theme }>> = {
  TerminalImg,
  FullStackImg,
  AppDevelopImg,
  CloudInfraImg,
  DataScienceImg,
  DesignImg,
};

// Functional component to get the skill SVG
function GetSkillSvg({ imageName, theme }: { imageName: string; theme: Theme }) {
  const SkillComponent = skillImageComponents[imageName] || skillImageComponents.DesignImg;
  return <SkillComponent theme={theme} />;
}

// Class component for SkillSection
class SkillSection extends Component<SkillSectionProps> {
  render() {
    const { theme } = this.props;

    return (
      <div>
        {skills.data.map((skill: Skill) => (
          <div className="skills-main-div" key={skill.title}>
            <MotionWrapper>
              <div className="skills-image-div">
                <GetSkillSvg imageName={skill.imageName} theme={theme} />
              </div>
            </MotionWrapper>

            <div className="skills-text-div">
              <MotionWrapper>
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title}
                </h1>
              </MotionWrapper>
              <MotionWrapper>
                <SoftwareSkills logos={skill.softwareSkills} />
              </MotionWrapper>
              <MotionWrapper>
                <div>
                  {skill.skills.map((skillSentence, index) => (
                    <p
                      key={index} // Use index as key if skillSentence doesn't have a unique value
                      className="subTitle skills-text"
                      style={{ color: theme.secondaryText }}
                    >
                      {skillSentence}
                    </p>
                  ))}
                </div>
              </MotionWrapper>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default SkillSection;
