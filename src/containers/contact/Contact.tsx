import React from "react";
import { contactPageData } from "../../portfolio";
import SocialMedia from "../../components/layouts/socialMedia/SocialMedia";
import "./Contact.css";

// Define an interface for the contact page data
interface ContactPageData {
  contactSection: {
    title: string;
    profile_image_path?: string;
    description: string;
    number?: string; // Add number to the contactSection
    email_address?: string; // Add email_address to the contactSection
  };
  addressSection: {
    title: string;
    subtitle: string;
    avatar_image_path?: string;
    location_map_link?: string;
  };
}

// Define an interface for the theme prop
interface Theme {
  text: string;
  secondaryText: string;
}

// Extract the relevant data from contactPageData
const contactData: ContactPageData = {
  contactSection: {
    title: contactPageData.contactSection.title,
    profile_image_path: contactPageData.contactSection.profile_image_path,
    description: contactPageData.contactSection.description,
  },
  addressSection: {
    title: contactPageData.addressSection.title,
    subtitle: contactPageData.addressSection.subtitle,
    avatar_image_path: contactPageData.addressSection.avatar_image_path,
    location_map_link: contactPageData.addressSection.location_map_link,
  },
};

// You might define your theme here
const theme: Theme = {
  text: "#000", // Example color for text
  secondaryText: "#555", // Example color for secondary text
};

const Contact: React.FC = () => {
  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">{contactData.contactSection.title}</h1>
          <p className="text-detail">{contactData.contactSection.description}</p>

          <div className="contact-text-div">
            <a className="contact-detail" href={`tel:${contactData.contactSection.number}`}>
              {contactData.contactSection.number}
            </a>
            <br />
            <br />
            <a className="contact-detail-email" href={`mailto:${contactData.contactSection.email_address}`}>
              {contactData.contactSection.email_address}
            </a>
            <br />
            <br />
            {/* Pass the theme prop to SocialMedia */}
            <SocialMedia theme={theme} />
          </div>
        </div>
        <div className="contact-image-div">
          <img
            alt="Working"
            src={require("../../assets/images/contactMail.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
