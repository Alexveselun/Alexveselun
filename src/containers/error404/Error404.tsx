import React from "react";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
import { Link } from "react-router-dom";
import "./Error404.css";

interface Error404Props {
  theme: {
    text: string;
    secondaryText: string;
    body: string;
  };
}

const Error404: React.FC<Error404Props> = ({ theme }) => {
  return (
    <div className="error-main">
      <div className="error-class">
        <MotionWrapper>
          <h1 style={{ color: theme.text }}>Woops</h1>
          <h1 className="error-404" style={{ color: theme.secondaryText }}>
            404
          </h1>
          <p style={{ color: theme.text }}>
            Please check the URL or return to the homepage.
          </p>
          <Link
            className="main-button"
            to="/home"
            style={{
              color: theme.body,
              backgroundColor: theme.text,
              border: `solid 1px ${theme.text}`,
              display: "inline-flex",
              padding: "10px 20px", // Add some padding for better appearance
              borderRadius: "5px", // Add rounded corners for better button aesthetics
              textDecoration: "none", // Remove underline for a cleaner look
            }}
            tabIndex={0} // Make the link focusable
          >
            Go Home
          </Link>
        </MotionWrapper>
      </div>
    </div>
  );
};

export default Error404;
