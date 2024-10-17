import React from "react";
import { Header, Footer, TopButton } from "../../components";
import { BlogSection } from "../../containers";
import { blogSection } from "../../portfolio";

interface BlogProps {
  theme: {
    text: string;
    secondaryText: string;
  };
  onToggle: () => void;
}

const Blog: React.FC<BlogProps> = ({ theme }) => {
  if (!["myBlog", "hardcoded"].includes(blogSection.display) || blogSection.display === "none") {
    return null;
  }

  return (
    <>
      <Header />
      <BlogSection theme={theme} />
      <Footer />
      <TopButton />
    </>
  );
};

export default Blog;
