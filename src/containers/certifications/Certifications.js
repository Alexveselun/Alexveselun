import React from "react";
import MotionWrapper from "../../components/animations/MotionWrapper";

import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import "./Certifications.css";

const Certifications = (props) => {
  const theme = props.theme;
  const viewCert = certifications.display;

  if (!viewCert) {
    return null;
  }
  return (
    <div className="main" id="certs">
      <div className="certs-header-div">
        <MotionWrapper>
          <h1 className="certs-header" style={{ color: theme.text }}>
            Certifications
          </h1>
        </MotionWrapper>
      </div>
      <div className="certs-body-div">
        {certifications.certifications.map((cert) => {
          return (
            <CertificationCard
              certificate={cert}
              theme={theme}
              key={cert.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
