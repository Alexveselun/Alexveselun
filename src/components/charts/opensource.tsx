import React from "react";
import { Doughnut } from "react-chartjs-2";
import PullRequestsData from "../../shared/opensource/pull_requests.json";
import IssueData from "../../shared/opensource/issues.json";
import { openSource } from "../../portfolio";
import "./opensource.css"; // You can combine the styles into one file

interface ChartProps {
  theme: {
    text: string
    secondaryText: string;
  };
}

const PullRequestChart: React.FC<ChartProps> = ({ theme }) => {
  if (!openSource.pr_chart) {
    return null; // Return null if no data or chart is not enabled
  }

  const prData = {
    labels: ["Open", "Merged", "Closed"],
    datasets: [
      {
        data: [
          PullRequestsData.open,
          PullRequestsData.merged,
          PullRequestsData.closed,
        ],
        backgroundColor: ["#28a745", "#6f42c1", "#d73a49"],
        hoverBackgroundColor: ["#28a745dd", "#6f42c1dd", "#d73a49dd"],
      },
    ],
  };

  return (
    <div className="chart-section">
        <h2 className="text-second-title">
          Pull Request Distribution
        </h2>
      <Doughnut
        data={prData}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          animation: {
            duration: 4000,
          },
        }}
      />
    </div>
  );
};

const IssueChart: React.FC<ChartProps> = ({ theme }) => {
  if (!openSource.issue_chart) {
    return null; // Return null if the chart is disabled
  }

  const issueData = {
    labels: ["Open", "Closed"],
    datasets: [
      {
        data: [IssueData.open, IssueData.closed],
        backgroundColor: ["#28a745", "#d73a49"],
        hoverBackgroundColor: ["#28a745dd", "#d73a49dd"],
      },
    ],
  };

  return (
    <div className="chart-section">
        <h2 className="text-second-title">
          Issue Distribution
        </h2>
      <Doughnut
        data={issueData}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          animation: {
            duration: 4000,
          },
        }}
      />
    </div>
  );
};

// Export both components
export { PullRequestChart, IssueChart };
