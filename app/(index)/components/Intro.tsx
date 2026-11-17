import { cn } from "@/app/utils/cn";
import React from "react";

const Intro = ({ className }: { className?: string }) => {
  return (
    <section className={cn("flex flex-col gap-10", className)}>
      <h1 className="font-inter font-medium">Sam Sobhan</h1>
      <p>
        <span className="font-newsreader italic text-lg">
          Founding engineer building AI products.{" "}
        </span>
        I&apos;m Sam, a Toronto-based software engineer with 5+ years of
        experience in small startup teams. I work across product decisions,
        interfaces, backend services and AI workflows, taking ideas from early
        scope through implementation and iteration.
      </p>
      <p>
        My main tools are React, TypeScript, Next.js, Python and PostgreSQL.
        I care about thoughtful design, sound technical tradeoffs and software
        that is reliable and clear to use.
      </p>
    </section>
  );
};

export default Intro;
