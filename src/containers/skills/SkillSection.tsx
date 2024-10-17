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

// Інтерфейси для теми та навичок
interface Theme {
  text: string;
  secondaryText: string;
}

interface SoftwareSkill {
  skillName: string;
  fontAwesomeClassname: string;
  style: {
    backgroundColor?: string;
    color: string;
  };
}

interface Skill {
  title: string;
  imageName: string;
  softwareSkills: SoftwareSkill[];
  skills: string[];
}

interface SkillSectionProps {
  theme: Theme;
}

const skillImageComponents: Record<string, React.FC<{ theme: Theme }>> = {
  TerminalImg,
  FullStackImg,
  AppDevelopImg,
  CloudInfraImg,
  DataScienceImg,
  DesignImg,
};

const GetSkillSvg: React.FC<{ imageName: string; theme: Theme }> = ({ imageName, theme }) => {
  const SkillComponent = skillImageComponents[imageName] || skillImageComponents.DesignImg;
  return <SkillComponent theme={theme} />;
};

// Основний компонент для секції навичок
class SkillSection extends Component<SkillSectionProps> {
  render() {
    const { theme } = this.props;

    return (
      <div className="skills-main-div"> 
        {skills.data.map((skill: Skill) => (
          <div className="skills-container" key={skill.title}>
              <div className="skills-image-div">
                <GetSkillSvg imageName={skill.imageName} theme={theme} />
              </div>
                <h1 className="title-main">
                  {skill.title}
                </h1>
                <SoftwareSkills logos={skill.softwareSkills} />
              <MotionWrapper>
                <div>
                  {skill.skills.map((skillSentence, index) => (
                    <p
                      key={index}
                      className="subTitle skills-text"
                      style={{ color: theme.secondaryText }}
                    >
                      {skillSentence}
                    </p>
                  ))}
                </div>
              </MotionWrapper>
          </div>
        ))}
      </div>
    );
  }
}

export default SkillSection;
