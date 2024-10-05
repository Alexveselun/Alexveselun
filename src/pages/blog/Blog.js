import React, { useEffect, useRef } from "react";
import { Header, TopButton, Footer } from "../../components";
import { BlogSection } from "../../containers";
import { blogSection } from "../../portfolio";
import MediumBlogs from "../../shared/blogs.json";
import BlogCard from "../../components/blogCard/BlogCard";
import Fade from "react-reveal/Fade";
import "./Blog.css";

const Blog = (props) => {
  const { theme } = props;
  const blogRef = useRef(null);

  // Очищення порожніх вузлів
  useEffect(() => {
    const cleanEmptyNodes = () => {
      blogRef.current?.childNodes?.forEach((child) => {
        if (!child?.children?.length) {
          blogRef.current.removeChild(child);
        }
      });
    };
    
    cleanEmptyNodes();
  }, []);

  // Перевірка на тип блогів
  const blogType = blogSection.display;
  if (!["none", "medium", "hardcoded"].includes(blogType)) return null;
  if (blogType === "none") return null;

  const extractTextContent = (html) =>
    typeof html === "string"
      ? html
          .split("p>")
          .filter((el) => !el.includes(">"))
          .map((el) => el.replace("</", ".").replace("<", ""))
          .join(" ")
      : "";

  const extractPictureContent = (html) =>
    typeof html === "string"
      ? html.match(/<img[^>]+src="([^">]+)"/)?.[1]
      : "";

  const mediumSuccess = MediumBlogs.status === "ok" || MediumBlogs.items != null;

  const renderBlogCards = () => {
    if (blogType === "hardcoded" || !mediumSuccess) {
      return blogSection.blogs.map((blog) => (
        <BlogCard
          key={blog.url}
          theme={theme}
          blog={{
            url: blog.url,
            image: blog.image,
            title: blog.title,
            description: blog.description,
          }}
        />
      ));
    }

    return MediumBlogs.items.map((blog) => (
      <BlogCard
        key={blog.link}
        theme={theme}
        blog={{
          url: blog.link,
          title: blog.title,
          description: extractTextContent(blog.content),
          image: extractPictureContent(blog.content) || '', 
        }}
      />
    ));
  };

  return (
    <div className="main-page">
      <Header theme={theme} />
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="blogs">
          <BlogSection theme={theme} />
          <div className="blog-main-div">
            <div className="blog-text-div" ref={blogRef}>
              {renderBlogCards()}
            </div>
          </div>
        </div>
      </Fade>
      <TopButton theme={theme} />
      <Footer theme={theme} onToggle={props.onToggle} />
    </div>
  );
};

export default Blog;
