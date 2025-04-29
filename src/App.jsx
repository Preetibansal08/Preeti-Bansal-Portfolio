import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, StarsCanvas, Works } from './components';
import Parallax from './components/parallax/parallax';
import Skill from './components/Skills/skill';
import Navbar from "./components/Navbar/Navbar";
import Skills from './components/Skills';


const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <section id="Home"><Hero/></section>
        </div>
         <section  className="w-full h-[100vh]">
         <Parallax content="An Insight into My World" type="about" />
        </section>
      
        <section id ="About"><About/></section>
       
        <section className="w-full h-[100vh]">
         <Parallax content="What I have done so far" type="experience" />
        </section>
        <section id ="Experience" ><Experience /></section>
        <section  className="w-full h-[100vh]">
         <Parallax content="Skills" type="skills" />
        </section>
        <section id="Skills"><Skill/></section>
        
        
     
        <section id="Projects"><Works /></section>
        
        <div className="relative z-0">
          <section id="Contact"><Contact /></section>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
