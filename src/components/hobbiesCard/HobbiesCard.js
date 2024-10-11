import React from "react";
import { hobbies } from "../../portfolio";
import MotionWrapper from "../animations/MotionWrapper";
import "./HobbiesCard.css";

const HobbiesCard = (props) => {
  const theme = props.theme;
  return (
    <div className="hobbies-card">
      <MotionWrapper>
        <div className="hobbies-card-body-div">
          {hobbies.hobbies.map((hobbiesdata) => {
            return (
              <div className="hobbies-data" key={hobbiesdata.title}>
                <div className="hobbies-heading">
                  <MotionWrapper>
                    <div
                      className="hobbies-card-title"
                      style={{ color: theme.text }}
                    >
                      {hobbiesdata.title}
                    </div>
                    <div
                      className="hobbies-card-subtitle"
                      style={{ color: theme.secondaryText }}
                    >
                      {hobbiesdata.description}
                    </div>
                  </MotionWrapper>
                </div>
                <MotionWrapper>
                  <div className="hobbies-card-img">
                    <img
                      className="hobbies-image"
                      src={require(`../../assets/images/${hobbiesdata["image_path"]}`)}
                      alt={hobbiesdata.title}
                    />
                  </div>
                </MotionWrapper>
              </div>
            );
          })}
        </div>
      </MotionWrapper>
    </div>
  );
};

export default HobbiesCard;
