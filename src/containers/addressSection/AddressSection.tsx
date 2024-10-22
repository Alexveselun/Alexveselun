import React from "react";
import Button from "../../components/layouts/button/Button";
import { contactPageData } from "../../portfolio.js";
import MotionWrapper from "components/layouts/animations/MotionWrapper";

interface PhoneSection {
  title: string;
  subtitle: string;
}

interface AddressSectionData {
  title: string;
  subtitle: string;
  phone?: PhoneSection; // Optional property
  location_map_link: string;
}

interface ContactPageData {
  addressSection: AddressSectionData;
}

interface AddressSectionProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}

const AddressSection: React.FC<AddressSectionProps> = ({ theme }) => {
  const { addressSection } = contactPageData as ContactPageData;

  return (
    <div className="container">
      <MotionWrapper>
      <div className="section-two-components">
      {/* <div className="picture"> */}
      {/* <div className="cont-image">
        <AddressImg theme={theme} />
      </div> */}
        {/* </div> */}
      <div className="section">
        <div className="column">
          <div className="heading-text-div">
            <h1 className="text-second-title">{addressSection.title}</h1>
            <p className="text-detail">{addressSection.subtitle}</p>
            {addressSection.phone && (
            <>
            <h1 className="text-second-title">{addressSection.phone.title}</h1>
            <p className="text-detail">{addressSection.phone.subtitle}</p>
            </>
            )}
            <Button
              text="Visit on Google Maps"
              newTab={true}
              href={addressSection.location_map_link}
              theme={theme}
              className="btn"
              />
            </div>
          </div>
        </div>
        </div>
      </MotionWrapper>
    </div>
  );
};

export default AddressSection;
