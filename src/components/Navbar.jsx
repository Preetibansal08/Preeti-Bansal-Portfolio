// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { close, logo, menu } from '../assets';
// import { navLinks } from '../constants';
// import { styles } from '../styles';

// const Navbar = () => {
//   const [active, setActive] = useState('');
//   const [toggle, setToggle] = useState(false);

//   const toggleResume = () => {
//     const resumeUrl = '/Resume.pdf';
//     window.open(resumeUrl);
//   };

//   useEffect(() => {
//     if (toggle) {
//       setActive('');
//     }
//   }, [toggle]);

//   return (
//     <nav
//       className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-50 bg-transparent backdrop-blur-md shadow-md`}
//     >
//       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
//         <Link
//           to="/"
//           className="flex items-center gap-2"
//           onClick={() => {
//             setActive('');
//             window.scrollTo(0, 0);
//           }}
//         >
//           <p className="text-white text-[20px] font-bold cursor-pointer flex">
//             Preeti&nbsp;
//             <span className="sm:block hidden"> Bansal</span>
//           </p>
//         </Link>

//         {/* Desktop Nav */}
//         <ul className="hidden sm:flex flex-row gap-6 sm:gap-12">
//           {navLinks.map((link) => (
//             <li
//               key={link.id}
//               className={`${
//                 active === link.title ? 'text-white' : 'text-white'
//               } hover:text-white text-[18px] sm:text-[20px] font-medium cursor-pointer`}
//               onClick={() => setActive(link.title)}
//             >
//               <a href={`#${link.id}`}>{link.title}</a>
//             </li>
//           ))}
//           <li className="text-white hover:text-white text-[18px] sm:text-[20px] font-medium cursor-pointer">
//             <button onClick={toggleResume}>Resume</button>
//           </li>
//         </ul>

//         {/* Mobile Menu Icon */}
//         <div className="sm:hidden flex flex-1 justify-end items-center z-50">
//           <img
//             src={toggle ? close : menu}
//             alt="menu"
//             className="w-[28px] h-[28px] object-contain cursor-pointer"
//             onClick={() => setToggle(!toggle)}
//           />
//         </div>
//       </div>

//       {/* Fullscreen Mobile Overlay Menu */}
//       {toggle && (
//         <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center gap-10">
//           <ul className="flex flex-col items-center gap-8">
//             {navLinks.map((link) => (
//               <li
//                 key={link.id}
//                 className="text-white text-2xl font-semibold cursor-pointer"
//                 onClick={() => {
//                   setActive(link.title);
//                   setToggle(false);
//                   const section = document.getElementById(link.id);
//                   section?.scrollIntoView({ behavior: 'smooth' });
//                 }}
//               >
//                 {link.title}
//               </li>
//             ))}
//             <li className="text-white text-2xl font-semibold">
//               <button onClick={toggleResume}>Resume</button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
