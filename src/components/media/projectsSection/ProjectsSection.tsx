import React from "react";
import GithubRepoCard from "../../cards/githubRepoCard/GithubRepoCard";
import MotionWrapper from "../../layouts/animations/MotionWrapper";
import { projects } from "../../../portfolio";
import ProjectsData from "../../../shared/opensource/projects.json";
import ProjectsImg from "./ProjectsImg";
import "./ProjectsSection.css";


const ProjectsSection: React.FC = () => {
  if (!projects.display || ProjectsData.data.length === 0) {
    return null;
  }

  return (
    <div className="container">
      <div className="basic-projects">
        <MotionWrapper>
          <div className="section-two-components">
            <div className="projects-heading-img-div">
              <ProjectsImg />
            </div>
            <div className="heading-text-div">
              <h1 className="text-title">{projects.title}</h1>
              <p className="header-detail-text">{projects.description}</p>
            </div>
          </div>
        </MotionWrapper>
      </div>
      <div className="cards-div-main">
        {ProjectsData.data.map((repo) => (
          <GithubRepoCard repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
