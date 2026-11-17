import { cn } from "@/app/utils/cn";
import React from "react";
import Project from "./Project";
import Link from "next/link";

const experiences = [
  {
    title: "Tally",
    describe: "Founder & full-stack engineer",
    link: "https://tallyhub.ai/",
    date: [2026],
  },
  {
    title: "Bogi",
    describe: "Founding engineer",
    link: "https://usebogi.com/",
    date: [2025, 2026],
  },
  {
    title: "Lightpage",
    describe: "Product engineer (contract)",
    link: "https://lightpage.com/",
    date: [2025],
  },
  {
    title: "Goose Party",
    describe: "Founding engineer",
    link: "https://www.gooseparty.gg/",
    date: [2024, 2025],
  },
  {
    title: "Montra",
    describe: "Full-stack engineer",
    link: "https://montra.com/",
    date: [2023, 2024],
  },
  {
    title: "BrokerPocket",
    describe: "Full-stack engineer & designer",
    link: "https://brokerpocket.com/",
    date: [2022, 2023],
  },
  {
    title: "AuditX",
    describe: "Full-stack engineer & designer",
    link: "https://www.auditx.ca/",
    date: [2021, 2022],
  },
];

type ExperiencesProps = {
  className?: string;
};

const ProfessionalProjects = ({ className }: ExperiencesProps) => {
  return (
    <div className={cn("flex min-w-0 w-full flex-col gap-6", className)}>
      <h3 className="font-sohne text-sm text-secondary font-normal">
        Professional
      </h3>
      <section className="flex flex-wrap justify-between gap-x-4 gap-y-7">
        {experiences.map((experience) => (
          <Project
            key={experience.title}
            title={experience.title}
            describe={experience.describe}
            link={experience.link}
            target={experience.link.startsWith("/") ? "_self" : "_blank"}
            date={experience.date}
            icon={true}
          />
        ))}
      </section>
      <Link href="/work" className="self-end text-right text-sm">
        Explore my engineering work &rarr;
      </Link>
    </div>
  );
};

export default ProfessionalProjects;
