import React from "react";
import { pageEnabled } from "../../portfolio";
import { Header, TopButton, Footer } from "../../components";
import { ExperienceSection } from "../../containers";

// Визначення типу для props
interface ExperienceProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}

const Experience: React.FC<ExperienceProps> = (props) => {
  const { theme } = props;

  if (!pageEnabled.experience) {
    return null; // Якщо секція досвіду не активна, нічого не відображаємо
  }

  return (
    <div className="main-page">
      <Header/>
      <ExperienceSection theme={theme} />
      <Footer />
      <TopButton />
    </div>
  );
};

export default Experience;
