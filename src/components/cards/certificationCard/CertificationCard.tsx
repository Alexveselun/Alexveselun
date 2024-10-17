import React from "react";
import MotionWrapper from "../../layouts/animations/MotionWrapper";
import "./CertificationCard.css";

interface Certificate {
  certificate_link: string;
  color_code: string;
  logo_path: string;
  alt_name: string;
  title: string;
  subtitle: string;
}

interface CertificationCardProps {
  theme: { body: string; text: string; secondaryText: string };
  certificate: Certificate;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ theme, certificate }) => {
  return (
    <MotionWrapper>
      <div className="cert-card">
        <div className="content">
          <a
            href={certificate.certificate_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="content-overlay"></div>
            <div
              className="cert-main"
              style={{ backgroundColor: certificate.color_code }}
            >
              <img
                className="logo_img"
                src={require(`../../../assets/images/${certificate.logo_path}`)}
                alt={certificate.alt_name}
              />
            </div>
            <div className="content-details fadeIn-top">
              <h3 className="content-title" style={{ color: theme.body }}>
                Certificate
              </h3>
            </div>
          </a>
        </div>
        <div className="cert-body">
          <h2 className="cert-body-title" style={{ color: theme.text }}>
            {certificate.title}
          </h2>
          <h3
            className="cert-body-subtitle"
            style={{ color: theme.secondaryText }}
          >
            {certificate.subtitle}
          </h3>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default CertificationCard;
