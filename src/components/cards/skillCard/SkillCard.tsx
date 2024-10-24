import React, { useState, useEffect, useCallback } from "react";
import MotionWrapper from "components/layouts/animations/MotionWrapper";

interface Theme {
  text: string;
  secondaryText: string;
}

interface Skill {
  title: string;
  imageName: string; // Assuming this corresponds to the image file name
  skills: string[];
}

interface SkillCardProps {
  skill: Skill;
  theme: Theme;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, theme }) => {
  const [image, setImage] = useState<string | null>(null);

  // Функція-обробник для завантаження зображення
  const loadImage = useCallback(async () => {
    try {
      const img = await import(`../../../assets/images/skills_section/${skill.imageName}`);
      setImage(img.default);
    } catch (error) {
      console.error("Error loading image", error);
    }
  }, [skill.imageName]); // Додаємо залежність на skill.imageName

  useEffect(() => {
    loadImage(); // Викликаємо обробник у useEffect
  }, [loadImage]); // Додаємо loadImage до масиву залежностей

  return (
    <div className="skills-container">
      <div className="heading-text-div">
        <h1 className="text-second-title">{skill.title}</h1>
      </div>
      <div className="section-three-components">
        <div className="picture">
          <div className="cont-image">
            {image ? (
              <img src={image} alt={skill.title} />
            ) : (
              <div className="text-detail">Loading image...</div>
            )}
          </div>
        </div>
        <div className="second-heading-text-div">
          <MotionWrapper>
            {skill.skills.map((skillSentence, index) => (
              <p key={index} className="text-detail">
                {skillSentence}
              </p>
            ))}
          </MotionWrapper>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
