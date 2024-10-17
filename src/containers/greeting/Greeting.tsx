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
              <h1 className="greeting-text">
                {greeting.title}
              </h1>
              {greeting.nickname !== null && (
                <h2 className="greeting-nickname">
                  {greeting.nickname}
                </h2>
              )}
              <p className="greeting-text-p subTitle">
                {greeting.subTitle}
              </p>
              <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Contact me"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
            </div>
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
