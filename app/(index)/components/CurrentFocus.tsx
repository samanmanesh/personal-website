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
      Deepening my understanding of AI and learning how to seamlessly integrate it into functional, user-centric applications.
      </p>
      <p>
      I’m fascinated by AI’s potential to transform digital experiences and am constantly experimenting with ways to make it practical, intuitive, and impactful. 
      </p>
      <p>
      Outside of tech, I find balance through exercise and exploring my love for music—whether it’s producing tracks, playing instruments, or discovering new sounds. It’s a creative outlet that complements my passion for building polished software and experimenting with the magical details of user interfaces.
      </p>
    </div>
  );
};

export default CurrentFocus;
