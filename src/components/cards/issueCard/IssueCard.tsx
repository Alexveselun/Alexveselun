import React from "react";
import MotionWrapper from "../../layouts/animations/MotionWrapper";
import "./IssueCard.css";

interface Assignee {
  name: string;
  url: string;
  avatarUrl: string;
}

interface Repository {
  url: string;
  owner: {
    login: string;
    url: string;
    avatarUrl: string;
  };
  name: string;
}

interface Issue {
  number: number;
  title: string;
  url: string;
  closed: boolean;
  createdAt: string;
  assignees: { nodes: Assignee[] };
  repository: Repository;
}

interface IssueCardProps {
  issue: Issue;
}

const IssueCard: React.FC<IssueCardProps> = ({ issue }) => {
  const isClosed = issue.closed;
  const iconStyle = { color: isClosed ? "#d73a49" : "#28a745" };
  const subtitleString = `#${issue.number} opened on ${issue.createdAt.split("T")[0]}`;

  return (
      <div className="long-card">
      <MotionWrapper>

        <div className="long-card-header">
          <span className="iconify issue-icons" data-icon={isClosed ? "octicon:issue-closed" : "octicon:issue-opened"} style={iconStyle} data-inline="false"></span>
          <p className="card-title">
            <a href={issue.url} target="_blank" rel="noopener noreferrer">
              {issue.title}</a>
          </p>
          <p className="card-subtitle">{subtitleString}</p>
         </div>
         <div className="parent-repo-div">
          Repository:{" "}
          <a
            href={issue.repository.url}
            target="_blank"
            rel="noopener noreferrer">{issue.repository.owner.login}/{issue.repository.name}
          </a>
          </div>
      </MotionWrapper>
      </div>
  );
};

export default IssueCard;
