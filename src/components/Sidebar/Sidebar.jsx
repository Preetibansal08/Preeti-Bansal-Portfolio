import React from 'react';
import Links from "../Sidebar/Links/Links";
import ToggleButtons from "../Sidebar/ToggleButtons/ToggleButtons";
import "./Sidebar.scss";
import {motion} from  "framer-motion";
import { useState } from 'react';

function Sidebar() {

  const [open,setOpen]=useState(false)

  const variants={
    open:{
      clipPath:"circle(1200px at 50px 50px)",
      transition:{
        type:"spring",
        stiffness:25,
        },
    },
    closed:{
      clipPath:"circle(30px at 50px 50px)",
      transition:{
        delay:0.5,
      type:"spring",
      stiffness:400,
       damping:50,
      }
    }
  }

  return (
    <motion.div className='sidebar' animate={open ?"open": "closed"}>
      <motion.div className='bg' variants={variants}>
        <Links/>
      </motion.div>
      <ToggleButtons setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
