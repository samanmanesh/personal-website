import { ExternalLink } from "@/app/components/ExternalLink";

type ProjectProps = {
  title: string;
  describe: string;
  link: string;
  date?: number[];
  icon?: boolean;
  internalLink?: string;
  imageHref?: string;
  linkType?: "internal" | "external";
  target?: "_blank" | "_self";
};

const Project = ({
  title,
  describe,
  link,
  icon,
  target,
}: ProjectProps) => {
  return (
    <div className="flex min-w-0 w-full max-w-40 flex-col gap-2 ">
      <ExternalLink link={link} target={target} icon={icon}>
        <span>{title}</span>
      </ExternalLink>

      <p className="text-base text-secondary font-normal">{describe}</p>
    </div>
  );
};

export default Project;
