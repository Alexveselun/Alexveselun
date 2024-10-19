import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./SoftwareSkills.css";

// Інтерфейс для опису структури логотипів навичок
interface Logo {
  skillName: string;
  fontAwesomeClassname: string;
  style?: React.CSSProperties; // Стилі для індивідуальних логотипів
}

interface SoftwareSkillsProps {
  logos: Logo[];
}

const SoftwareSkills: React.FC<SoftwareSkillsProps> = ({ logos }) => {
  return (
    <div className="software-skills">
        <div className="dev-icons">
          {logos.map((logo) => (
            <OverlayTrigger
              key={logo.skillName}
              placement="top"
              overlay={
                <Tooltip id={`tooltip-${logo.skillName}`}>
                  <strong>{logo.skillName}</strong>
                </Tooltip>
              }
            >
              <li className="software-skill-inline" data-skill-name={logo.skillName}>
                <span
                  className="iconify"
                  data-icon={logo.fontAwesomeClassname}
                  style={logo.style}
                  data-inline="false"
                ></span>
              </li>
            </OverlayTrigger>
          ))}
      </div>
    </div>
  );
};

export default SoftwareSkills;
