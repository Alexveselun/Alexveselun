import React from "react";
import "chart.js/auto";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
import PullRequestChart from "../../components/charts/pullRequestChart/PullRequestChart";
import IssueChart from "../../components/charts/issueChart/IssueChart";
import "./OpensourceCharts.css";

const OpensourceCharts = (props) => {
  const { theme } = props; // Destructure theme for cleaner code

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
