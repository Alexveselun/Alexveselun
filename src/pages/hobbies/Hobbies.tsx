import React from "react";
import { Header, Footer, TopButton } from "../../components";
import { HobbiesSection } from "containers";

interface HobbiesProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}

const Hobbies: React.FC<HobbiesProps> = ({ theme }) => {
  // if (!pageEnabled.hobbies) {
  //   return null; 
  // }

  return (
    <div className="main-page">
      <Header />
      <HobbiesSection theme={theme} />
      <Footer/>
      <TopButton/>
    </div>
  );
};

export default Hobbies;
