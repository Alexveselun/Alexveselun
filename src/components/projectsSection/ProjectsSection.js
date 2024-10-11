import React from "react";
import GithubRepoCard from "../githubRepoCard/GithubRepoCard";
import MotionWrapper from "../animations/MotionWrapper";
import { projects } from "../../portfolio";
import ProjectsData from "../../shared/opensource/projects.json";
import ProjectsImg from "./ProjectsImg";
import "./ProjectsSection.css";

const ProjectsSection = (props) => {
  const theme = props.theme;

  if (!projects.display  || ProjectsData.data.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="basic-projects">
        <MotionWrapper>
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projects.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projects["description"]}
              </p>
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
