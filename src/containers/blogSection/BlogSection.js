import React from "react";
import { Fade } from "react-reveal";
import { blogSection } from "../../portfolio";
import BlogsImg from "./BlogsImg";
import Button from "../../components/button/Button";
import "./BlogSection.css";

const BlogSection = (props) => {
  const { theme } = props;

  return (
    <div className="basic-contact">
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
            <div className="blogsite-btn-div">
              <Button
                text="Visit My Blogsite"
                newTab={true}
                href={blogSection.link}
                theme={theme}
              />
            </div>
          </div>
          <div className="blog-heading-img-div">
            <BlogsImg theme={theme} />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default BlogSection;
