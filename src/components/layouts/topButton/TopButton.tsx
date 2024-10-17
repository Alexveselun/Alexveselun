import React, { useEffect, useRef, useState } from "react";
import "./TopButton.css";

const TopButton: React.FC = () => {
  const buttonRef = useRef<HTMLDivElement>(null); // Specify the type for useRef
  const [isVisible, setIsVisible] = useState<boolean>(false); // Explicitly set the type for useState

  const goUpEvent = () => {
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
      onClick={goUpEvent}
      className={`topButton-${isVisible ? 'visible' : 'hidden'}`}
      ref={buttonRef}
      title="Go up"
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up" aria-hidden="true" />
    </div>
  );
};

export default TopButton;
