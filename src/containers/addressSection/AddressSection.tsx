import React from "react";
import Button from "../../components/layouts/button/Button";
import AddressImg from "./AddressImg";
import { contactPageData } from "../../portfolio.js";
import "./AddressSection.css";
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
      <div className="heading-div">
      <div className="cont-image">
        <AddressImg theme={theme} />
      </div>
      <div className="section">
        <div className="column">
          <div className="heading-text-div">
            <h1 className="heading-text">{addressSection.title}</h1>
            <p className="header-detail-text">{addressSection.subtitle}</p>
            {addressSection.phone && (
            <>
            <h1 className="heading-text">{addressSection.phone.title}</h1>
            <p className="header-detail-text">{addressSection.phone.subtitle}</p>
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
