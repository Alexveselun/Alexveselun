import React, { useEffect, useState } from "react";
import Button from "../../components/layouts/button/Button";
import { contactPageData } from "../../portfolio.js";
import MotionWrapper from "components/layouts/animations/MotionWrapper";

interface AddressSectionData {
  title: string;
  subtitle: string;
  address_image: string;
  location_map_link: string;
}

interface AddressSectionProps {
  theme: {
    text: string;
    secondaryText: string;
  };
}

const AddressSection: React.FC<AddressSectionProps> = ({ theme }) => {
  const { addressSection } = contactPageData as { addressSection: AddressSectionData };
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      if (addressSection.address_image) {
        try {
          const img = await import(`../../assets/images/contactSection/${addressSection.address_image}`);
          setImage(img.default);
        } catch (error) {
          console.error("Error loading image:", error);
        }
      }
    };

    loadImage();
  }, [addressSection.address_image]);

  return (
    <div className="container">
      <MotionWrapper>
        <div className="section-two-components">
          <div className="picture">
            {image ? (
              <img src={image} alt={addressSection.address_image} className="cont-image" />
            ) : (
              <div>Loading image...</div>
            )}
          </div>
          <div className="section">
            <div className="heading-text-div">
              <h1 className="text-second-title">{addressSection.title}</h1>
              <p className="text-detail">{addressSection.subtitle}</p>
              <Button
                text="Visit on Google Maps"
                newTab={true}
                href={addressSection.location_map_link}
                theme={theme}
                className="btn"
              />
            </div>
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
};

export default AddressSection;
