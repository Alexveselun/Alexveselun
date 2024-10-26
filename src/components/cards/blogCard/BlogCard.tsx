import React from "react";
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

  const openUrlInNewTab = (url?: string) => {
    if (!url) {
      setTimeout(() => {
      }, 4000);
    } else {
      const win = window.open(url, "_blank");
      win?.focus();
    }
  };

  if (!blog) return null;

  return (
    // <div className="">
    <div className="blog-card second-heading-text-div" onClick={() => openUrlInNewTab(blog.url)}>
    <div className="text-second-title">{blog.title}</div>
    <div className="text-detail">{blog.description}</div>
      <div className="cont-image">
        {blog.image && (
        <img
        src={imageSource}
        className="cont-image cut-image-to50" 
        alt={blog.title || "Blog image"}
        />
        )}
      </div>
        {/* <div className="go-corner">
        <div className="go-arrow">→</div>
        </div> */}
    </div>
    // </div>
  );
};

export default BlogCard;
