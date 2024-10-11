import React from "react";
import MotionWrapper from "../animations/MotionWrapper";
import { techStack } from "../../portfolio";
import "./TechStack.css";

const TechStack = (props) => {
  const theme = props.theme;
  if (techStack.display) {
    return (
      <div className="techMain">
        <MotionWrapper>
          <div className="skills-container">
            <div className="skills-bar">
              <h1 className="techstack-heading" style={{ color: theme.text }}>
                {techStack.title}
              </h1>
              {techStack.experience.map((exp, i) => {
                const progressStyle = {
                  width: exp.progressPercentage,
                };
                return (
                  <div key={i} className="skill">
                    <MotionWrapper>
                      <p style={{ color: theme.secondaryText }}>{exp.Stack}</p>
                    </MotionWrapper>
                    <MotionWrapper>
                      <div className="meter">
                        <span style={progressStyle}></span>
                      </div>
                    </MotionWrapper>
                  </div>
                );
              })}
            </div>
          </div>
        </MotionWrapper>
      </div>
    );
  }
  return null;
};
export default TechStack;
