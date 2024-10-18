import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import MotionWrapper from "../../layouts/animations/MotionWrapper";
import "./OrganizationList.css";

// Інтерфейс для опису логотипів організацій
interface Logo {
  login: string;
  avatarUrl: string;
}

interface OrganizationListProps {
  logos: Logo[];
}

const OrganizationList: React.FC<OrganizationListProps> = ({ logos }) => {
  return (
    <div className="organizations-main-div">
      <ul className="dev-icons-orgs">
        {logos.map((logo) => (
          <OverlayTrigger
            key={logo.login}
            placement="top"
            overlay={
              <Tooltip id={`tooltip-${logo.login}`}>
                <strong>{logo.login}</strong>
              </Tooltip>
            }
          >
            <li className="organizations-inline" data-login={logo.login}>
              <MotionWrapper>
                <img
                  className="organizations-img"
                  src={logo.avatarUrl}
                  alt={logo.login}
                />
              </MotionWrapper>
            </li>
          </OverlayTrigger>
        ))}
      </ul>
    </div>
  );
};

export default OrganizationList;
