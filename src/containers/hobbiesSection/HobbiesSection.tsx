import React from "react";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
import { hobbies, pageEnabled } from "../../portfolio";
import { HobbiesCards } from "components"; // Make sure the import path is correct

interface HobbiesSectionProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}

const HobbiesSection: React.FC<HobbiesSectionProps> = ({ theme }) => {
  if (!pageEnabled.hobbies) return null;

  return (
    <div className="container" id="hobbies">
        <div className="section top5rem">
          <div className="heading-text-div">
            <h1 className="text-title">{hobbies.title}</h1>
            {/* <h2 className="text-subtitle">{hobbies.subTitle}</h2> */}
            </div>
      <MotionWrapper>
        <HobbiesCards theme={theme} />
      </MotionWrapper>

        </div>
    </div>
  );
};

export default HobbiesSection;
