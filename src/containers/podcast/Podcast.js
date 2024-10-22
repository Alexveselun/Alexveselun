import React from "react";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";

import { podcastSection } from "../../portfolio";
import "./Podcast.css";

const Podcast = (props) => {
  const theme = props.theme;
  if (!podcastSection.display) {
    return null;
  }
  return (
    <div className="podcast-main">
      <div className="podcast-header" align="center">
        <MotionWrapper>
          <h1 className="podcast-header-title" style={{ color: theme.text }}>
            {podcastSection.title}
          </h1>
        </MotionWrapper>
        <MotionWrapper>
          <h2
            className="text-subtitle"
          >
            {podcastSection.subtitle}
          </h2>
        </MotionWrapper>
      </div>
      <div className="podcast-main-div">
        {podcastSection.podcast.map((podcastLink, i) => {
          if (!podcastLink) {
            console.log(`Podcast link for ${podcastSection.title} is missing`);
          }
          return (
            <div key={i} align="center">
              <MotionWrapper>
                <iframe
                  className="podcast"
                  src={podcastLink}
                  frameBorder="0"
                  scrolling="no"
                  title="Podcast"
                ></iframe>
              </MotionWrapper>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Podcast;
