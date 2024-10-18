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
      <div className="greet-main" id="greeting">
        <MotionWrapper>
        <div className="greeting-main">
          <div className="greeting-left-div">
            <div>
              <h1 className="heading-text-div">
                {greeting.title}
              </h1>
              {greeting.nickname !== null && (
                <h2 className="heading-text-dive">
                  {greeting.nickname}
                </h2>
              )}
              <h3 className="header-detail-text">
                {greeting.subTitle}
              </h3>
            </div>
            <Button
                  text="⭐ Contact me"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="btn"
                />
          </div>
          <div className="greeting-right-div">
            <img
              alt="main-photo"
              src={require("../../assets/images/main-photo-home.png")}
              className="greeting-image"
            />
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
};

export default Greeting;
