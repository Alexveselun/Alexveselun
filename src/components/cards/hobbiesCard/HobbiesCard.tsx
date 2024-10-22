import React, { useState, useEffect } from "react";
import { hobbies } from "../../../portfolio";
import MotionWrapper from "../../layouts/animations/MotionWrapper";
import "./HobbiesCard.css";

interface HobbiesCardProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}

const HobbiesCards: React.FC<HobbiesCardProps> = ({ theme }) => {
  const [images, setImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imagePromises = hobbies.hobbies.map(async ({ image_path }) => {
          const image = await import(`../../../assets/images/${image_path}`);
          return { [image_path]: image.default };
        });

        const resolvedImages = await Promise.all(imagePromises);
        const imageMap = resolvedImages.reduce((acc, img) => ({ ...acc, ...img }), {});
        setImages(imageMap);
      } catch (err) {
        setError("Error loading images");
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="hobbies-cards">
      <MotionWrapper>
          {hobbies.hobbies.map(({ title, description, image_path }, index) => (
            <div className="hobbie-section" key={index}>
              <div className="hobbies-heading">
                <MotionWrapper>
                  <div className="text-second-title">
                    {title}
                  </div>
                  <div className="text-detail">
                    {description}
                  </div>
                </MotionWrapper>
              </div>
              <MotionWrapper>
                <div className="picture">
                <div className="cont-image">
                  {images[image_path] && (
                    <img
                      src={images[image_path]}
                      alt={title}
                    />
                  )}
                </div>
                </div>
              </MotionWrapper>
            </div>
          ))}
      </MotionWrapper>
    </div>
  );
};

export default HobbiesCards;
