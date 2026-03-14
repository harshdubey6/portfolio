import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 sm:px-8">
      <div className="w-full max-w-[62rem] flex flex-col items-center">
        <Intro />
        <SectionDivider />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}

