import { cn } from "@/app/utils/cn";
import React from "react";
import Project from "./Project";

const experiences = [
  {
    title: "Goose Party",
    describe: "Founding engineer",
    link: "https://www.gooseparty.gg/",
    date: [2024, 2025],
  },
  {
    title: "Montra",
    describe: "Full-stack engineer & UI/UX wizard ",
    link: "https://montra.com/",
    date: [2023, 2024],
  },
  {
    title: "BrokerPocket",
    describe: "Full-stack engineer & design visionary ",
    link: "https://brokerpocket.com/",
    date: [2022, 2023],
  },
  {
    title: "AuditX",
    describe: "Full-stack engineer & interface crafter ",
    link: "https://www.auditx.ca/",
    date: [2020, 2021],
  },
];

type ExperiencesProps = {
  className?: string;
};

const ProfessionalProjects = ({ className }: ExperiencesProps) => {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <h3 className="font-sohne text-sm text-secondary font-normal">
        Professional
      </h3>
      <section className="flex flex-col gap-7">
        {experiences.map((experience, index) => (
          <Project
            key={index}
            title={experience.title}
            describe={experience.describe}
            link={experience.link}
            // linkType={"external"}
            target={"_blank"}
            date={experience.date}
            icon={true}
          />
        ))}
      </section>
    </div>
  );
};

export default ProfessionalProjects;
