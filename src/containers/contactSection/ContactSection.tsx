import React from "react";
import { contactPageData } from "../../portfolio";
import SocialMedia from "../../components/layouts/socialMedia/SocialMedia";
import Button from "components/layouts/button/Button";
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
        <div className="section-two-components">
          <div className="section">

            <div className="heading-text-div">
              <h1 className="text-second-title">
                {contactSection.title}
              </h1>
              <p className="text-detail">
                {contactSection.description}
              </p>
            </div>
              <SocialMedia theme={theme}/>
              <Button
                className="btn"
                text="⭐ Contact Me"
                newTab={true}
                href={contactSection.email}
                theme={theme}
              /> 
          </div>
            <div className="picture">
            <div className="cont-image">
            <img
              src={require(`../../assets/images/contactSection/${contactSection.profile_image}`)}
              alt="contact"
            />
            </div>
          </div>
        </div>
        </MotionWrapper>
    </div>
  );
};

export default ContactSection;
