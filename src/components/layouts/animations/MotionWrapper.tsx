import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface MotionWrapperProps {
  children: ReactNode; 
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 }, // Переміщення вниз
    visible: { opacity: 1, y: 0 },  // Повернення до початкового положення
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 2 }} // Налаштування тривалості анімації
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
