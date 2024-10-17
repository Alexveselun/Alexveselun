import React from "react";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper.js";
import ExperienceImg from "./ExperienceImg";
import { experience } from "../../portfolio.js";
import "./ExperienceSection.css";

const ExperienceSection = (props) => {
  const theme = props.theme;
  const viewDegree = experience.display;
  if (!viewDegree) {
    return null;
  }
  return (
    <div className="basic-experience">
      <MotionWrapper>
        <div className="heading-div">
          <div className="experience-heading-img-div">
            {/* <img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
									alt=""
								/> */}
            <ExperienceImg theme={theme} />
          </div>
          <div className="heading-text-div">
            <h1
              className="experience-heading-text"
              style={{ color: theme.text }}
            >
              {experience.title}
            </h1>
            <h3
              className="experience-heading-sub-text"
              style={{ color: theme.text }}
            >
              {experience["subtitle"]}
            </h3>
            <p
              className="header-detail-text"
              style={{ color: theme.secondaryText }}
            >
              {experience["description"]}
            </p>
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
};

export default ExperienceSection;
