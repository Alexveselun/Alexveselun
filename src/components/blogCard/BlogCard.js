import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Fade } from "react-reveal";
import "./BlogCard.css";

const IMAGE_PATH = '/Alexveselun/src/shared/cms/';

const BlogCard = ({ blog, theme }) => {
  const [show, setShow] = useState(false);

  function openUrlInNewTab(url) {
    if (!url) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 4000);
    } else {
      const win = window.open(url, "_blank");
      win.focus();
    }
  }

  if (!blog) return null;

  const imageSource = `${IMAGE_PATH}${blog.image}`;
  return (
    <Fade bottom duration={2000}>
      <div onClick={() => openUrlInNewTab(blog.url)}>
        <div
          className="blog-container"
          style={{ backgroundColor: theme.jacketColor }}
          align="center"
        >
          <a className="blog-card blog-card-shadow">
            <h3 className="blog-title" style={{ color: theme.text }}>
              {blog.title}
            </h3>
            <p className="small" style={{ color: theme.secondaryText }}>
              {blog.description}
            </p>
            {blog.image && (
              <img
                src={imageSource}
                alt={blog.title}
                className="blog-image" 
              />
            )}
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </a>
        </div>
      </div>
      <Alert show={show} variant="danger">
        <Alert.Heading>404 | Not Found!</Alert.Heading>
      </Alert>
    </Fade>
  );
};

export default BlogCard;
