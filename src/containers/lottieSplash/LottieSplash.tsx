import React from "react";
import { greeting, splashScreen } from "../../portfolio";
import SplashAnimationLottie from "../../components/layouts/animations/AnimationLottie";
import "./LottieSplash.css";


const LottieSplash: React.FC = () => {
  const animData = require(`../../assets/lottie/${splashScreen.animationFile}.json`);
  
  return (
      <div className="splash-container">
        <div className="splash-animation-container">
          <SplashAnimationLottie animationPicture={animData} />
        </div>
        <div className="splash-logo">
          <span className="logo-text">{greeting.logo_name}</span>
        </div>
      </div>
  );
};

export default LottieSplash;
