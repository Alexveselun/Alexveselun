import React from "react";
import MotionWrapper from "../../components/animations/MotionWrapper";

import { greeting, contactPageData } from "../../portfolio.js";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import "./ContactSection.css";

const ContactSection = ({ theme }) => { // Destructure theme directly from props
  const contactSection = contactPageData.contactSection;

  return (
    <div className="basic-contact">
      <MotionWrapper>
        <div className="contact-heading-div">
          <div className="contact-heading-text-div">
            <h1 className="contact-heading-text" style={{ color: theme.text }}>
              {contactSection.title} {/* Use dot notation */}
            </h1>
            <p
              className="contact-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {contactSection.description} {/* Use dot notation */}
            </p>
            <SocialMedia theme={theme} />
            <div className="resume-btn-div">
              <Button
                text="See My Resume"
                newTab={true}
                href={greeting.resumeLink}
                theme={theme}
              />
            </div>
          </div>
          <div className="contact-heading-img-div">
            <img
              src={require(`../../assets/images/${contactSection.profile_image_path}`)} // Use dot notation
              alt="Profile"
              onError={(e) => { e.target.onerror = null; e.target.src = '../../assets/images/default_profile.png'; }} // Default image on error
            />
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
};

export default ContactSection;
