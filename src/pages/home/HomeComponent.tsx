import React from "react";
import { Header, TopButton, Footer } from "../../components";
import {
  Greeting,
  Skills,
  StartupProjects,
  Podcast,
  Talks,
  Twitter,
  AboutMe,
} from "../../containers";

// Define the props interface
interface HomeProps {
  theme: {
    // Define the properties of the theme as needed
    text: string;
    secondaryText: string;
  };
}

const Home: React.FC<HomeProps> = (props) => {
  const { theme } = props; // Destructure the theme from props
  return (
    <div className="main-page">
      <Header />
      <Greeting theme={theme} />
      <Skills theme={theme} />
      <StartupProjects theme={theme} />
      <Twitter />
      <Talks theme={theme} />
      <Podcast theme={theme} />
      <AboutMe theme={theme} />
      <Footer/>
      <TopButton />
    </div>
  );
};

export default Home;
