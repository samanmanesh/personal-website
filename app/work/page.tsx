import * as motion from "framer-motion/client";
import { ExternalLink } from "../components/ExternalLink";
import ProjectCopy from "../components/ProjectCopy";

export const metadata = {
  title: "Selected Engineering Work | Sam Sobhan",
  description:
    "Product ownership, AI workflows, semantic search and real-time systems: selected engineering work by Sam Sobhan.",
};

const projects = [
  {
    id: "tally",
    name: "Tally",
    role: "Founder & Full Stack Engineer | 2026–present",
    paragraphs: [
      "Tally is a <b>financial AI assistant and smart workspace</b> that I’m building to help people organize and connect their financial information. I own the product design and engineering across the web interface, mobile app and backend, bringing the interface, APIs and data models together. The web application uses <a href='https://nextjs.org/' target='_blank' rel='noopener noreferrer'>Next.js</a> and TypeScript, with Hono, PostgreSQL and Cloudflare Workers on the backend, and Expo and React Native for mobile.",
      "A central part of my work is making AI conversations clear to follow. I built <b>streaming chat with progress updates and recovery handling</b>, so users can understand what the assistant is doing as a task runs. Alongside the conversation, I developed integrations and backend workflows that connect the assistant to the information it needs.",
      "I also designed and built document review flows that let users compare AI-extracted information with the original document and correct it. That attention to the interaction is an important part of how I approach Tally: giving users a clear way to understand and check the assistant’s work. Integration and regression tests support the key behaviors across these workflows.",
    ],
    link: "https://tallyhub.ai/",
  },
  {
    id: "bogi",
    name: "Bogi",
    role: "Founding Engineer | 2025–2026",
    paragraphs: [
      "At Bogi, I worked as a founding engineer on an <b>AI assistant that could carry out tasks across connected services</b>. My work spanned the web and mobile interfaces, backend APIs and agent workflows. I designed and built across these layers, connecting the user-facing experience with the services that supported the assistant’s actions.",
      "For the backend, I developed <a href='https://fastapi.tiangolo.com/' target='_blank' rel='noopener noreferrer'>Python FastAPI</a> services for AI features and integrations. I also built asynchronous processing with <b>Cloudflare Queues</b>, scheduled jobs and Gmail Pub/Sub webhooks. These parts of the system handled background work and incoming events alongside the interactive experience, bringing together interface development, API design and task processing.",
    ],
    link: "https://usebogi.com/",
  },
  {
    id: "lightpage",
    name: "Lightpage",
    role: "Product Engineer (contract) | September 2025",
    paragraphs: [
      "My contract work at Lightpage focused on building <b>semantic search across a poetry collection</b>. I concentrated on the search system: generating embeddings, storing vectors and connecting that data to retrieval. It was a focused piece of AI engineering within a larger application.",
      "I built the batch embedding and vector-search workflows using the <b>Vercel AI SDK</b>. The implementation brought data processing and retrieval together, turning the collection into information the application could search by meaning. My contribution covered the path from preparing the embeddings to making them available through the search feature.",
    ],
    link: "https://lightpage.com/",
  },
  {
    id: "gooseparty",
    name: "Goose Party",
    role: "Founding Engineer | February 2024–October 2025",
    paragraphs: [
      "Goose Party is a <b>real-time multiplayer party game</b> where I worked as a founding engineer. I built systems for player accounts, game sessions, scoring and reconnection, using <b>WebSockets</b> to keep player interfaces and game state in sync. For authentication and access control, I used <a href='https://supabase.com/' target='_blank' rel='noopener noreferrer'>Supabase</a>.",
      "One area I paid particular attention to was how frequently the game interface needed to update. A countdown changes constantly, but the rest of the screen doesn’t always need to render with it. I isolated those updates to reduce unnecessary rendering, alongside the work on session synchronization and reconnection. It reflects the same care I bring to other interfaces: thinking about both the underlying behavior and how the experience feels to the person using it.",
    ],
    link: "https://www.gooseparty.gg/",
  },
];

const variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 6 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.4, staggerChildren: 0.2 },
  },
};

export default function WorkPage() {
  return (
    <motion.section
      className="page-column mb-16 h-full project-section text-primary dark:text-white/85"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <motion.header className="project-heading-group" variants={variants}>
        <h1 className="project-heading">Selected engineering work</h1>
      </motion.header>
      <motion.p variants={variants}>
          I build across product and engineering, from early scope and interface
          design to APIs, data models and reliable workflows. Here is what I
          owned and built in four projects.
      </motion.p>
      <div className="flex flex-col gap-24 md:gap-32">
        {projects.map((project) => (
          <motion.article
            key={project.id}
            id={project.id}
            className="project-section scroll-mt-36"
            variants={variants}
          >
            <div className="project-heading-group">
              <h2 className="project-heading">{project.name}</h2>
              <p className="text-secondary">{project.role}</p>
            </div>
            <ProjectCopy paragraphs={project.paragraphs} />
            {project.link && (
              <div className="flex flex-wrap items-center gap-2">
                You can visit the project at{" "}
                <ExternalLink link={project.link} target="_blank" icon>
                  {project.name}
                </ExternalLink>
              </div>
            )}
          </motion.article>
        ))}
      </div>
      <motion.p variants={variants}>
        Interested in building together? <a href="mailto:samansbm7@gmail.com">Get in touch.</a>
      </motion.p>
    </motion.section>
  );
}
