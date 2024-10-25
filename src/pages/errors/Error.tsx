import React from "react";
import { Header, TopButton, Footer } from "../../components";
import { Error404 } from "../../containers";

interface Theme {
  text: string;
  secondaryText: string;
}

interface ErrorProps {
  theme: Theme;
}

const Error: React.FC<ErrorProps> = ({ theme }) => {
  return (
    <div className="main-page">
      <Header/>
      <Error404 theme={theme} />
      <Footer  />
      <TopButton/>
    </div>
  );
};

export default Error;
