import React from "react";
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
    <div className="issues-section">
      <h1 className="text-title">Issues</h1>
        <div className="cards-body-div">
          {IssuesData.data.map((issue) => (
          <IssueCard issue={issue} key={issue.id} />
          ))}
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
      <h1 className="text-title">Pull Requests</h1>
        <div className="cards-body-div">
          {PullRequestsData.data.map((pullRequest) => (
          <PullRequestCard pullRequest={pullRequest} key={pullRequest.id} />
          ))}
        </div>
    </div>    
    );
  };

  return (
    <div className="container">
      {renderIssues()}
      {renderPullRequests()}
    </div>
  );
};

export default IssuesPullRequestsList;
