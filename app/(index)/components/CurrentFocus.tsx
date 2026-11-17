import { cn } from "@/app/utils/cn";
import React from "react";

type CurrentFocusProps = {
  className?: string;
};

const CurrentFocus = ({ className }: CurrentFocusProps) => {
  return (
    <div className={cn("flex flex-col gap-10 ", className)}>
      <h2 className="font-inter font-medium text-base">Current Focus</h2>
      <p>
        I&apos;m building Tally, a financial AI assistant and smart workspace.
        I own product design and engineering across web, mobile and backend,
        including streaming chat, integrations and document review workflows.
      </p>
      <p>
        I&apos;m interested in contributing to early engineering teams building
        useful AI products, with ownership across product and engineering.
      </p>
      <p>
        Outside work, I create animated series, play tennis and hit the gym.
      </p>
    </div>
  );
};

export default CurrentFocus;
