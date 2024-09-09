import company1 from "../../public/c1.jpeg";
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
  {
    name: "ReactWrite",
    image: ReactWriteImg,
    url: "https://react-write-lemon.vercel.app",
  },
  {
    name: "GatherLy",
    image: GatherLyImg,
    url: "https://gatherly-v4r2.onrender.com/",
  },
  {
    name: "RepTracker-AI",
    image: RepTrackerImg,
    url: "https://github.com/Rhythm1821/RepTrackerAI",
  },
  {
    name: "TweeterSphere",
    image: TweeterSphereImg,
    url: "https://tweetersphere.onrender.com",
  },
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
    year: "Jan 2024 - Jun 2024",
    role: "Backend Developer intern",
    company: "Popdot Co.",
    description: `Developed and maintained ORM classes for databases using Django models. Designed and implemented RESTful APIs using Django, ensuring robust and scalable backend services.`,
    technologies: ["Django", "Python", "REST API", "Docker"],
  }
];
