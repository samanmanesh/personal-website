"use client";

import Link from "next/link";
import React from "react";
import { cn } from "../utils/cn";
import ArrowRightIcon from "../assets/ArrowRightIcon";

type ExternalLinkProps = {
  children: React.ReactNode;
  className?: string;
  link: string;
  icon?: boolean;
  internalLink?: string;
  linkType?: "internal" | "external";
  target?: "_blank" | "_self";
};

export const ExternalLink = ({
  children,
  className,
  link,
  icon,
  target = "_blank",
}: ExternalLinkProps) => {
  return (
    <Link
      href={link}
      target={target}
      className={cn(`group no-underline`, className)}
    >
      <div className="flex flex-col gap-2">
        <div className="font-inter font-medium text-base decoration-secondary flex items-center justify-between gap-2 border-b border-neutral-400 mr-auto group-hover:border-primary dark:group-hover:border-white group-hover:drop-shadow-sm ">
          <span className="flex">{children}</span>

          {icon && (
            <ArrowRightIcon className="dark:fill-secondary fill-secondary group-hover:rotate-45 transition-all ease-linear duration-100 dark:group-hover:fill-white group-hover:fill-primary " />
          )}
        </div>
      </div>
    </Link>
  );
};
