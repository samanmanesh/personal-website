import { cn } from "@/app/utils/cn";
import Link from "next/link";
import React from "react";

type ProjectProps = {
  className?: string;
};

const projects = [
  {
    title: "Q&AI",
    describe: "Questions generator with power of Ai",
    link: "",
  },
  {
    title: "Hilarion",
    describe: "Dynamic social media web application",
    link: "",
  },
  {
    title: "Samitone",
    describe: "Simple browser-based audio sequencer app",
    link: "",
  },
];

const Projects = ({ className }: ProjectProps) => {
  return (
    <div className={cn("flex flex-col gap-7", className)}>
      <h2 className="font-inter font-medium text-base">Projects</h2>
      <section className="grid grid-cols-2 gap-7">
        {projects.map((project, index) => (
          <Link
            href={project.link}
            key={index}
            className={`max-w-40 ${index % 2 === 1 && " justify-self-end"} `}
          >
            <div className="flex flex-col gap-2 ">
              <h3 className="font-inter font-medium text-base underline underline-offset-4 decoration-secondary">
                {project.title}
              </h3>
              <p className="text-base text-secondary font-normal">
                {project.describe}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Projects;
