import React from "react";
import "chart.js/auto";
import MotionWrapper from "../../components/animations/MotionWrapper.js";
import PullRequestChart from "../../components/pullRequestChart/PullRequestChart.js";
import IssueChart from "../../components/issueChart/IssueChart.js";
import "./OpensourceCharts.css";

const OpensourceCharts = (props) => {
  const theme = props.theme;
  return (
    <div>
      <div className="os-charts-header-div">
        <MotionWrapper>
          <h1 className="os-charts-header" style={{ color: theme.text }}>
            Contributions
          </h1>
        </MotionWrapper>
      </div>
      <div className="os-charts-body-div">
        <PullRequestChart theme={theme} />
        <IssueChart theme={theme} />
      </div>
    </div>
  );
};

export default OpensourceCharts;
