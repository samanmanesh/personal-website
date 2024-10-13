"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { cn } from "../utils/cn";
import * as Tooltip from "@radix-ui/react-tooltip";
import ArrowRightIcon from "../assets/ArrowRightIcon";

//  {
//   href: string;
// } & React.HTMLAttributes<HTMLAnchorElement> & {
//     imageHref?: string;
//   }
type ExternalLinkProps = {
  href: string;
  imageHref?: string;
  internalLink?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement>;

export const ExternalLink = ({
  children,
  className,
  imageHref,
  internalLink,
  ...props
}: ExternalLinkProps) => {
  const [copied, setCopied] = useState(false);
  // const router = useRouter();
  const showTooltipPanel =
    !!imageHref ||
    props.href.includes("mailto") ||
    props.href === "/experiments";
  const navigate = () => {
    if (typeof window !== "undefined") {
      if (props.href.startsWith("http")) {
        window.open(props.href, "_blank");
      } else {
        // router.push(props.href);
      }
    }
  };

  const copy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText("parssak@gmail.com");
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  };

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild className={cn("cursor-pointer", className)}>
          <Link href={props.href}>{children}</Link>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={cn(
              " select-none rounded-md bg-white group aspect-video w-72 border p-2 "
            )}
            sideOffset={5}
          >
            <div className="flex flex-col gap-2 items-center justify-center h-full">
              {imageHref && (
                <div className="absolute w-full h-full">
                  <Image
                    src={imageHref}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                    alt={""}
                  />
                </div>
              )}

              <div className="group-hover:flex hidden items-center  filter backdrop-blur-lg gap-6">
                <button className=" border-b border-black  text-base flex gap-2 items-center ">
                  Visit{" "}
                  <ArrowRightIcon className="fill-black dark:fill-white " />
                </button>

                <button className=" border-b border-black text-base ">
                  More
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2"></div>

            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
