import React from "react";
// import { SocialMedia } from "../../components";
import { contactPageData } from "../../portfolio";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
import UserData from "../../shared/opensource/user.json";
import "./AboutMe.css";

interface AboutMeProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}


const AboutMe: React.FC<AboutMeProps> = ({ theme }) => {
  if (!UserData?.data || Object.keys(UserData.data).length === 0) {
    return null;
  }

  const { avatarUrl, name, location } = UserData.data;
  const isHireable = UserData.data.isHireable ? "Yes" : "No";

  return (
    <div className="container">
      <div className="section aboutMe"> 
      <MotionWrapper>
        <div className="heading-text-div">
          <h1 className="text-title">Reach Out to Me!</h1>
              <div className="text-detail"> {contactPageData.contactSection.description}
              </div>
        </div>
              {avatarUrl && (
                <div className="profile-image-div">
                    <img
                      src={avatarUrl}
                      alt={name}
                      className="profile-image"
                    />
                </div>
              )}
              {location && (
                <div className="location-div">
                  <div className="icon">
                    <svg
                      className="loc-im"
                      viewBox="-0.5 -2 20 19"
                      version="1.1"
                      aria-hidden="true"
                      stroke="currentColor"
                      role="img"
                      aria-label="Location Icon" 
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                      ></path>
                    </svg>
                    {location}
                  </div>
                </div>
              )}
                <div className="text-detail">Open for opportunities: {isHireable}
              </div>
      </MotionWrapper>
      </div>
    </div>
  );
};

export default AboutMe;
