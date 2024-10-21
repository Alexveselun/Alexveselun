import React from "react";
import { publications } from "../../portfolio"; // Ensure this file has appropriate types
import PublicationCard from "../../components/cards/publicationCard/PublicationCard";
import "./Publications.css";

// Define types for the publication data based on your actual data structure
interface Publication {
  id?: string; // or number, depending on your data
  name: string;
  createdAt: string; // Assuming this field exists in your data
  description: string;
  url: string; // Assuming you want to include the URL of the publication
  // Add other relevant fields based on your publication data
}

interface PubData {
  data: Publication[];
}

interface PublicationsProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}

// Define the structure of the publications object
interface PublicationsInfo {
  display: boolean;
  title: string;
  description: string;
  publications: PubData;
}

// Assuming you have a specific type for the publications object in your portfolio
const publicationsData: PublicationsInfo = publications as PublicationsInfo;

const Publications: React.FC<PublicationsProps> = ({ theme }) => {
  const { display, title, description, publications: pubData } = publicationsData;

  if (!display) {
    return null;
  }

  return (
    <div className="container">
      <div className="basic-projects">
        <div className="heading-text-div">
            <h1 className="heading-text">
              {title}
            </h1>
            <p className="subtitle-main">
              {description}
            </p>
          </div>
      </div>
      <div className="repo-cards-div-main">
        {pubData.data.length > 0 ? (
          pubData.data.map((pubs) => {
            if (!pubs.name || pubs.name.length === 0) {
              return null;
            }

            return (
              <PublicationCard
                publication={pubs}
                theme={theme}
                key={pubs.id || pubs.name} // Use a unique identifier if available
              />
            );
          })
        ) : (
          <p style={{ color: theme.secondaryText }}>No publications available.</p> // Fallback message
        )}
      </div>
    </div>
  );
};

export default Publications;
