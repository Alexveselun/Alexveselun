import React, { useState, useContext } from "react";
import StyleContext from "../../../contexts/StyleContext";
import "./ToggleSwitch.css";

const ToggleSwitch: React.FC = () => {
  const { isDark, toggleTheme } = useContext(StyleContext) || {};
  const [isChecked, setChecked] = useState(isDark);

  if (toggleTheme === undefined) {
    return null; 
  }

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          toggleTheme();
          setChecked(!isChecked);
        }}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
