import React from "react";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
import { talkSection } from "../../portfolio";
import TalkCard from "../../components/cards/talkCard/TalkCard";
import "./Talks.css";

export default function Talks(props) {
  if (!talkSection.display) {
    return null;
  }
  const theme = props.theme;
  return (
    <div className="talks-main">
      <div className="main" id="talks">
        <div className="talk-header">
          <MotionWrapper>
            <h1 className="talk-header-title" style={{ color: theme.text }}>
              {talkSection.title}
            </h1>
          </MotionWrapper>
          <MotionWrapper>
            <p
              className="subTitle talk-header-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {talkSection.subtitle}
            </p>
          </MotionWrapper>
          {talkSection.talks.map((talk, i) => {
            return (
              <MotionWrapper bottom duration={2000} distance="40px" key={talk.title}>
                <TalkCard
                  talkDetails={{
                    title: talk.title,
                    subtitle: talk.subtitle,
                    slides_url: talk.slides_url,
                    event_url: talk.event_url,
                    image: talk.image,
                  }}
                  theme={theme}
                />
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
}
