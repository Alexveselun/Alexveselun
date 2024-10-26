import React from "react";
import "chart.js/auto";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
import { PullRequestChart, IssueChart } from "../../components/charts/opensource";

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
          <h1 className="text-title">
            Contributions
          </h1>
      <div className="section-two-components">
        <IssueChart theme={theme} />
        <PullRequestChart theme={theme} />
      </div>
    </MotionWrapper>
    </div>
  );
};

export default OpensourceCharts;
