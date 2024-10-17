import React, { useEffect, useRef, useState } from "react";
import MotionWrapper from "../../components/layouts/animations/MotionWrapper";
import BlogCard from "../../components/cards/blogCard/BlogCard";
import { blogSection } from "../../portfolio";
import "./BlogSection.css";

// Define the shape of the blog data
interface BlogData {
  chatId: string;
  fileName: any;
  title: string;
  description: string;
  pictureName: string;
}

interface BlogSectionProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}

const BlogSection: React.FC<BlogSectionProps> = ({ theme }) => {
  const blogRef = useRef<HTMLDivElement>(null);
  const [blogData, setBlogData] = useState<BlogData[] | null>(null);
  const [dataUnavailable, setDataUnavailable] = useState<boolean>(false);

  useEffect(() => {
    try {
      const data: BlogData[] = require("../../assets/blogData/869945985_images.json");
      setBlogData(data);
    } catch (error) {
      console.error("Error loading blog data:", error);
      setDataUnavailable(true);
    }
  }, []);

  const cleanEmptyNodes = () => {
    if (blogRef.current) {
      const emptyNodes = Array.from(blogRef.current.childNodes).filter(
        (child) => !child.hasChildNodes()
      );
      emptyNodes.forEach((child) => blogRef.current?.removeChild(child));
    }
  };

  useEffect(() => {
    cleanEmptyNodes();
  }, []);

  const renderBlogCards = () => {
    return blogData?.map((blog) => (
      <BlogCard
        theme={theme}
        blog={{
          fileName: blog.fileName,
          title: blog.title,
          description: blog.description,
          image: blog.pictureName,
        }}
      />
    ));
  };

  return (
    <div className="blog-section">
      <MotionWrapper>
        <div className="heading-div">
          <div className="heading-text-div">
            <h1 className="blog-heading-text" style={{ color: theme.text }}>
              {blogSection.title}
            </h1>
            <p className="subtitle-main" style={{ color: theme.secondaryText }}>
              {blogSection.subtitle}
            </p>
          </div>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div" ref={blogRef}>
            {dataUnavailable ? (
              <div>Даних про блог, поки не має</div> // Message when data is unavailable
            ) : (
              blogData && renderBlogCards() // Render blog cards if data is available
            )}
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
};

export default BlogSection;
