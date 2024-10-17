import React from "react";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
import { greeting, contactPageData } from "../../portfolio";
import SocialMedia from "../../components/layouts/socialMedia/SocialMedia";
import Button from "components/layouts/button/Button";
import "./ContactSection.css";

interface ContactSectionProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}


const ContactSection: React.FC<ContactSectionProps> = ({ theme }) => {
  const contactSection = contactPageData.contactSection;

  return (
    <div className="container">
        <div className="heading-div">
          <div className="section">
            <h1 className="heading-text-div">
              {contactSection.title}
            </h1>
            <h2 className="header-detail-text">
              {contactSection.description}
            </h2>
            <SocialMedia theme={theme}/>
            <Button
                className=".btn"
                text="See My Resume"
                newTab={true}
                href={greeting.resumeLink}
                theme={theme}
              /> 
            </div>
            <div className="contact-heading-img-div">
            <img
              src={require(`../../assets/images/${contactSection.profile_image_path}`)}
              alt="Profile"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '../../assets/images/default_profile.png';
              }}
            />
          </div>
        </div>  
    </div>
  );
};

export default ContactSection;
