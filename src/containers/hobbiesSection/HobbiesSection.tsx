import React from "react";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
import { hobbies, pageEnabled } from "../../portfolio";
import { HobbiesCards } from "components";
import "./HobbiesSection.css";

interface HobbiesSectionProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}

const HobbiesSection: React.FC<HobbiesSectionProps> = ({ theme }) => {
  // Return null if the hobbies page is disabled
  if (!pageEnabled.hobbies) return null;

  return (
    <div className="container">
    <MotionWrapper>
      <div className="heading-text-div">
        <h1 className="text-title">
          {hobbies.title}
        </h1>
        <h2 className="text-subtitle">
          {hobbies.subTitle}
        </h2>
      </div>
      <HobbiesCards theme={theme} />
    </MotionWrapper>
    </div>
  );
};

export default HobbiesSection;
