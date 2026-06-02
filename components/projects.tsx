"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [showMore, setShowMore] = useState(false);
  const visibleProjects = showMore ? projectsData : projectsData.slice(0, 3);

  return (
    <section ref={ref} id="projects" className="w-full scroll-mt-28 mb-20">
      <SectionHeading>Featured Projects</SectionHeading>
      <div className="flex flex-col items-center">
        {visibleProjects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
        {projectsData.length > 3 && (
          <button
            type="button"
            onClick={() => setShowMore((current) => !current)}
            className="mt-4 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-800 transition hover:scale-105 hover:bg-gray-50 dark:border-white/20 dark:bg-white/10 dark:text-white"
          >
            {showMore ? "Show less" : "View more"}
          </button>
        )}
      </div>
    </section>
  );
}
