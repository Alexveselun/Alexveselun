import React from "react";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
import { competitiveSites } from "../../portfolio";
import EducationImg from "./EducationImg";
import CompetitiveSites from "../../containers/competitiveSites/CompetitiveSites";
import "./EducationSection.css";

const EducationSection = (props) => {
  const theme = props.theme;
  return (
    <div className="basic-education">
      <MotionWrapper>
        <div className="heading-div">
          <div className="heading-img-div">
            {/* <img
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
            <EducationImg theme={theme} />
          </div>
          <div className="heading-text-div">
            <h1 className="heading-text" style={{ color: theme.text }}>
              Education
            </h1>
            {competitiveSites.display && <CompetitiveSites theme={theme} />}
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
};

export default EducationSection;
