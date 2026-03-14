"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-10 w-full text-center sm:text-left sm:mb-4 scroll-mt-[100rem] flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 pt-2 sm:pt-4"
    >
      <div className="flex items-center justify-center flex-shrink-0">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile-pic.jpeg"
              alt="Harsh Dubey portrait"
              width="200"
              height="200"
              quality="95"
              priority={true}
              className="h-36 w-36 sm:h-48 sm:w-48 rounded-full object-cover border-[0.3rem] border-white dark:border-gray-800 shadow-lg"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-2 right-2 text-3xl sm:text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-grow">
        <motion.div
          className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-3"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="px-4 py-1.5 text-[0.65rem] font-bold tracking-widest uppercase border border-gray-300 dark:border-gray-600 rounded-full dark:text-white/80 transition-colors hover:bg-gray-100 dark:hover:bg-white/10">
            CS Student & AI Enthusiast
          </span>
          <span className="px-4 py-1.5 text-[0.65rem] font-bold tracking-widest uppercase border border-gray-300 dark:border-gray-600 rounded-full flex items-center gap-2 dark:text-white/80 transition-colors hover:bg-gray-100 dark:hover:bg-white/10">
            🕸️ Solved 150+ Leetcode
          </span>
        </motion.div>

        <motion.h1
          className="mb-3 text-2xl font-medium !leading-[1.2] sm:text-3xl lg:text-4xl text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          I'm <span className="italic font-bold font-serif">Harsh</span>,{" "}
          <span className="whitespace-nowrap">Backend & AI Developer</span>
        </motion.h1>

        <motion.p
          className="mb-6 text-sm sm:text-base text-gray-700 dark:text-gray-300 !leading-relaxed max-w-[30rem] italic"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          "Computer Engineering student building{" "}
          <span className="bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200 px-1.5 py-0.5 rounded-md font-semibold not-italic">
            Web Applications
          </span>{" "}
          and{" "}
          <span className="bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200 px-1.5 py-0.5 rounded-md font-semibold not-italic">
            AI Systems
          </span>{" "}
          that stick with impact."
        </motion.p>

        <motion.div
          className="flex flex-row flex-wrap items-center justify-center sm:justify-start gap-2.5 text-sm font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-6 py-2.5 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-white px-6 py-2.5 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white"
            href="https://drive.google.com/file/d/1aJVyfzxJnCAbNLt2YVbmIhHiKw33V4B-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <a
            className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center justify-center rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://linkedin.com/in/harshdubey6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-3 text-gray-700 flex items-center justify-center text-[1.2rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/harshdubey6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
