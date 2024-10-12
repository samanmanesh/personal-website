import { cn } from "@/app/utils/cn";
import React from "react";
import FeaturedProject from "./FeaturedProject";
import PersonalProjects from "./PersonalProjects";
import ProfessionalProjects from "./ProfessionalProjects";

type ProjectProps = {
  className?: string;
};

const Projects = ({ className }: ProjectProps) => {
  return (
    <div className={cn("flex flex-col gap-7", className)}>
      <h2 className="font-inter font-medium text-base">Projects</h2>
      <FeaturedProject />
      <section className="flex justify-between gap-4 ">
        <PersonalProjects />
        <ProfessionalProjects />
      </section>
    </div>
  );
};

export default Projects;
