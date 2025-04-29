import React from 'react';
import { motion } from "framer-motion";
import "./Navbar.scss";
import github from "../../assets/skills/github.png";
import mail from "../../assets/skills/gmail-logo.png";
import linkedin from "../../assets/skills/linkedin.png";
import Sidebar from '../Sidebar/Sidebar';
// import cattyy from "../../assets/cattyy.png";
import { useState } from 'react';

const clickVariants = {
  initial: {
      y: 0,
      opacity: 0,
  },
  animate: {
      y: 0,
      opacity: 1,
      transition: {
          duration: 1,
      },
  },
};



function Navbar() {
  const [isClicked, setisClicked] = useState(false);

  return (
    <div className='navbar'>
      <Sidebar />
      {/* <div className='wrapper'>

        <motion.img src={cattyy} alt="" className='cattyy'
           onClick={() => setisClicked(!isClicked)}
           whileTap={{scale:1.1}}
          initial="initial"
          animate={isClicked ? "animate" : "initial"} />

      </div> */}

      <motion.div className='social'>

        <motion.a href="mailto:bansalpreeti805@gmail.com"><motion.img src={mail} alt="mail" className='socialMail'
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} variants={clickVariants}
          initial="initial"
          animate={isClicked ? "animate" : "initial"} /></motion.a>

        <motion.a href="https://github.com/Preetibansal08" target="_blank"><motion.img src={github} alt="github" className='socialGithub'
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} variants={clickVariants}
          initial="initial"
          animate={isClicked ? "animate" : "initial"}  /></motion.a>

        <motion.a href="https://www.linkedin.com/in/bansalpreeti" target="_blank"><motion.img src={linkedin} alt="linkedin" className='socialLinkedin'
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} variants={clickVariants}
          initial="initial"
          animate={isClicked ? "animate" : "initial"} /></motion.a>

      </motion.div>
    </div>
  )
}

export default Navbar
