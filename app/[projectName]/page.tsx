import { getProjectData } from "../utils/getProjectData";
import * as motion from "framer-motion/client";
import { ExternalLink } from "../components/ExternalLink";

type Props = {
  params: {
    slug: string;
  };
};

const variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 6 }, // Fade in and slide up
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      staggerChildren: 0.2, // Stagger the children animations
    },
  },
};
export default function ProjectPage({
  params,
}: {
  params: { projectName: string };
}) {
  const projectData = getProjectData(params.projectName);

  if (!projectData) {
    return <div>Project not found</div>;
  }

  return (
    <section className=" mb-16 h-full md:w-[39%] text-primary dark:text-white/85 flex flex-col gap-11">
      <motion.div
        className="flex flex-col gap-1"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="font-inter font-medium text-lg ">{projectData.title}</h1>
        <span className="text-secondary">{projectData.date}</span>
      </motion.div>

      <motion.section
        className="flex flex-col gap-10"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        {projectData.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-base  font-normal"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </motion.section>
      <motion.span
        className="flex items-center gap-2"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        You can view the live demo at{" "}
        <ExternalLink link={projectData.link} target="_blank" icon>
          {projectData.title}{" "}
        </ExternalLink>
      </motion.span>
      {/* video */}
      <motion.div
        className="relative w-full  rounded-md border bg-[#E8E8E8]  aspect-video"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src="/videos/selected-project.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </section>
  );
}
