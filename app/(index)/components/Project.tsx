import ArrowRightIcon from "@/app/assets/ArrowRightIcon";
import Link from "next/link";

type ProjectProps = {
  title: string;
  describe: string;
  link: string;
  date?: number[];
  icon?: boolean;
  internalLink?: string;
  imageHref?: string;
  linkType?: "internal" | "external";
};

const Project = ({
  title,
  describe,
  link,
  icon,
  internalLink,
  imageHref,
  linkType,
}: ProjectProps) => {
  return (
    <Link
      href={link}
      target={linkType === "external" ? "_blank" : "_self"}
      className={`w-40`}
    >
      <div className="flex flex-col gap-2 ">
        <div className="font-inter font-medium text-base  decoration-secondary flex items-center justify-between gap-2 border-b border-secondary mr-auto ">
          <span>{title}</span>

          {icon && (
            <ArrowRightIcon className="dark:fill-white fill-secondary" />
          )}
        </div>
        <p className="text-base text-secondary font-normal">{describe}</p>
      </div>
    </Link>
  );
};

export default Project;
