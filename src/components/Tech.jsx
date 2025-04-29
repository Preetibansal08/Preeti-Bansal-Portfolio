import React, { useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const TechBall = ({ name, icon }) => {
  const [showName, setShowName] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isVisible = showName || isHovered;

  return (
    
    <div
      className="w-28 h-28 flex flex-col items-center cursor-pointer relative"
      onClick={() => setShowName((prev) => !prev)}
      onTouchStart={() => setShowName((prev) => !prev)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BallCanvas icon={icon} />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 10 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-white text-sm font-medium bg-black bg-opacity-40 px-2 py-1 rounded shadow-lg absolute top-full z-10"
          >
            {name}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Tech = () => (
  <div className="flex flex-row flex-wrap justify-center gap-10">
    {technologies.map(({ name, icon }) => (
      <TechBall key={name} name={name} icon={icon} />
    ))}
  </div>
);

export default SectionWrapper(Tech, "");
