import company1 from "../../public/opslyft_logo.jpeg";
import company2 from "../../public/c1.jpeg";
import RepTrackerImg from "../../public/RepTrackerImg.jpg";
import ReactWriteImg from "../../public/ReactWriteImg.jpeg";
import TweeterSphereImg from "../../public/TweeterSphereImg.jpeg";
import GatherLyImg from "../../public/GatherLy.jpeg";

export const PROFILE = {
  name: "Rhythm Rawat",
  city: "India 🇮🇳",
  greet: "Nice to Meet you!",
};

export const PROJECTS = [
  // {
  //   name: "ReactWrite",
  //   image: ReactWriteImg,
  //   url: "https://react-write-lemon.vercel.app",
  // },
  {
    name: "GatherLy",
    image: GatherLyImg,
    url: "https://gather-ly.vercel.app/",
  },
  {
    name: "RepTracker-AI",
    image: RepTrackerImg,
    url: "https://github.com/Rhythm1821/RepTrackerAI",
  },
  // {
  //   name: "TweeterSphere",
  //   image: TweeterSphereImg,
  //   url: "https://tweeter-sphere.vercel.app/", // https://tweetersphere.onrender.com 
  // },
];

export const SKILLS = [
  "Python, JavaScript, Typescript",
  "React, Next.js",
  "Node.js, Express, Django",
  "PostgreSQL, MySQL, MongoDB",
  "Pytorch, Scikit-learn ",
  "AWS",
];

export const EXPERIENCES = [
  {
    img: company1,
    year: "March 2025 - Sept 2025",
    role: "Software Engineer intern",
    company: "Opslyft",
    description: `Delivered and optimized full-stack features for enterprise cloud platforms, integrating GraphQL, React, and PostgreSQL to enhance scalability, performance, and multi-cloud support`,
    technologies: ["TypeScript", "React.js", "GraphQL", "Node.js", "DynamoDB", "ClickHouse"],
  },
  {
    img: company2,
    year: "Sept 2024 - Jan 2025",
    role: "Software Engineer",
    company: "Freelancer",
    description: `Developed and deployed a full-stack travel agency platform using Next.js with secure authentication, Razorpay integration, and VPS deployment optimized with Nginx and PM2.`,
    technologies: ["Next.js", "React.js", "MongoDB"],
  },
  {
    img: company2,
    year: "Jan 2024 - Jun 2024",
    role: "Backend Developer intern",
    company: "Popdot Co.",
    description: `Developed and maintained ORM classes for databases using Django models. Designed and implemented RESTful APIs using Django, ensuring robust and scalable backend services.`,
    technologies: ["Django", "Python", "REST API", "Docker"],
  }
];
