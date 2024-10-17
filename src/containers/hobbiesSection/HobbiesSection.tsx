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
    <MotionWrapper>
        <h1 className="center">
          {hobbies.title}
        </h1>
        <h2 className="center">
          {hobbies.subTitle}
        </h2>
      <HobbiesCards theme={theme} />
    </MotionWrapper>
  );
};

export default HobbiesSection;
