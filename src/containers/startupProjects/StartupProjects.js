import React from "react";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";

import { bigProjects } from "../../portfolio";
import "./StartupProjects.css";

export default function StartupProjects(props) {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }
  if (!bigProjects.display) {
    return null;
  }
  const theme = props.theme;
  return (
    <div className="startup-main main" id="projects">
      <MotionWrapper>
        <h1
          className="text-title"
        >
          {bigProjects.title}
        </h1>
      </MotionWrapper>
      <MotionWrapper>
        <h2
          className="text-subtitle"
        >
          {bigProjects.subtitle}
        </h2>
      </MotionWrapper>
      <div className="projects-container">
        {bigProjects.projects.map((project, i) => {
          return (
            <div
              key={i}
              className="project-card project-card-light"
              style={{ backgroundColor: theme.imageHighlight }}
            >
              {project.image ? (
                <div className="project-image">
                  <img
                    src={require(`../../assets/images/${project.image}`)}
                    alt={project.projectName}
                    className="card-image"
                  ></img>
                </div>
              ) : null}
              <div className="project-detail">
                <h5 className="card-title" style={{ color: theme.text }}>
                  {project.projectName}
                </h5>
                <p className="card-subtitle" style={{ color: theme.text }}>
                  {project.projectDesc}
                </p>
                {project.footerLink ? (
                  <div className="project-card-footer">
                    {project.footerLink.map((link, i) => {
                      return (
                        <span
                          key={i}
                          className="project-tag"
                          onClick={() => openUrlInNewTab(link.url)}
                        >
                          {link.name}
                        </span>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
