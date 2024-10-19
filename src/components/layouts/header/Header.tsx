import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { greeting, pageEnabled } from "../../../portfolio";
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
  const link = pageEnabled.splash ? "/splash" : "/home"; // Логіка для логотипа
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // Стан для відкриття/закриття меню

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50); // Зміна класу при скролі
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Логіка для відкриття/закриття меню
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Рендеримо індивідуальні навігаційні посилання на основі pageEnabled
  const MyLink: React.FC<{ name: string; link: string }> = ({ name, link }) => (
    <li className="li">
      <NavLink
        to={link}
        onMouseEnter={(event) => onMouseEnter(event, "#yourColor")} // Колір при наведенні
        onMouseOut={onMouseOut}
      >
        {name}
      </NavLink>
    </li>
  );

  return (
    <>
      <SeoHeader />
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <NavLink to={link} className="logo-name-div">
            <span className="logo-name">{greeting.logo_name}</span>
          </NavLink>
        </div>
        <div className={`header-menu ${menuOpen ? "open" : ""}`}>
         
          <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <input
            type="checkbox"
            className="menu-btn"
            id="menu-btn"
            checked={menuOpen}
            onChange={toggleMenu}
          />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
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
            <ToggleSwitch />
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
