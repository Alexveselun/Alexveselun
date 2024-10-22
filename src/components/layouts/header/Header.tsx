import React, { useEffect, useState, useRef } from "react";
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
  const menuRef = useRef<HTMLDivElement>(null); // Створюємо реф для меню

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50); // Зміна класу при скролі
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Закриваємо меню при кліку поза його межами
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false); // Закриваємо меню, якщо клік поза його межами
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

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
      <header className={`header ${isScrolled ? "scrolled" : ""}`} ref={menuRef}>
        <div className={`header-menu-div ${menuOpen ? "open" : ""}`}>
          <ul className={`menu ${menuOpen ? "open" : ""}`}>
            {/* header-menu-button */}
            <div className="header-menu-button-div">
              <input
              type="checkbox"
              className="header-menu-btn"
              id="header-menu-btn"
              checked={menuOpen}
              onChange={toggleMenu}
              />
              <label className="header-menu-btn-icon" htmlFor="header-menu-btn">
                <span className="navicon"></span>
              </label>
            </div>

            {/* header-logo */}
            <div className="logo-div">
              <div className="logo">
                <NavLink to={link}>
                  <span className="logo-name">{greeting.logo_name}</span>
                </NavLink>
              </div>
            </div>

            {/* header-items */}
            <div className="header-items-div">
              <MyLink name="Home" link="/home" />
              {pageEnabled.experience && (
              <MyLink name="Experience" link="/experience" />
              )}
              {pageEnabled.blog && <MyLink name="Gallery" link="/gallery" />}
              {pageEnabled.projects && (
              <MyLink name="Projects" link="/projects" />
              )}
              {pageEnabled.opensource && <MyLink name="IT" link="/opensource" />}
              {pageEnabled.hobbies && <MyLink name="Hobbies" link="/hobbies" />}
              {pageEnabled.newhome && <MyLink name="NewHome" link="/newhome" />}
              <MyLink name="Contact" link="/contact" />
              <ToggleSwitch />
            </div>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
