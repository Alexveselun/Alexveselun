import React from "react";
import MotionWrapper from "../../components/animations/MotionWrapper";

import { openSource } from "../../portfolio";
import PullRequestCard from "../../components/pullRequestCard/PullRequestCard";
import PullRequestsData from "../../shared/opensource/pull_requests.json";
import "./PullRequests.css";

const PullRequests = (props) => {
  const theme = props.theme;

  // Check if pull requests data exists and is not empty
  if (!PullRequestsData.data || !openSource.pull_requests) {
    return null; // Return null if no data
  }

  return (
    <div>
      <div className="pull-requests-header-div">
        <MotionWrapper>
          <h1 className="pull-requests-header" style={{ color: theme.text }}>
            Pull Requests
          </h1>
        </MotionWrapper>
      </div>
      <div className="pull-request-body-div">
        {PullRequestsData["data"].map((pullRequest) => {
          return (
          <PullRequestCard pullRequest={pullRequest} key={pullRequest.id} />
          );
          })}
      </div>
    </div>
  );
};

export default PullRequests;
