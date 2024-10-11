import React from "react";
import MotionWrapper from "../animations/MotionWrapper.js";
import { greeting } from "../../portfolio.js";
import "./Footer.css";
/* eslint-disable jsx-a11y/accessible-emoji */

const Footer = (props) => {
  const theme = props.theme;
  return (
    <div className="footer-div" style={{ backgroundColor: theme.body }}>
      <MotionWrapper>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by {greeting.title}
        </p>
        <br />
      </MotionWrapper>
    </div>
  );
};

export default Footer;
