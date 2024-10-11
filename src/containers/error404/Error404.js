import React from "react";
import MotionWrapper from "../../components/animations/MotionWrapper";

import { Link } from "react-router-dom";
import "./Error404.css";

const Error404 = (props) => {
  const theme = props.theme;
  return (
    <div className="error-main">
      <div className="error-class">
        <MotionWrapper>
          <h1 style={{ color: theme.text }}>Woops</h1>
          <h1 className="error-404" style={{ color: theme.secondaryText }}>
            404
          </h1>
          <p style={{ color: theme.text }}>
            The requested page is unavailable at the moment!
          </p>
          <Link
            className="main-button"
            to="/home"
            style={{
              color: theme.body,
              backgroundColor: theme.text,
              border: `solid 1px ${theme.text}`,
              display: "inline-flex",
            }}
          >
            Go Home
          </Link>
        </MotionWrapper>
      </div>
    </div>
  );
};
export default Error404;
