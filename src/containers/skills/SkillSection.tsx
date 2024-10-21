import React, { Component } from "react";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
import { skills } from "../../portfolio";
import FullStackImg from "./FullStackImg";
import TerminalImg from "./TerminalImg";
import DesignImg from "./DesignImg";
import AppDevelopImg from "./AppDevelopImg";
import CloudInfraImg from "./CloudInfraImg";
import DataScienceImg from "./DataScienceImg";
import SoftwareSkills from "../../components/media/skills/SoftwareSkills";
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

// Pass the theme prop to the SkillComponent
const GetSkillSvg: React.FC<{ imageName: string; theme: Theme }> = ({ imageName, theme }) => {
  const SkillComponent = skillImageComponents[imageName] || skillImageComponents.DesignImg;
  return <SkillComponent theme={theme} />;
};

// Основний компонент для секції навичок
class SkillSection extends Component<SkillSectionProps> {
  render() {
    const { theme } = this.props;

    return (
      <div className="container" id="skills">
        <div className="section skills"> 
          <h1 className="title-main">What I Do?</h1>
          {skills.data.map((skill: Skill) => (
            <div className="skills-container" key={skill.title}>
              <div className="heading-text-div">
                <h1 className="heading-text">{skill.title}</h1>
              </div>
              <div className="section-three-components">
                {/* image */}
                <div className="picture">
                  <div className="cont-image">
                    <GetSkillSvg imageName={skill.imageName} theme={theme} /> {/* Pass theme here */}
                  </div>
                </div>  
                {/* skills */}
                {/* <SoftwareSkills logos={skill.softwareSkills} /> */}
                {/* description of skills */}      
                <div className="second-heading-text-div">
                  <MotionWrapper>
                    {skill.skills.map((skillSentence, index) => (
                      <p key={index} className="heading-detail-text">{skillSentence}</p>
                    ))}
                  </MotionWrapper>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SkillSection;
