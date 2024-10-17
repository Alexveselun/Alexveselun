import React from "react";
import "./Button.css";

interface ButtonProps {
  text: string;
  className: string;
  href: string;
  newTab: boolean;
  theme: {
    text: string;
    secondaryText: string;
  };
}

const onMouseEnter = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  color: string,
  bgColor: string
) => {
  const el = event.currentTarget;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const onMouseOut = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  color: string,
  bgColor: string
) => {
  const el = event.currentTarget;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const Button: React.FC<ButtonProps> = ({ text, className, href, newTab, theme }) => {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : undefined} // security best practice for new tabs
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
