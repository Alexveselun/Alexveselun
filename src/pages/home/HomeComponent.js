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

const Home = (props) => {
  const theme = props.theme;
  return (
    <div className="main-page">
      <Header theme={theme} />
      <Greeting theme={theme} />
      <Skills theme={theme} />
      <StartupProjects theme={theme} />
      <Twitter />
      <Talks theme={theme} />
      <Podcast theme={theme} />
      <AboutMe theme={theme} />
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Home;
