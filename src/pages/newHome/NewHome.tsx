import React from "react";
import { pageEnabled } from "../../portfolio";
import { Header, TopButton, Footer } from "../../components";


const NewHome = () => {
  if (!pageEnabled.newhome) {
    return null;
  }
  return (
    <div className="main-page">
      <Header/>
      <TopButton/>
      <Footer/>
    </div>
  );
};

export default NewHome;
