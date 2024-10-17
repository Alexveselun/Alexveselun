import React from "react";
import { pageEnabled } from "../../portfolio";
import { Header, Footer, TopButton } from "../../components";
import { HobbiesSection } from "containers";

interface HobbiesProps {
  theme: {
    text: string;
    secondaryText: string;
  };
  onToggle: () => void;
}

const Hobbies: React.FC<HobbiesProps> = ({ theme }) => {
  if (!pageEnabled.hobbies) {
    return null; 
  }

  return (
    <>
      <Header />
      <HobbiesSection theme={theme} />
      <Footer/>
      <TopButton/>
    </>
  );
};

export default Hobbies;
