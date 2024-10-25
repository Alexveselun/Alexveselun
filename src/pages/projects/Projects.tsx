import React from "react";
import { pageEnabled } from "../../portfolio";
import { Header, ProjectsSection, TopButton, Footer } from "../../components";
import { MusicPlayer, Publications } from "../../containers";

// Define props type for Projects component
interface ProjectsProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}

const Projects: React.FC<ProjectsProps> = ({ theme }) => {
  if (!pageEnabled.projects) {
    return null;
  }

  return (
    <div className="main-page">
      <Header />
      <ProjectsSection />
      <Publications theme={theme} />
      <MusicPlayer theme={theme}/>
      <Footer />
      <TopButton/>
    </div>
  );
};

export default Projects;
