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

const skillImageComponents = {
  TerminalImg: TerminalImg,
  FullStackImg: FullStackImg,
  AppDevelopImg: AppDevelopImg,
  CloudInfraImg: CloudInfraImg,
  DataScienceImg: DataScienceImg,
  DesignImg: DesignImg,
};

function GetSkillSvg({ imageName, theme }) {
  const SkillComponent = skillImageComponents[imageName] || skillImageComponents.DesignImg;
  return <SkillComponent theme={theme} />;
}

class SkillSection extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div>
        {skills.data.map((skill) => (
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
