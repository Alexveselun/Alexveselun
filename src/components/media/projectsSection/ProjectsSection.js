import React from "react";
import GithubRepoCard from "../../cards/githubRepoCard/GithubRepoCard";
import MotionWrapper from "../../layouts/animations/MotionWrapper";
import { projects } from "../../../portfolio";
import ProjectsData from "../../../shared/opensource/projects.json";
import ProjectsImg from "./ProjectsImg";
import "./ProjectsSection.css";


const ProjectsSection = (props) => {
  const { theme } = props;

  // Check if projects should be displayed or if there's no data
  if (!projects.display || ProjectsData.data.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="basic-projects">
        <MotionWrapper>
          <div className="heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="projects-heading-text">{projects.title}</h1>
              <p className="header-detail-text">{projects.description}</p>
            </div>
          </div>
        </MotionWrapper>
      </div>
      <div className="repo-cards-div-main">
        {ProjectsData.data.map((repo) => {
          return <GithubRepoCard repo={repo} theme={theme} key={repo.id} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
