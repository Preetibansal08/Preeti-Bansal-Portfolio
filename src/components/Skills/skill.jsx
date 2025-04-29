import React from 'react';
import "./skill.scss";
import html from "../../assets/skills/html.png";
import cpp from "../../assets/skills/cpp.png";
import js from "../../assets/skills/js.png";
import python from "../../assets/skills/python.png";
import mern from "../../assets/skills/mern.png";
import mysql from "../../assets/skills/mysql.png";
import github from "../../assets/skills/github-logo.png";
import react from "../../assets/skills/react.png";
import tailwind from "../../assets/skills/tailwind.png"
import bootstrap from "../../assets/skills/bootstrap.png"
import git from "../../assets/skills/git.png"
import gsap from "../../assets/skills/gsap.png"
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";


const centerPosition = { x: 0, y: 0 };

const textVariants = {
    initial:(custom) =>( {
        opacity: 0,
        x: custom.x,
        y: custom.y,
    }),
    animate: {
        opacity: 1,
        x: centerPosition.x,
        y: centerPosition.y,
        transition: {
            duration: 4,
            staggerChildren: 0.1,
        },
    },
};

function Skill() {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start("animate");
        } else {
            controls.start("initial");
        }
    }, [controls, inView]);

    return (
        <motion.div className='skills' ref={ref} initial="initial" animate={controls}>
            <motion.div className="stars"></motion.div>
            {/* <motion.div
                className='solar-logo html'
                variants={textVariants}
                custom={{ x: '85px', y: '400px' }}
            >
                <motion.img src={html} alt='HTML' className='solar-img' />
            </motion.div> */}
            <motion.div
                className='solar-logo cpp'
                variants={textVariants}
                custom={{ x: '-400px', y: '70px' }}
            >
                <motion.img src={cpp} alt='C++' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo js'
                variants={textVariants}
                custom={{ x: '45%', y: '30%' }}
            >
                <motion.img src={js} alt='JavaScript' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo python'
                variants={textVariants}
                custom={{ x: '330px', y: '-150px' }}
            >
                <motion.img src={python} alt='Python' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo mern'
                variants={textVariants}
                custom={{ x: '100px', y: '-100px' }}
            >
                <motion.img src={mern} alt='MERN' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo react'
                variants={textVariants}
                custom={{ x: '700px', y: '20px' }}
            >
                <motion.img src={react} alt='reactjs' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo bootstrap'
                variants={textVariants}
                custom={{ x: '-550px', y: '400px' }}
            >
                <motion.img src={bootstrap} alt='Bootstrap' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo html'
                variants={textVariants}
                custom={{ x: '85px', y: '400px' }}
            >
                <motion.img src={html} alt='html' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo tailwind'
                variants={textVariants}
                custom={{x: '-200px', y: '-100px'}}
            >
                <motion.img src={tailwind} alt='tailwind' className='solar-img' />
            </motion.div>
            {/* <motion.div
                className='solar-logo sql'
                variants={textVariants}
                custom={{ x: '430px', y: '70px' }}
            >
                <motion.img src={sql} alt='SQL' className='solar-img' />
            </motion.div> */}
            <motion.div
                className='solar-logo mysql'
                variants={textVariants}
                custom={{ x: '-90px', y: '200px' }}
            >
                <motion.img src={mysql} alt='MySQL' className='solar-img' />
            </motion.div>
            
            <motion.div
                className='solar-logo github'
                variants={textVariants}
                custom={{ x: '600px', y: '-350px' }}
            >
                <motion.img src={github} alt='GitHub' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo gsap'
                variants={textVariants}
                custom={{ x: '1000px', y: '200px' }}
            >
                <motion.img src={gsap} alt='gsap' className='solar-img' />
            </motion.div>
            <motion.div
                className='solar-logo git'
                variants={textVariants}
                custom={{ x: '-90px', y: '-350px' }}
            >
                <motion.img src={git} alt='git' className='solar-img' />
            </motion.div>
        </motion.div>
    );
}

export default Skill;