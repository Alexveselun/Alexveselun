import React from "react";
import MotionWrapper from "../../components/animations/MotionWrapper.js";
import Button from "../../components/button/Button";
import AddressImg from "./AddressImg";
import { contactPageData } from "../../portfolio.js";
import "./AddressSection.css";

const AddressSection = ({ theme }) => { // Destructure theme directly from props
  const { addressSection } = contactPageData; // Destructure addressSection for cleaner access

  return (
    <div className="basic-contact">
      <MotionWrapper>
        <div className="address-heading-div">
          <div className="contact-heading-img-div">
            <AddressImg theme={theme} />
          </div>
          <div className="address-heading-text-div">
            <h1 className="address-heading-text" style={{ color: theme.text }}>
              {addressSection.title} {/* Use dot notation */}
            </h1>
            <p
              className="contact-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {addressSection.subtitle} {/* Use dot notation */}
            </p>
            {/* Conditional rendering for phone section */}
            {addressSection.phone && (
              <>
                <h1 className="address-heading-text" style={{ color: theme.text }}>
                  {addressSection.phone.title}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {addressSection.phone.subtitle}
                </p>
              </>
            )}
            <div className="address-btn-div">
              <Button
                text="Visit on Google Maps"
                newTab={true}
                href={addressSection.location_map_link}
                theme={theme}
              />
            </div>
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
};

export default AddressSection;
