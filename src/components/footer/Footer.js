import React from "react";
import MotionWrapper from "../animations/MotionWrapper.js";
import { greeting } from "../../portfolio.js";
import "./Footer.css";

const Footer = ({ theme }) => {
  return (
    <div className="footer-div" style={{ backgroundColor: theme.body }}>
      <MotionWrapper>
        <p className="footer-text" style={{ color: theme.secondaryText }}>
          Made with <span role="img" aria-label="Heart">❤️</span> by {greeting.title}
        </p>
        <br />
      </MotionWrapper>
    </div>
  );
};

export default Footer;
