"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { LuGraduationCap, LuBrain, LuCode2, LuRocket } from "react-icons/lu";

const highlights = [
  {
    icon: <LuGraduationCap className="text-xl" />,
    label: "Education",
    value: "B.E. in AI & ML",
    sub: "G.V. Acharya Institute • CGPA 7.33",
    color: "from-violet-500/10 to-violet-500/5 border-violet-200 dark:border-violet-800/40",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    icon: <LuCode2 className="text-xl" />,
    label: "Specialization",
    value: "Full-Stack & Backend",
    sub: "Next.js • FastAPI • PostgreSQL",
    color: "from-sky-500/10 to-sky-500/5 border-sky-200 dark:border-sky-800/40",
    iconColor: "text-sky-600 dark:text-sky-400",
  },
  {
    icon: <LuBrain className="text-xl" />,
    label: "AI Focus",
    value: "AI & ML Integration",
    sub: "Gemini API • AI Systems • LLMs",
    color: "from-emerald-500/10 to-emerald-500/5 border-emerald-200 dark:border-emerald-800/40",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: <LuRocket className="text-xl" />,
    label: "Currently",
    value: "Software Intern",
    sub: "Arkaana.ai • Pune, Maharashtra",
    color: "from-rose-500/10 to-rose-500/5 border-rose-200 dark:border-rose-800/40",
    iconColor: "text-rose-600 dark:text-rose-400",
  },
];

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-10 sm:mb-14 w-full max-w-[62rem] scroll-mt-28"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <div className="grid sm:grid-cols-2 gap-8 items-start">
        {/* Left — text content */}
        <div className="text-left space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            I am a{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Computer Engineering student
            </span>{" "}
            specializing in{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Artificial Intelligence and Machine Learning
            </span>
            . I have strong expertise in backend and full-stack development,
            architecting scalable web applications using{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Next.js, TypeScript, Node.js, FastAPI, and PostgreSQL
            </span>
            .
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            I am passionate about{" "}
            <span className="italic text-gray-900 dark:text-white">
              RESTful APIs, multi-tenant systems, authentication workflows, and
              AI-integrated platforms
            </span>
            . I thrive at the intersection of{" "}
            <span className="underline decoration-dotted">
              system design, performance optimization, and production-grade
              deployments
            </span>
            .
          </p>

          {/* Leetcode stats chip */}
          <div className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white/10 text-white text-xs font-bold px-4 py-2 rounded-full mt-1">
            🕸️{" "}
            <span>
              150+ LeetCode problems solved
            </span>
          </div>
        </div>

        {/* Right — highlight cards */}
        <div className="grid grid-cols-2 gap-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i }}
              className={`bg-gradient-to-br ${item.color} border rounded-2xl p-4 flex flex-col gap-1.5 hover:-translate-y-1 hover:shadow-md transition-all`}
            >
              <span className={`${item.iconColor}`}>{item.icon}</span>
              <span className="text-[0.6rem] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">
                {item.label}
              </span>
              <span className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                {item.value}
              </span>
              <span className="text-[0.65rem] text-gray-500 dark:text-gray-400 leading-snug">
                {item.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
