import React from "react";
import Project from "./Project";
import { cn } from "@/app/utils/cn";
import { link } from "fs";

type PersonalProjectsProps = {
  className?: string;
};
const projects = [
  {
    title: "Q&AI",
    describe: "Questions generator with power of Ai",
    link: "/q-and-ai",
  },
  {
    title: "Samitone",
    describe: "Simple browser-based audio sequencer app",
    // link: "https://samanmanesh.github.io/samitone/",
    link: "/samitone",
  },
  {
    title: "Hilarion",
    describe: "Dynamic social media web application",
    // link: "https://hilarion-socialmedia-client.vercel.app/login",
    link: "/hilarion",
    
  },
];

const PersonalProjects = (className: PersonalProjectsProps) => {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <h3 className="font-sohne text-sm text-secondary font-normal">Personal</h3>
      <section className="flex flex-col gap-7">
        {projects.map((data, index) => (
          <Project
            key={index}
            title={data.title}
            describe={data.describe}
            link={data.link}
          />
        ))}
      </section>
    </div>
  );
};

export default PersonalProjects;
