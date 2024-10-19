import React from "react";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
import { greeting } from "../../portfolio";
import Button from "../../components/layouts/button/Button";
import "./Greeting.css";

interface GreetingProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}

const Greeting: React.FC<GreetingProps> = ({ theme }) => {
  return (
    <div className="container">
      <MotionWrapper>
      <div className="heading-div">
      <div className="section">
        <div className="greeting-left-div">
          <div className="heading-text-div">
            <h1 className="heading-text">{greeting.title}</h1>
            {greeting.nickname !== null && (
                <h2 className="heading-text-dive">
                  {greeting.nickname}
                </h2>
              )}
            <h3 className="header-detail-text">
                {greeting.subTitle}
            </h3>
            <Button
                  text="⭐ Contact me"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="btn"
                />
            </div>
          </div>
        </div>
        <div className="cont-image">
        <img
              alt="main-photo"
              src={require("../../assets/images/main-photo-home.png")}
              className="cont-image"
          />
      </div>
      </div>
      </MotionWrapper>
    </div>
  );
};


export default Greeting;
