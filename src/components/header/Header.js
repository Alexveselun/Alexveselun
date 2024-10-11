import React from "react";
import { motion } from "framer-motion";
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
  const theme = props.theme;
  const styles = `
    .navic {
      background: ${theme.text};
    }
    .navic:before,
    .navic:after {
      background: ${theme.text};
    }
  `;

  const viewExperience = pageEnabled.experience;
  const viewEducation = pageEnabled.education;
  const viewProjects = pageEnabled.projects;
  const viewopenSource = pageEnabled.opensource;
  const viewHobbbies = pageEnabled.hobbies;
  const viewSplash = pageEnabled.splash;
  const viewBlog = pageEnabled.blog;
  const link = viewSplash ? "/splash" : "/home";

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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
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
            {viewExperience && <MyLink name="Experience" link="/experience" />}
            {viewBlog && <MyLink name="Blog" link="/blog" />}
            {viewEducation && <MyLink name="Education" link="/education" />}
            {viewProjects && <MyLink name="Projects" link="/projects" />}
            {viewopenSource && <MyLink name="IT" link="/opensource" />}
            {viewHobbbies && <MyLink name="Hobbies" link="/hobbies" />}
            <MyLink name="Contact" link="/contact" />
            <li className="li">
              <ToggleSwitch />
            </li>
          </ul>
        </header>
      </div>
    </motion.div>
  );
};

export default Header;
