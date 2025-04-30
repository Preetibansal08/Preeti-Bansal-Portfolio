import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa"; // Import icons from React Icons

const Footer = () => {
  return (
    <motion.div
      className="flex justify-center items-center flex-col"
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <motion.p
        className="text-center text-lg font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        &copy; 2025 Preeti Bansal. All rights reserved.
      </motion.p>
      <motion.p
        className="text-center text-sm mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        Connect with me on
      </motion.p>

      <motion.div
        className="flex justify-center gap-6 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/preetibansal/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500"
        >
          <FaLinkedinIn className="w-6 h-6" />
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/preetibansal08"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500"
        >
          <FaGithub className="w-6 h-6" />
        </a>

        {/* Email Icon */}
        <a
          href="mailto:bansalpreeti805@gmail.com"
          className="text-blue-400 hover:text-blue-500"
        >
          <FaEnvelope className="w-6 h-6" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
