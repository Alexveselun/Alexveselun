import React from "react";
import MotionWrapper from "../../layouts/animations/MotionWrapper";
import { techStack } from "../../../portfolio";
import "./TechStack.css";

// Інтерфейси для пропсів та даних
interface Theme {
  text: string;
  secondaryText: string;
}

interface Experience {
  Stack: string;
  progressPercentage: string;
}

interface TechStackProps {
  theme: Theme;
}

const TechStack: React.FC<TechStackProps> = ({ theme }) => {
  if (!techStack.display) return null;

  return (
    <div className="container">
        <div className="section">
        <MotionWrapper>
          <div className="section bar-skills">
            <div className="heading-text-div">
              <h1 className="text-second-title">
                {techStack.title}
              </h1>
            </div>
            {techStack.experience.map((exp: Experience) => {
              const progressStyle = {
                width: exp.progressPercentage,
              };
              return (
                <div key={exp.Stack} className="bar-skill">
                  <MotionWrapper>
                    <p className="text-detail left">{exp.Stack}</p>
                  </MotionWrapper>
                  <MotionWrapper>
                    <div className="bar-meter">
                      <span style={progressStyle}></span>
                    </div>
                  </MotionWrapper>
                </div>
              );
            })}
          </div>
        </MotionWrapper>
        </div>
    </div>
  );
};

export default TechStack;
