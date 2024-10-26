import React, { Component } from "react";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
import { skills, pageEnabled } from "../../portfolio"; // Ensure pageEnabled is defined
import SkillCard from "components/cards/skillCard/SkillCard";

interface Theme {
  text: string;
  secondaryText: string;
}

interface SkillSectionProps {
  theme: Theme;
}

// Основний компонент для секції навичок
class SkillSection extends Component<SkillSectionProps> {
  render() {
    const { theme } = this.props;

    // Return null if the skills page is disabled
    if (!pageEnabled.contact) return null;

    return (
      <div className="container" id="skills">
        <MotionWrapper>
          <div className="section skills">
              <h1 className="text-title">Who am I?</h1>
            {skills.data.map((skill) => (
              <SkillCard key={skill.title} skill={skill} theme={theme} />
            ))}
          </div>
        </MotionWrapper>
      </div>
    );
  }
}

export default SkillSection;
