import React, { useState, useEffect } from "react";
import { hobbies } from "../../../portfolio";
import "./HobbiesCard.css";

interface HobbiesCardProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}

const HobbiesCards: React.FC<HobbiesCardProps> = ({ theme }) => {
  const [images, setImages] = useState<Record<string, string>>({});

  // Load hobby images asynchronously
  const loadImages = async () => {
    try {
      const imageMap: Record<string, string> = {};

      await Promise.all(
        hobbies.hobbies.map(async ({ image_path }) => {
          const image = await import(`../../../assets/images/hobbies_page/${image_path}`);
          imageMap[image_path] = image.default;
        })
      );

      setImages(imageMap);
    } catch (error) {
      console.error("Error loading images:", error);
    }
  };

  useEffect(() => {
    loadImages(); // Load images on component mount
  }, []);

  return (
    <div className="card-skill">
      {hobbies.hobbies.map(({ title, description, image_path }, index) => (
        <div className="hobbie-section" key={index}>
          <div className="second-heading-text-div ">
            <div className="text-second-title">{title}</div>
            <div className="text-detail">{description}</div>
          </div>
          <div className="picture">
              {images[image_path] ? (
                <img src={images[image_path]} alt={title} className="cont-image" />
              ) : (
                <div>Loading image...</div>
              )}
            </div>
        </div>
      ))}
    </div>
  );
};

export default HobbiesCards;
