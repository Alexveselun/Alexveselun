import React from "react";
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
      <MotionWrapper>
        <div className="heading-text-div">
            <div className="text-title">Reach Out to Me!</div>
            <div className="text-detail">{contactPageData.contactSection.description}</div>
        </div>
        <div className="section aboutMe"> 
          {avatarUrl && (
          <div className="profile-image-div">
            <img src={avatarUrl} alt={name} className="profile-image" />
          </div>
          )}
          {location && (
          <div className="heading-text-div">
            <div className="icon-wrapper">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="text-detail">{location}</div>
          </div>
          )}
          <div className="heading-text-div">
            <div className="text-detail">
              Open for opportunities: {isHireable}
            </div>
          </div>
      </div>
      </MotionWrapper>
    </div>
  );
};

export default AboutMe;
