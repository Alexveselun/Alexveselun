import React from "react";
import { socialMediaLinks } from "../../../portfolio";
import "./SocialMedia.css"; // Import the separate CSS file for styling

interface SocialMediaProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}

interface MediaLink {
  link: string;
  fontAwesomeIcon: string;
  backgroundColor: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ theme }) => {
  return (
    <div className="social-media-wrapper">
      {socialMediaLinks.map((media: MediaLink) => (
        <a
          href={media.link}
          key={media.link}
          className="icon-button"
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: media.backgroundColor }} // Pass dynamic background color
        >
          <span
            className="icon-wrapper"
            style={{ backgroundColor: media.backgroundColor }}
          >
            <i className={`fab ${media.fontAwesomeIcon}`}></i>
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
