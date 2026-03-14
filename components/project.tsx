"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  demoUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-5 last:mb-0 w-full max-w-[52rem]"
    >
      <section
        className="
          bg-gray-100 dark:bg-white/10 dark:text-white
          border border-black/5 dark:border-white/10
          rounded-2xl overflow-hidden
          hover:bg-gray-200 dark:hover:bg-white/20
          transition
          flex flex-col sm:flex-row
          sm:group-even:flex-row-reverse
        "
      >
        {/* ── Image (top on mobile, side on desktop) ── */}
        <div className="relative w-full h-48 sm:h-auto sm:w-[45%] flex-shrink-0">
          <Image
            src={imageUrl}
            alt={`${title} screenshot`}
            fill
            quality={85}
            style={{ objectFit: "cover", objectPosition: "top left" }}
            className="transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* ── Text content ── */}
        <div className="flex flex-col justify-between p-5 sm:p-8 sm:w-[55%]">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1.5">
              {title}
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-white/70">
              {description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-gray-700 hover:scale-105 active:scale-100 transition"
              >
                <FaGithub />
                GitHub
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-white border border-gray-300 text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-gray-50 hover:scale-105 active:scale-100 transition dark:bg-white/10 dark:text-white dark:border-white/20"
              >
                <HiExternalLink />
                Live Demo
              </a>
            )}
          </div>

          {/* Tags */}
          <ul className="flex flex-wrap gap-1.5 mt-3">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/70 px-2.5 py-0.5 text-[0.6rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}
