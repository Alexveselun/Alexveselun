import React, { useState, useContext } from "react";
import StyleContext from "../../../contexts/StyleContext";
import "./ToggleSwitch.css";

const ToggleSwitch: React.FC = () => {
  const { isDark, changeTheme } = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
