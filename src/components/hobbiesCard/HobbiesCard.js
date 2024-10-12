import React from "react";
import { hobbies } from "../../portfolio";
import MotionWrapper from "../animations/MotionWrapper";
import "./HobbiesCard.css";

const HobbiesCard = ({ theme }) => { // Destructure theme directly from props
  return (
    <div className="hobbies-card">
      <MotionWrapper>
        <div className="hobbies-card-body-div">
          {hobbies.hobbies.map(({ title, description, image_path }, index) => ( // Destructure hobbies data
            <div className="hobbies-data" key={index}> {/* Use index as key */}
              <div className="hobbies-heading">
                <MotionWrapper>
                  <div className="hobbies-card-title" style={{ color: theme.text }}>
                    {title}
                  </div>
                  <div className="hobbies-card-subtitle" style={{ color: theme.secondaryText }}>
                    {description}
                  </div>
                </MotionWrapper>
              </div>
              <MotionWrapper>
                <div className="hobbies-card-img">
                  <img
                    className="hobbies-image"
                    src={require(`../../assets/images/${image_path}`)} // Dynamic import
                    alt={title}
                  />
                </div>
              </MotionWrapper>
            </div>
          ))}
        </div>
      </MotionWrapper>
    </div>
  );
};

export default HobbiesCard;
