import React from "react";
import MotionWrapper from "../../components/animations/MotionWrapper";

import { openSource } from "../../portfolio";
import IssueCard from "../../components/issueCard/IssueCard";
import IssuesData from "../../shared/opensource/issues.json";
import "./Issues.css";

const Issues = (props) => {
  const theme = props.theme;

  if (!IssuesData.data || !openSource.issues) {
    return null;
  }

  return (
    <div>
      <div className="issues-header-div">
        <MotionWrapper>
          <h1 className="issues-header" style={{ color: theme.text }}>
            Issues
          </h1>
        </MotionWrapper>
      </div>
      <div className="issues-body-div">
        {IssuesData["data"].map((issue) => {
          return <IssueCard issue={issue} key={issue.id} />;
        })}
      </div>
    </div>
  );
};

export default Issues;
