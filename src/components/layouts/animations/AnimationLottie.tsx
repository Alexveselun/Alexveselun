import React, { useRef, useEffect } from "react";
import Lottie from "lottie-react";

interface DisplayLottieProps {
  animationPicture: object;
}

const SplashAnimationLottie: React.FC<DisplayLottieProps> = ({ animationPicture }) => {
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(10); // Set animation speed
    }
  }, []);

  return (
    <Lottie
      animationData={animationPicture}
      lottieRef={lottieRef}
      loop={true}
      autoplay={true}
    />
  );
};

export default SplashAnimationLottie;
