import React from "react";
import { NavLink } from "react-router-dom";
import { greeting, pageEnabled } from "../../../portfolio";
import MotionWrapper from "../animations/MotionWrapper";
import SeoHeader from "./seoHeader/SeoHeader";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";
import "./Header.css";

const onMouseEnter = (event: React.MouseEvent<HTMLElement>, color: string) => {
  const el = event.currentTarget;
  el.style.backgroundColor = color;
  el.style.borderRadius = "5%";
};

const onMouseOut = (event: React.MouseEvent<HTMLElement>) => {
  const el = event.currentTarget;
  el.style.backgroundColor = "transparent";
};

const Header: React.FC = () => {
  const link = pageEnabled.splash ? "/splash" : "/home"; // Logic for determining the logo link

  // Render individual navigation links based on pageEnabled settings
  const MyLink: React.FC<{ name: string; link: string }> = ({ name, link }) => (
    <li className="li">
      <NavLink
        to={link}
        onMouseEnter={(event) => onMouseEnter(event, "#yourColor")} // Provide a color for hover effect
        onMouseOut={onMouseOut}
      >
        {name}
      </NavLink>
    </li>
  );

  return (
    <>
      <SeoHeader />
      <header className="header">
        <MotionWrapper>
            <NavLink to={link} className="logo">
              <span className="logo-name">{greeting.logo_name}</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon navic"></span>
            </label>
            <ul className="menu">
              <MyLink name="Home" link="/home" />
              {pageEnabled.experience && (
                <MyLink name="Experience" link="/experience" />
              )}
              {pageEnabled.blog && <MyLink name="Blog" link="/blog" />}
              {pageEnabled.projects && (
                <MyLink name="Projects" link="/projects" />
              )}
              {pageEnabled.opensource && <MyLink name="IT" link="/opensource" />}
              {pageEnabled.hobbies && <MyLink name="Hobbies" link="/hobbies" />}
              {pageEnabled.newhome && <MyLink name="NewHome" link="/newhome" />}
              <MyLink name="Contact" link="/contact" />
              <li className="li">
                <ToggleSwitch />
              </li>
            </ul>
        </MotionWrapper>
      </header>
    </>
  );
};

export default Header;
