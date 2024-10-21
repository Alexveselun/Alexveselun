import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import MotionWrapper from "../../layouts/animations/MotionWrapper";
import "./BlogCard.css";

interface Blog {
  fileName: any; 
  title: string;
  description: string;
  image: string; // Optional
  url?: string; // Optional
}

interface BlogCardProps {
  blog: Blog;
  theme: { jacketColor?: string; text: string; secondaryText: string };
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const imageSource = `${process.env.PUBLIC_URL}/assets/blogData/${blog.image}`;
  const [show, setShow] = useState(false);

  const openUrlInNewTab = (url?: string) => {
    if (!url) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 4000);
    } else {
      const win = window.open(url, "_blank");
      win?.focus();
    }
  };

  if (!blog) return null;

  return (
    <div className="blog-container">
          <div className="blog-card  blog-card-shadow">
            <div onClick={() => openUrlInNewTab(blog.url)}>
            <div className="heading-div-text">
            <h1 className="heading-text">
              {blog.title}
            </h1>
            <p className="heading-detail-text">
              {blog.description}
            </p>
            </div>
            <div className="cont-image">
            {blog.image && (
              <img
                src={imageSource}
                className="cont-image" 
              />
            )}
            </div>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
            </div>
          {/* </a> */}
        </div>
      <Alert show={show} variant="danger">
        <Alert.Heading>Will be available later</Alert.Heading>
      </Alert>
    </div>
  );
};

export default BlogCard;
