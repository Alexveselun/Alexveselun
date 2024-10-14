// MotionWrapper.js
import React from "react";
import { motion } from "framer-motion";

const MotionWrapper = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 }, // Move down slightly
    visible: { opacity: 1, y: 0 },  // Move to original position
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 2 }} // Adjust duration as needed
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
