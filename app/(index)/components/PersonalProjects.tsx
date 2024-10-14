import Project from "./Project";
import { cn } from "@/app/utils/cn";

type PersonalProjectsProps = {
  className?: string;
};
const projects = [
  {
    title: "Q&AI",
    describe: "Questions generator with power of Ai",
    externalLink: "",
    link: "/q-and-ai",
    imageHref: "/preview/QnAI.png",
  },
  {
    title: "Samitone",
    describe: "Simple browser-based audio sequencer app",
    externalLink: "https://samanmanesh.github.io/samitone/",
    link: "/samitone",
    imageHref: "/preview/Samitone.png",
  },
  {
    title: "Hilarion",
    describe: "Dynamic social media web application",
    externalLink: "https://hilarion-socialmedia-client.vercel.app/login",
    link: "/hilarion",
    imageHref: "/preview/Hilarion.png",
  },
];

const PersonalProjects = (className: PersonalProjectsProps) => {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <h3 className="font-sohne text-sm text-secondary font-normal">
        Personal
      </h3>
      <section className="flex flex-col gap-7">
        {projects.map((data, index) => (
          <Project
            key={index}
            title={data.title}
            describe={data.describe}
            link={data.externalLink}
            internalLink={data.link}
            imageHref={data.imageHref}
          />
        ))}
      </section>
    </div>
  );
};

export default PersonalProjects;
