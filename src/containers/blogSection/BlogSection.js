import React from "react";
import { Fade } from "react-reveal";
import { blogSection } from "../../portfolio";
import "./BlogSection.css";

const BlogSection = (props) => {
  const { theme } = props;

  return (
    <div className="blog-section">
      <Fade bottom duration={1000} distance="40px">
        <div className="blog-heading-div">
          <div className="blog-heading-text-div">
            <h1 className="blog-heading-text" style={{ color: theme.text }}>
              {blogSection.title}
            </h1>
            <p
              className="blog-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {blogSection.subtitle}
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default BlogSection;
