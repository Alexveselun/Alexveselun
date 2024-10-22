import React from "react";
import { publications } from "../../portfolio";
import PublicationCard from "../../components/cards/publicationCard/PublicationCard";
import "./Publications.css";

// Define types for the publication data
interface Publication {
  id?: string;
  name: string;
  createdAt: string;
  description: string;
  url: string;
}



interface PublicationsProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}

const Publications: React.FC<PublicationsProps> = ({ theme }) => {
  const { display, title, description, publications: pubData } = publications as {
    display: boolean;
    title: string;
    description: string;
    publications: { data: Publication[] };
  };

  if (!display) {
    return null;
  }

  return (
    <div className="container">
      <div className="heading-text-div">
        <h1 className="text-second-title">{title}</h1>
        <p className="text-detail">{description}</p>
      </div>
      <div className="cards-div-main">
        {pubData.data.length > 0 ? (
          pubData.data.map((pub) => (
            <PublicationCard
              publication={pub}
              theme={theme}
              key={pub.id || pub.name}
            />
          ))
        ) : (
          <p className="text-detail">No publications available.</p>
        )}
      </div>
    </div>
  );
};

export default Publications;
