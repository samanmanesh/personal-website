import { cn } from "@/app/utils/cn";
import React from "react";

const experiences = [
  {
    title: "Full-stack engineer & UI/UX wizard ",
    company: "Montra",
    date: [2023, 2024],
    link: "",
  },
  {
    title: "Full-stack engineer & design visionary ",
    company: "BrokerPocket",
    date: [2022, 2023],
    link: "",
  },
  {
    title: "Full-stack engineer & interface crafter ",
    company: "AuditX",
    date: [2020, 2021],
    link: "",
  },
];

type ExperiencesProps = {
  className?: string;
};

const Experiences = ({ className }: ExperiencesProps) => {
  return (
    <div className={cn("flex flex-col gap-7", className)}>
      <h2 className="font-inter font-medium text-base">Experiences</h2>
      <section className="flex flex-col gap-7">
        {experiences.map((experience, index) => (
          <div key={index}>
            <h3 className="font-inter font-medium text-base underline underline-offset-4 decoration-secondary">
              {experience.title}
            </h3>
            <p className="text-base text-secondary font-normal">
              {experience.company}
            </p>
            <p className="text-base text-secondary font-normal">
              {experience.date[0]} - {experience.date[1]}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Experiences;
