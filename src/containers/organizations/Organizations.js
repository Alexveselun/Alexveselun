import React from "react";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
import { openSource } from "../../portfolio";
import OrganizationList from "../../components/media/organizationList/OrganizationList";
import OrganizationsData from "../../shared/opensource/organizations";
import "./Organizations.css";

const Organizations = (props) => {
  const theme = props.theme;

  // Check if the data is valid and organizations exist
  if (!OrganizationsData.data || !openSource.organizations) {
    return null; // Return null if no data
  }

  return (
    <div id="organizations">
      <div className="organizations-header-div">
        <MotionWrapper>
          <h1 className="organizations-header" style={{ color: theme.text }}>
            Contributed Organizations
          </h1>
        </MotionWrapper>
      </div>
      <OrganizationList logos={OrganizationsData["data"]} />
    </div>
  );
};

export default Organizations;
