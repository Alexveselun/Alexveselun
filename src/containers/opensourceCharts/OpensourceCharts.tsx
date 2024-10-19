import React from "react";
import "chart.js/auto";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
import { PullRequestChart, IssueChart } from "../../components/charts/opensource";
import "./OpensourceCharts.css";

interface OpensourceChartsProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}

const OpensourceCharts: React.FC<OpensourceChartsProps> = ({ theme }) => {
  return (
    <div className="container">
    <MotionWrapper>
          <h1 className="center">
            Contributions
          </h1>
      <div className="os-charts-body-div">
        <IssueChart theme={theme} />
        <PullRequestChart theme={theme} />
      </div>
    </MotionWrapper>
    </div>
  );
};

export default OpensourceCharts;
