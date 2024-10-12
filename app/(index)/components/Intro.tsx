import { cn } from "@/app/utils/cn";
import React from "react";


const Intro = ({className}: {
  className?: string;
}) => {
  return (
    <section className={cn("flex flex-col gap-7", className)}>
      <h1 className="font-inter font-medium text-base ">Saman Manesh</h1>
      <p>
        <span className="font-newsreader italic text-[1.0625rem]">Software developer & designer. </span>Architecting fluid interfaces. Delivering elegant, high-performance
        software. Adding a touch of wonder to every interaction. I believe that
        great design goes beyond aesthetics—it&apos;s about crafting experiences
        that feel natural, intuitive, and seamless.
      </p>
      <p>
        My focus is on blending clean code with thoughtful design, creating
        digital experiences that are not only functional but also a joy to use.
      </p>
    </section>
  );
};

export default Intro;
