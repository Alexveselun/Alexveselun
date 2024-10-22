import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./PullRequestCard.css";

interface PullRequest {
  state: string;
  number: number;
  title: string;
  url: string;
  createdAt: string;
  changedFiles: number;
  additions: number;
  deletions: number;
  baseRepository: {
    owner: {
      login: string;
      url: string;
      avatarUrl: string;
    };
    name: string;
    url: string;
  };
  mergedBy?: {
    login: string;
    url: string;
    avatarUrl: string;
  } | null;
}


interface PullRequestCardProps {
  pullRequest: PullRequest;
}

const PullRequestCard: React.FC<PullRequestCardProps> = ({ pullRequest }) => {
  let iconPR = { iconifyClass: "", style: { color: "" } };

  switch (pullRequest.state) {
    case "OPEN":
      iconPR = {
        iconifyClass: "octicon:git-pull-request",
        style: { color: "#28a745" },
      };
      break;
    case "MERGED":
      iconPR = {
        iconifyClass: "octicon:git-merge",
        style: { color: "#6f42c1" },
      };
      break;
    default:
      iconPR = {
        iconifyClass: "octicon:git-pull-request",
        style: { color: "#d73a49" },
      };
      break;
  }

  const subtitleString = `#${pullRequest.number} opened on ${pullRequest.createdAt.split("T")[0]}`;

  const mergedBy = pullRequest.mergedBy ? (
    <OverlayTrigger
      key={pullRequest.mergedBy.login}
      placement="top"
      overlay={
        <Tooltip id={`tooltip-top`}>
          <p>{`Merged by ${pullRequest.mergedBy.login}`}</p>
        </Tooltip>
      }
    >
      <a href={pullRequest.mergedBy.url} target="_blank" rel="noopener noreferrer">
        <img className="small-img-toolltip" src={pullRequest.mergedBy.avatarUrl} alt="" />
      </a>
    </OverlayTrigger>
  ) : null;

  return (
      <div className="long-card ">
          <div className="long-card-header">
            <span
              className="iconify pr-icons"
              data-icon={iconPR.iconifyClass}
              style={iconPR.style}
              data-inline="false"/>
              <p className="card-title">
                <a href={pullRequest.url} target="_blank" rel="noopener noreferrer">
                  {pullRequest.title}
                </a>
              </p>
              <p className="card-subtitle">{subtitleString}</p>
          </div>
          <div className="files-changed-div">
            <p className="text-card-content">
              {pullRequest.changedFiles}
            </p>
            <p className="text-card-content">Files Changed</p>
          </div>
          <div className="parent-repo-div">
              Repository:{" "}
              <a
                href={pullRequest.baseRepository.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {pullRequest.baseRepository.owner.login}/
                {pullRequest.baseRepository.name}
              </a>
            </div>
            <div className="changes-files-div">
              <p className="text-green-positive">{pullRequest.additions}+</p>
              <p className="text-red-negative">{pullRequest.deletions}-</p>
              <p className="text-card-content"> {mergedBy}</p>
            </div>
          <div className="card-img-main-div">
            <a href={pullRequest.baseRepository.owner.url} target="_blank" rel="noopener noreferrer">
              <img className="card-main-image" src={pullRequest.baseRepository.owner.avatarUrl} alt="" />
            </a>
        </div>
      </div>
  );
};

export default PullRequestCard;
