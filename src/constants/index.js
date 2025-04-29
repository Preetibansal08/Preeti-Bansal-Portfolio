import {
 
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  threejs,
  DSA,
  MERN,
  AI,
  gitGithub,
  gfg,
  HandAura,
  sensai
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience ",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "MERN Stack Developer", icon: MERN },
  { title: "Data Structures and Algorithms", icon: DSA },

  { title: "Git & GitHub", icon: gitGithub },
  { title: "AI & ML enthusiastic", icon: AI },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
	{
		title: "bansalprw3c9",
		company_name: "GeeksforGeeks",
		icon: gfg,
		iconBg: "#383E56",
		date: "100+ Questions",
		points: [
			" Achieved a contest rating of 1700+ and secured the 3⭐ on GFG",
			"While solving problems on GeeksforGeeks, I have learned how to understand the core of complex problems and approach Data Structures and Algorithms questions effectively. ",
		],
		link: "https://www.geeksforgeeks.org/user/bansalprw3c9/",
	},
	{
    title: "Founder - HandAura",
    company_name: "RideHack24 by JIIT Noida",
    icon: HandAura, 
    iconBg: "#383E56",
    date: "23rd November 2024",
    points: [
    "Founded HandAura, an e-commerce platform focused on promoting and selling authentic Indian handmade crafts.",
		"Selected for the investment round at RideHack24 from over 200 startup proposals.",
		"Successfully presented our business model and vision during Phase 3 at JIIT Noida, Sector 62.",
		"Currently working on scaling HandAura to empower artisans and connect them with a global audience through our platform."
    ],
    link: "https://www.linkedin.com/posts/bansalpreeti_startupjourney-handaura-ridehack24-activity-7277383124542484481-HX-k?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpfHAgBBCoDLEPoya0tvGaV-tkTeYnJoFg", // Replace this with your actual LinkedIn post link
  },
];

export const projects = [
  {
    name: "SensAI",
    description:
      "SensAI is an AI-powered career platform that begins by offering deep Industry Insights—helping you identify the most relevant tech stacks to learn based on your role, location, and experience level. From React and Next.js to Docker, Prisma, and AWS, it tailors a growth roadmap using real-time job market trends. Alongside, SensAI provides a smart resume builder, a personalized cover letter generator, and an adaptive interview preparation system—all crafted to align with your skills and industry demands.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Gemini AI", color: "pink-text-gradient" },
      { name: "Prisma", color: "yellow-text-gradient" },
      { name: "Shadcn UI", color: "orange-text-gradient" }
    ],
    image: sensai, // Replace with your actual image reference
    source_code_link: "https://github.com/preetibansal08/SensAI"
  }
  
  
];
