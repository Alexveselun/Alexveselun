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

const Gallery: React.FC<BlogProps> = ({ theme }) => {
  if (!["myBlog", "hardcoded"].includes(blogSection.display) || blogSection.display === "none") {
    return null;
  }

  return (
    <div className="main-page">
      <Header />
      <BlogSection theme={theme} />
      <Footer />
      <TopButton />
    </div>
  );
};

export default Gallery;
