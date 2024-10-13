import ArrowRightIcon from "@/app/assets/ArrowRightIcon";
import { ExternalLink } from "@/app/components/ExternalLink";
import Link from "next/link";
import React from "react";

type ProjectProps = {
  title: string;
  describe: string;
  link: string;
  date?: number[];
  icon?: boolean;
  internalLink?: string;
  imageHref?: string;
};

const Project = ({ title, describe, link, icon, internalLink, imageHref }: ProjectProps) => {
  return (
    // <Link href={link} className={`w-40`}>
    <ExternalLink href={link} className={`w-40`} internalLink={internalLink} imageHref={imageHref}>
      <div className="flex flex-col gap-2 ">
        <div className="font-inter font-medium text-base  decoration-secondary flex items-center justify-between gap-2 border-b border-secondary mr-auto ">
          <span>{title}</span>

          {icon && <ArrowRightIcon className="dark:fill-white fill-secondary" />}
        </div>
        <p className="text-base text-secondary font-normal">{describe}</p>
      </div>
    {/* // </Link> */}
    </ExternalLink>
  );
};

export default Project;
