import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import MotionWrapper from "../../layouts/animations/MotionWrapper";
import "./BlogCard.css";

interface Blog {
  fileName: any; 
  title: string;
  description: string;
  image?: string; // Optional
  url?: string; // Optional
}

interface BlogCardProps {
  blog: Blog;
  theme: { jacketColor?: string; text: string; secondaryText: string };
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, theme }) => {
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
    <MotionWrapper>
      <div onClick={() => openUrlInNewTab(blog.url)}>
        <div
          className="blog-container"
          style={{ backgroundColor: theme.jacketColor || '#ffffff' }} // Fallback color
        >
          <a
            className="blog-card blog-card-shadow"
            href={blog.url || '#'} // Use blog.url or fallback to '#'
            onClick={(e) => {
              if (!blog.url) {
                e.preventDefault(); // Prevent default only if url is not valid
                openUrlInNewTab(); // Show alert instead
              }
            }}
          >
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
    </MotionWrapper>
  );
};

export default BlogCard;
