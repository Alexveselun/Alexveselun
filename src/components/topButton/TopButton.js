import React, { useEffect, useRef, useState } from "react";
import "./TopButton.css";

const TopButton = (props) => {
  const { theme } = props;
  const buttonRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const GoUpEvent = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const scrollFunction = () => {
    setIsVisible(
      document.body.scrollTop > 30 || document.documentElement.scrollTop > 30
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <div
      onClick={GoUpEvent}
      className={`topButton ${isVisible ? 'visible' : 'hidden'}`}
      ref={buttonRef}
      style={{
        color: theme.body,
        backgroundColor: theme.text,
        border: `solid 1px ${theme.text}`,
      }}
      title="Go up"
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up" aria-hidden="true" />
    </div>
  );
};

export default TopButton;
