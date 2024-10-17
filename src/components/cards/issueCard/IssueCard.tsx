import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
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
  const bgColor = isClosed ? "#ffdce0" : "#dcffe4";
  const subtitleString = `#${issue.number} opened on ${issue.createdAt.split("T")[0]}`;

  const assignee = issue.assignees.nodes[0] && (
    <OverlayTrigger
      key={issue.assignees.nodes[0].name}
      placement="top"
      overlay={<Tooltip>{`Assigned to ${issue.assignees.nodes[0].name}`}</Tooltip>}
    >
      <a href={issue.assignees.nodes[0].url} target="_blank" rel="noopener noreferrer">
        <img className="assigned-to-img" src={issue.assignees.nodes[0].avatarUrl} alt={issue.assignees.nodes[0].name} />
      </a>
    </OverlayTrigger>
  );

  return (
    <MotionWrapper>
      <div className="issue-card" style={{ backgroundColor: bgColor, border: `1px solid ${iconStyle.color}` }}>
        <div className="issue-top">
          <div className="issue-main">
            <span className="iconify issue-icons" data-icon={isClosed ? "octicon:issue-closed" : "octicon:issue-opened"} style={iconStyle} data-inline="false"></span>
            <div className="issue-title-main">
              <p className="issue-title">
                <a href={issue.url} target="_blank" rel="noopener noreferrer">{issue.title}</a>
              </p>
              <p className="issue-subtitle">{subtitleString}</p>
            </div>
          </div>
        </div>
        <div className="issue-down">
          <div className="assignee-repo">
            <p className="parent-repo">
              Repository:{" "}
              <a style={{ color: iconStyle.color }} href={issue.repository.url}>
                {issue.repository.owner.login}/{issue.repository.name}
              </a>
            </p>
            <div className="assignee-info">{assignee}</div>
          </div>
          <div className="owner-img-div">
            <a href={issue.repository.owner.url} target="_blank" rel="noopener noreferrer">
              <img className="owner-img" src={issue.repository.owner.avatarUrl} alt="" />
            </a>
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default IssueCard;
