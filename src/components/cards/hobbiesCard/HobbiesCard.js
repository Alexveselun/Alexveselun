import React, { useState, useEffect } from "react";
import { hobbies } from "../../../portfolio";
import MotionWrapper from "../../layouts/animations/MotionWrapper";
import "./HobbiesCard.css";

const HobbiesCard = ({ theme }) => {
  const [images, setImages] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = hobbies.hobbies.map(async ({ image_path }) => {
        const image = await import(`../../../assets/images/${image_path}`);
        return { [image_path]: image.default };
      });

      const resolvedImages = await Promise.all(imagePromises);
      const imageMap = resolvedImages.reduce((acc, img) => ({ ...acc, ...img }), {});
      setImages(imageMap);
    };

    loadImages();
  }, []);

  return (
    <div className="hobbies-card">
      <MotionWrapper>
        <div className="hobbies-card-body-div">
          {hobbies.hobbies.map(({ title, description, image_path }, index) => (
            <div className="hobbies-data" key={index}>
              <div className="hobbies-heading">
                <MotionWrapper>
                  <div className="hobbies-card-title" style={{ color: theme.text }}>
                    {title}
                  </div>
                  <div className="hobbies-card-subtitle" style={{ color: theme.secondaryText }}>
                    {description}
                  </div>
                </MotionWrapper>
              </div>
              <MotionWrapper>
                <div className="hobbies-card-img">
                  {images[image_path] && (
                    <img
                      className="hobbies-image"
                      src={images[image_path]}
                      alt={title}
                    />
                  )}
                </div>
              </MotionWrapper>
            </div>
          ))}
        </div>
      </MotionWrapper>
    </div>
  );
};

export default HobbiesCard;
