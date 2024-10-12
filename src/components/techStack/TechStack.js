import React from "react";
import MotionWrapper from "../animations/MotionWrapper";
import { techStack } from "../../portfolio";
import "./TechStack.css";

const TechStack = ({ theme }) => {
  if (!techStack.display) return null;

  return (
    <div className="techMain">
      <MotionWrapper>
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="techstack-heading" style={{ color: theme.text }}>
              {techStack.title}
            </h1>
            {techStack.experience.map((exp) => {
              const progressStyle = {
                width: exp.progressPercentage,
              };
              return (
                <div key={exp.Stack} className="skill"> {/* Use exp.Stack as key if unique */}
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
};

export default TechStack;
