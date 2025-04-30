import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  subheading,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className="w-full sm:w-auto"
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-[80px] items-center relative">
        <div className="h-[1px] left-1/4 right-1/2 bg-[#915EFF] absolute top-1/2 hidden sm:block"></div>
        <div className="w-4 h-4 rounded-full border-[3px] border-[#915EFF] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>

        <a
          href={source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full relative justify-center sm:justify-start"
        >
          <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
            <img
              className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_20px_rgba(145,94,255,0.3)] rounded-xl"
              src={image}
              alt={name}
            />

            <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#915EFF] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
              {name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>

        {/* Project Details */}
        <div className="w-full">
          <h3 className="text-[#915EFF] font-bold text-2xl md:text-4xl">
            {name}
          </h3>
          {subheading && (
            <span className="text-secondary text-[16px] font-semibold">
              {subheading}
            </span>
          )}

          <p className="text-justify text-sm md:text-base mt-2 text-white">
            {description}
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base text-secondary hover:text-[#915EFF] hover:border-[#915EFF] transition duration-200"
              >
                #{tag.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through examples
          of my work. Each project is briefly described with links to code
          repositories in it.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-col gap-16">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
