import { cn } from "@/app/utils/cn";
import React from "react";

type ContactProps = {
  className?: string;
};

const Contact = ({ className }: ContactProps) => {
  return (
    <div className={cn("flex flex-col gap-7", className)}>
      <h2 className="font-inter font-medium text-base">Contact</h2>

      <p>
        Reach me at @
        <a
          href="https://x.com/saman_manesh"
          className="underline decoration-secondary underline-offset-4"
        >
          saman_manesh
        </a>{" "}
        or{" "}
        <a
          href="mailto:samansbm7@gmail.com"
          className="underline decoration-secondary underline-offset-4"
        >
          samansbm7@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Contact;
