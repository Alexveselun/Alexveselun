import React from "react";
import MotionWrapper from "../animations/MotionWrapper.js";
import { NavLink } from "react-router-dom";
import { greeting, pageEnabled } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";
import "./Header.css";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
  el.style.borderRadius = "5%";
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

const Header = (props) => {
  const { theme } = props;  // Destructure theme for better readability
  const styles = `
    .navic {
      background: ${theme.text};
    }
    .navic:before,
    .navic:after {
      background: ${theme.text};
    }
  `;

  const link = pageEnabled.splash ? "/splash" : "/home"; // Logic for determining the logo link

  // Render individual navigation links based on pageEnabled settings
  const MyLink = ({ name, link }) => (
    <li className="li">
      <NavLink
        to={link}
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          color: theme.text,
        })}
        onMouseEnter={(event) => onMouseEnter(event, theme.jacketColor)}
        onMouseOut={onMouseOut}
      >
        {name}
      </NavLink>
    </li>
  );

  return (
    <MotionWrapper>
      <SeoHeader />
      <div>
        <style>{styles}</style>
        <header className="header">
          <NavLink to={link} className="logo">
            <span style={{ color: theme.text }}> &lt;</span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}>/&gt;</span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon navic"></span>
          </label>
          <ul className="menu">
            <MyLink name="Home" link="/home" />
            {pageEnabled.experience && <MyLink name="Experience" link="/experience" />}
            {pageEnabled.blog && <MyLink name="Blog" link="/blog" />}
            {pageEnabled.education && <MyLink name="Education" link="/education" />}
            {pageEnabled.projects && <MyLink name="Projects" link="/projects" />}
            {pageEnabled.opensource && <MyLink name="IT" link="/opensource" />}
            {pageEnabled.hobbies && <MyLink name="Hobbies" link="/hobbies" />}
            <MyLink name="Contact" link="/contact" />
            <li className="li">
              <ToggleSwitch />
            </li>
          </ul>
        </header>
      </div>
    </MotionWrapper>
  );
};

export default Header;
