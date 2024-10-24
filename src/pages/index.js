import React, { useContext } from "react";
import { Route, Routes, BrowserRouter, HashRouter } from "react-router-dom";
import Home from "./home/HomeComponent";
import Hobbies from "./hobbies/Hobbies";
import NewHome from "./newHome/NewHome";
import Experience from "./experience/Experience";
import Opensource from "./opensource/Opensource";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Splash from "./splash/Splash";
import Blogs from "./blog/Blog";
import { routerValue, pageEnabled } from "../portfolio.js";
import Error404 from "./errors/Error";
import StyleContext from "../contexts/StyleContext";
import { darkTheme } from "../theme";

const Main = (props) => {
  const viewExperience = pageEnabled.experience;
  const viewNewHome = pageEnabled.newhome;
  const viewProjects = pageEnabled.projects;
  const viewopenSource = pageEnabled.opensource;
  const viewHobbbies = pageEnabled.hobbies;
  const viewSplash = pageEnabled.splash;
  const viewBlog = pageEnabled.blog;
  const viewContact = pageEnabled.contact;

  const { isDark } = useContext(StyleContext);
  const theme = isDark ? darkTheme : props.theme;
  const Router = routerValue === "BrowserRouter" ? BrowserRouter : HashRouter;
  if (viewSplash) {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Splash theme={theme} />} />
            <Route path="/home" element={<Home theme={theme} />} />
            {viewExperience && (
              <Route
                path="/experience"
                element={<Experience theme={theme} />}
              />
            )}
            {viewHobbbies && (
              <Route path="/hobbies" element={<Hobbies theme={theme} />} />
            )}
            {viewNewHome && (
              <Route path="/newhome" element={<NewHome theme={theme} />} />
            )}
            {viewopenSource && (
              <Route
                path="/opensource"
                element={<Opensource theme={theme} />}
              />
            )}
            {viewBlog && (
              <Route path="/gallery" element={<Blogs theme={theme} />} /> 
            )}
            {viewContact && (
            <Route path="/contact" element={<Contact theme={theme} />} />
            )}
            <Route path="/splash" element={<Splash theme={theme} />} />
            {viewProjects && (
              <Route path="/projects" element={<Projects theme={theme} />} />
            )}
            <Route path="*" element={<Error404 theme={theme} />} />
          </Routes>
        </Router>
      </div>
    );
  } else {
    return (
      <div style={{ backgroundColor: theme.body }}>
        <Router basename="/">
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/home" element={<Home theme={theme} />} />
            {viewExperience && (
              <Route
                path="/experience"
                element={<Experience theme={theme} />}
              />
            )}
            {viewHobbbies && (
              <Route path="/hobbies" element={<Hobbies theme={theme} />} />
            )}
            {viewNewHome && (
              <Route path="/newhome" element={<NewHome theme={theme} />} />
            )}
            {viewopenSource && (
              <Route
                path="/opensource"
                element={<Opensource theme={theme} />}
              />
            )}
            {viewBlog && (
              <Route path="/gallery" element={<Blogs theme={theme} />} />
            )}
            {viewContact && (
            <Route path="/contact" element={<Contact theme={theme} />} />
            )}
            {viewProjects && (
              <Route path="/projects" element={<Projects theme={theme} />} />
            )}
            <Route path="*" element={<Error404 theme={theme} />} />
          </Routes>
        </Router>
      </div>
    );
  }
};

export default Main;
