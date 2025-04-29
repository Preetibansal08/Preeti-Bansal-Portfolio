import React from 'react';
import github from "../../../assets/skills/github.png";
import mail from "../../../assets/skills/gmail-logo.png";
import linkedin from "../../../assets/skills/linkedin.png";
import {motion} from "framer-motion";


function Links() {

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity:1,
    },
    closed: {
      y: 50,
      opacity:0,
    },
  };

  const items = ["Home", "About","Experience", "Skills", "Projects", "Contact" ];

  return (
    <motion.div className='links'>
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
          {item}
        </motion.a>
      ))}
      {/* <motion.a href="" target="_blank" variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>Resume</motion.a> */}

      
        <motion.div className='social'>

            <motion.a href="mailto:bansalpreeti805@gmail.com"><motion.img src={mail} alt="mail"
             whileHover={{scale:1.1}} whileTap={{scale:0.95}}/></motion.a>

            <motion.a href="https://github.com/Preetibansal08" target="_blank"><motion.img src={github} alt="github"
            whileHover={{scale:1.1}} whileTap={{scale:0.95}} /></motion.a>

            <motion.a href="https://www.linkedin.com/in/bansalpreeti" target="_blank"><motion.img src={linkedin} alt="linkedin"
            whileHover={{scale:1.1}} whileTap={{scale:0.95}} /></motion.a>

        </motion.div>
    </motion.div>
  )
}

export default Links
