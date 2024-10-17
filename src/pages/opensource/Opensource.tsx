import React from "react";
import { pageEnabled } from "../../portfolio";
import { Header, Footer, TopButton } from "../../components";
import {
  OpensourceCharts,
  Organizations,
  IssuesPullRequestsList,
} from "../../containers";

interface OpensourceProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}

const Opensource: React.FC<OpensourceProps> = ({ theme }) => {
  if (!pageEnabled.opensource) {
    return null; // Return null if the opensource page is not enabled
  }

  return (
    <div className="main-page">
      <Header/>
      <Organizations theme={theme} />
      <OpensourceCharts theme={theme} />
      <IssuesPullRequestsList theme={theme} />
      <Footer/>
      <TopButton />
    </div>
  );
};

export default Opensource;
