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
      {/* video */}
      <div className="relative w-full rounded-md bg-[#E8E8E8] overflow-hidden hover:bg-black/5 hover:backdrop-blur-2xl transition ease-in-out">
        <Link href="/qandai">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="video/Q&Ai-video-demo-v3.mp4" type="video/mp4" />
          </video>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProject;
