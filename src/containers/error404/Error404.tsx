import React from "react";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
import Button from "components/layouts/button/Button";

interface Error404Props {
  theme: {
    text: string;
    secondaryText: string;
    body: string;
  };
}

const Error404: React.FC<Error404Props> = ({ theme }) => {
  return (
    <div className="container">
      <div className="section-two-components">
        <MotionWrapper> 
          <h1 className="text-title">Woops</h1>
          <h1 className="text-title red">
            404
          </h1>
          <h2 className="text-subtitle">
            Please check the URL or return to the homepage.
          </h2>
          <Button
              text="Go Home"
              newTab={true}
              href={"/#/home"}
              theme={theme}
              className="btn"
              />
        </MotionWrapper>
      </div>
    </div>
  );
};

export default Error404;
