import React from "react";
import MotionWrapper from "../animations/MotionWrapper";
import { greeting } from "../../../portfolio";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer-div">
      <MotionWrapper>
        <p className="footer-text">
          Made with <span role="img" aria-label="Heart">❤️</span> by {greeting.title}
        </p>
        <br />
      </MotionWrapper>
    </div>
  );
};

export default Footer;
