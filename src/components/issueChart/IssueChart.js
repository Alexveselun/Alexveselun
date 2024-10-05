import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Fade } from "react-reveal";
import IssueData from "../../shared/opensource/issues.json";
import { openSource } from "../../portfolio";
import "./IssueChart.css";

const IssueChart = (props) => {
  const theme = props.theme;

  // Check if the issue chart should be displayed
  if (!openSource.issue_chart) {
    return null; // Return null if the chart is disabled or there are no issues
  }

  // Prepare chart data
  const data = {
    labels: ["Open", "Closed"],
    datasets: [
      {
        data: [IssueData["open"], IssueData["closed"]],
        backgroundColor: ["#28a745", "#d73a49"],
        hoverBackgroundColor: ["#28a745dd", "#d73a49dd"],
      },
    ],
  };

  return (
    <div className="issue-chart">
      <Fade bottom duration={2000} distance="20px">
        <h2 className="issue-chart-header" style={{ color: theme.secondaryText }}>
          Issue Distribution
        </h2>
      </Fade>
      <Doughnut
        data={data}
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

export default IssueChart;
