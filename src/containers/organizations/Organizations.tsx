import React from "react";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
import { openSource } from "../../portfolio";
import OrganizationList from "../../components/media/organizationList/OrganizationList";
import OrganizationsData from "../../shared/opensource/organizations.json";

interface OrganizationsProps {
  theme: {
    text: string;
    secondaryText: string; // Add other theme properties if needed
  };
}

const Organizations: React.FC<OrganizationsProps> = ({ theme }) => {
  // Check if the data is valid and organizations exist
  if (!OrganizationsData.data || !openSource.organisations) {
    return null; // Return null if no data
  }

  return (
    <div className="container">
    <div id="organizations">
      <div className="organizations-header-div">
        <MotionWrapper>
          <h1 className="organizations-header" style={{ color: theme.text }}>
            Contributed Organizations
          </h1>
        </MotionWrapper>
      </div>
      <OrganizationList logos={OrganizationsData.data} />
    </div>
    </div>
  );
};

export default Organizations;
