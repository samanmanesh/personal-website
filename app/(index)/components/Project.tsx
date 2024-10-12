import ArrowIcon from "@/app/assets/ArrowIcon";
import Link from "next/link";
import React from "react";

type ProjectProps = {
  title: string;
  describe: string;
  link: string;
  date?: number[];
  icon?: boolean;
};

const Project = ({ title, describe, link, icon }: ProjectProps) => {
  return (
    <Link href={link} className={`max-w-40 `}>
      <div className="flex flex-col gap-2 ">
        <div className="font-inter font-medium text-base  decoration-secondary flex items-center justify-between gap-2 border-b border-secondary mr-auto ">
          <span>{title}</span>

          {icon && <ArrowIcon />}
        </div>
        <p className="text-base text-secondary font-normal">{describe}</p>
      </div>
    </Link>
  );
};

export default Project;
