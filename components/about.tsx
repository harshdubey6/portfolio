"use client";

import React from "react";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <section id="about" className="mb-10 w-full max-w-[62rem] scroll-mt-28 sm:mb-14">
      <SectionHeading>About me</SectionHeading>

      <div className="space-y-4 text-left">
        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 sm:text-base">
          I am a computer engineering student specializing in Artificial Intelligence and Machine Learning,
          with a strong focus on backend and full-stack development.
        </p>
        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 sm:text-base">
          I build scalable applications using Next.js, TypeScript, Node.js, FastAPI, and PostgreSQL,
          and I enjoy solving practical problems with clean architecture.
        </p>
        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 sm:text-base">
          I have solved 150+ LeetCode problems and continue to improve across system design,
          API development, and AI-integrated products.
        </p>
      </div>
    </section>
  );
}
