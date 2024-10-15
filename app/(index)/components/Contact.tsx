import { ExternalLink } from "@/app/components/ExternalLink";
import { cn } from "@/app/utils/cn";
import Link from "next/link";
import React from "react";

type ContactProps = {
  className?: string;
};

const Contact = ({ className }: ContactProps) => {
  return (
    <div className={cn("flex flex-col gap-7", className)}>
      <h2 className="font-inter font-medium text-base">Contact</h2>
      <div className="flex gap-1 ">
        Reach me at
        <ExternalLink
          link="https://x.com/saman_manesh"
          className="text-base text-primary font-normal "
          // target="_blank"
          target="_blank"
        >
          @saman_manesh
        </ExternalLink>
        <span> or </span>
        <ExternalLink
          // href="mailto:samansbm7@gmail.com"
          link="mailto:samansbm7@gmail.com "
          // className="underline decoration-secondary underline-offset-4"
        >
          samansbm7@gmail.com
        </ExternalLink>
      </div>
    </div>
  );
};

export default Contact;
