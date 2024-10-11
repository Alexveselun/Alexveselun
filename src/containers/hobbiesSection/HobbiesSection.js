import React from "react";
import MotionWrapper from "../../components/animations/MotionWrapper";
import { hobbies, pageEnabled } from "../../portfolio";
import "./HobbiesSection.css";

const HobbiesSection = (props) => {
  const theme = props.theme;
  if (!pageEnabled.hobbies) {
    return null;
  }
  return (
    <div className="basic-hobbies">
      <MotionWrapper>
        <div className="hobbies-heading-div">
          <div className="hobbies-heading-text-div">
            <h1 className="hobbies-heading-text" style={{ color: theme.text }}>
              {hobbies.title}
            </h1>
            <h2
              className="hobbies-subTitle"
              style={{ color: theme.secondaryText }}
            >
              {hobbies.subTitle}
            </h2>
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
};

export default HobbiesSection;
