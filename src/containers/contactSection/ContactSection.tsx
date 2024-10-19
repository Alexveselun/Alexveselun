import React from "react";
import { greeting, contactPageData } from "../../portfolio";
import SocialMedia from "../../components/layouts/socialMedia/SocialMedia";
import Button from "components/layouts/button/Button";
import "./ContactSection.css";
import MotionWrapper from "components/layouts/animations/MotionWrapper";

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
      <MotionWrapper>
        <div className="heading-div">
          <div className="section">

            <div className="heading-text-div">
              <h1 className="heading-text">
                {contactSection.title}
              </h1>
              <p className="heading-detail-text">
                {contactSection.description}
              </p>
            </div>
              <SocialMedia theme={theme}/>
              <Button
                className="btn"
                text="See My Resume"
                newTab={true}
                href={greeting.resumeLink}
                theme={theme}
              /> 
          </div>
            
            <div className="cont-image">
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
        </MotionWrapper>
    </div>
  );
};

export default ContactSection;
