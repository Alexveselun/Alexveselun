import React from "react";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
import { podcastSection } from "../../portfolio";
import "./Podcast.css";

interface PodcastProps {
  theme: {
    text: string;
  };
}

const MusicPlayer: React.FC<PodcastProps> = ({ theme }) => {
  if (!podcastSection || !podcastSection.display) {
    return null;
  }

  return (
    <div className="container">
      <div className="section-two-components center">
      <div className="second-heading-text-div">
          <h1 className="text-title">
            {podcastSection.title}
          </h1>
          <h2 className="text-subtitle">
            {podcastSection.subtitle}
          </h2>
      </div>
      <div className="podcast-main-div">
        {podcastSection.musicTrackTitle.map((musicTrackTitle: string, i: number) => {
          if (!musicTrackTitle) {
            console.log(`The link for ${podcastSection.title} is missing`);
            return null;
          }
          return (
            <div key={i}>
              <MotionWrapper>
                <audio
                  className="podcast"
                  src={require(`../../assets/music/${musicTrackTitle}`)}
                  
                  controls
                  muted={false}
                >
                  Your browser does not support the audio element.
                </audio>
              </MotionWrapper>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default MusicPlayer;
