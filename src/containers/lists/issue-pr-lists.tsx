import React from "react";
import MotionWrapper from "components/layouts/animations/MotionWrapper";
import { openSource } from "../../portfolio";
import IssueCard from "components/cards/issueCard/IssueCard";
import PullRequestCard from "components/cards/pullRequestCard/PullRequestCard";
import IssuesData from "shared/opensource/issues.json";
import PullRequestsData from "shared/opensource/pull_requests.json";
import "./issue-pr-lists.css";

interface IssuesPullRequestsProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}

const IssuesPullRequestsList: React.FC<IssuesPullRequestsProps> = ({ theme }) => {
  const renderIssues = () => {
    if (!IssuesData.data || !openSource.issues) {
      return null; // Return null if no issues
    }

    return (
     <div className="container">
    <div className="issues-section">
        <MotionWrapper>
                <h1 className="center">Issues</h1>
                <div className="issues-body-div">
                    {IssuesData.data.map((issue) => (
                    <IssueCard issue={issue} key={issue.id} />
                    ))}
                </div>
        </MotionWrapper>
    </div>
    </div>
    );
  };

  const renderPullRequests = () => {
    if (!PullRequestsData.data || !openSource.pull_requests) {
      return null;
    }

    return (
    <div className="pull-requests-section">
        <MotionWrapper>
            <h1 className="center">Pull Requests</h1>
            <div className="pull-request-body-div">
                {PullRequestsData.data.map((pullRequest) => (
                <PullRequestCard pullRequest={pullRequest} key={pullRequest.id} />
                ))}
            </div>
        </MotionWrapper>
    </div>    
    );
  };

  return (
    <div className="sections">
      {renderIssues()}
      {renderPullRequests()}
    </div>
  );
};

export default IssuesPullRequestsList;
