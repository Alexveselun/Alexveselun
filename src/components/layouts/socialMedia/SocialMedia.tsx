import React from "react";
import styled from "styled-components";
import { socialMediaLinks } from "../../../portfolio";
import "./SocialMedia.css";

interface SocialMediaProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}


const IconWrapper = styled.span<{ backgroundColor: string; theme: { text: string } }>`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

interface MediaLink {
  link: string;
  fontAwesomeIcon: string;
  backgroundColor: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({theme}) => {
  return (
    <div className="icon">
      {socialMediaLinks.map((media: MediaLink) => (
        <a
          href={media.link}
          key={media.link}
          className="icon-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper backgroundColor={media.backgroundColor} theme={theme}>
            <i className={`fab ${media.fontAwesomeIcon}`}></i>
          </IconWrapper>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
