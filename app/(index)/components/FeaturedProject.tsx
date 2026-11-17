import { cn } from "@/app/utils/cn";
import Link from "next/link";
import React from "react";

type SelectedProjectProps = {
  className?: string;
};

const FeaturedProject = ({ className }: SelectedProjectProps) => {
  return (
    <section className={cn("flex flex-col gap-6 ", className)}>
      <h3 className="font-sohne text-sm text-secondary font-normal">
        Featured
      </h3>
      <Link
        href="/work"
        className="no-underline flex flex-col gap-5 rounded-lg border border-black/10 dark:border-white/15 p-6 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
      >
        <span className="font-newsreader italic text-2xl">
          AI products, from interface to backend.
        </span>
        <p className="text-secondary">
          Tally&apos;s financial AI workspace, Bogi&apos;s assistant integrations,
          semantic search at Lightpage and real-time systems at Goose Party.
        </p>
        <span className="text-sm">Explore my engineering work &rarr;</span>
      </Link>
    </section>
  );
};

export default FeaturedProject;
