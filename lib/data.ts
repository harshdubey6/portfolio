import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import krishiaiImg from "@/public/krishiai.png";
import carRentalImg from "@/public/car-rental.png";
import swasthImg from "@/public/swasth.png";
import mediumImg from "@/public/medium.png";

import {
  SiTypescript, SiJavascript, SiPython, SiCplusplus,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiFastapi, SiTailwindcss, SiMongodb, SiPostgresql,
  SiMysql, SiAmazonaws, SiCloudflare, SiDocker, SiGit
} from "react-icons/si";
import { BsDatabaseFill } from "react-icons/bs";
import { TbApi } from "react-icons/tb";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Engineering in AI & ML",
    location: "Mumbai, Maharashtra",
    description:
      "Studying at G.V. Acharya Institute of Engineering & Technology. Active in Competitive Programming with 150+ LeetCode problems solved.",
    cgpa: "CGPA: 7.33",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2022 - Jun 2026",
  },
  {
    title: "Software Intern",
    location: "Pune, Maharashtra",
    description:
      "Architected and contributed to a scalable multi-tenant HR management platform at Arkaana.ai using Next.js and FastAPI. Developed RESTful APIs and implemented Supabase authentication.",
    cgpa: "",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2026 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "KrishiAI",
    description:
      "AI-driven crop diagnosis system leveraging Gemini API to analyze plant images and generate disease predictions with confidence scoring.",
    tags: ["Next.js", "TypeScript", "Gemini API", "Tailwind CSS"],
    imageUrl: krishiaiImg,
    githubUrl: "https://github.com/harshdubey6/krishiai",
    demoUrl: "https://aikrishi.vercel.app/login",
  },
  {
    title: "Car Rental Platform",
    description:
      "Engineered a full-stack rental marketplace supporting User, Vendor, and Admin roles with secure access control and date-range conflict detection logic.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    imageUrl: carRentalImg,
    githubUrl: "https://github.com/harshdubey6/car-rental",
    demoUrl: "https://carrental-pr.vercel.app/",
  },
  {
    title: "SwasthAI",
    description:
      "Personalized diet recommendation engine using Gemini API based on user health metrics and goals with macro tracking.",
    tags: ["Next.js", "Supabase", "Gemini API"],
    imageUrl: swasthImg,
    githubUrl: "https://github.com/harshdubey6/swasthai",
    demoUrl: "https://aiswasth.vercel.app/",
  },
  {
    title: "Blogging Platform",
    description:
      "Built a distributed blogging application utilizing Cloudflare Workers for edge-based backend execution with JWT authentication and schema validation.",
    tags: ["React", "TypeScript", "Cloudflare Workers", "Prisma", "PostgreSQL"],
    imageUrl: mediumImg,
    githubUrl: "https://github.com/harshdubey6/medium-blog",
    demoUrl: "https://harshdubey6-blogging-medium.vercel.app/signin",
  },
] as const;

export const skillsData = [
  { name: "TypeScript", category: "Language", icon: React.createElement(SiTypescript) },
  { name: "JavaScript", category: "Language", icon: React.createElement(SiJavascript) },
  { name: "Python", category: "Language", icon: React.createElement(SiPython) },
  { name: "C/C++", category: "Language", icon: React.createElement(SiCplusplus) },
  { name: "SQL", category: "Database", icon: React.createElement(BsDatabaseFill) },
  { name: "React.js", category: "Frontend", icon: React.createElement(SiReact) },
  { name: "Next.js", category: "Frontend", icon: React.createElement(SiNextdotjs) },
  { name: "Node.js", category: "Backend", icon: React.createElement(SiNodedotjs) },
  { name: "Express.js", category: "Backend", icon: React.createElement(SiExpress) },
  { name: "FastAPI", category: "Backend", icon: React.createElement(SiFastapi) },
  { name: "Tailwind", category: "Frontend", icon: React.createElement(SiTailwindcss) },
  { name: "MongoDB", category: "Database", icon: React.createElement(SiMongodb) },
  { name: "PostgreSQL", category: "Database", icon: React.createElement(SiPostgresql) },
  { name: "MySQL", category: "Database", icon: React.createElement(SiMysql) },
  { name: "AWS", category: "Cloud", icon: React.createElement(SiAmazonaws) },
  { name: "Cloudflare", category: "Cloud", icon: React.createElement(SiCloudflare) },
  { name: "Docker", category: "DevOps", icon: React.createElement(SiDocker) },
  { name: "Git", category: "DevOps", icon: React.createElement(SiGit) },
] as const;
