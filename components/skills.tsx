"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.03 * index },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-16 w-full scroll-mt-28 sm:mb-20"
    >
      <SectionHeading>Technical Skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className="flex items-center gap-1.5 bg-white border border-gray-200 shadow-sm rounded-lg px-3 py-1.5 dark:bg-black/40 dark:border-white/10 dark:text-white/80 hover:-translate-y-0.5 hover:shadow-md transition-all cursor-default"
          >
            <span className="text-base text-gray-500 dark:text-gray-400 flex-shrink-0">
              {skill.icon}
            </span>
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {skill.name}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
