import * as motion from "framer-motion/client";
import { ExternalLink } from "../components/ExternalLink";

export const metadata = {
  title: "Selected Engineering Work | Sam Sobhan",
  description:
    "Product ownership, AI workflows, semantic search and real-time systems: selected engineering work by Sam Sobhan.",
};

const projects = [
  {
    id: "tally",
    name: "Tally",
    role: "Founder & Full Stack Engineer | 2026-present",
    summary:
      "A financial AI assistant and smart workspace that helps users organize and connect their financial information.",
    ownership:
      "I own product design and engineering across the web interface, mobile app, backend APIs and data models.",
    work: [
      "Built streaming AI conversations with progress updates and recovery handling so users can understand what the assistant is doing.",
      "Built document review workflows that let users compare AI-extracted information with the original document and correct it.",
      "Developed integrations and backend workflows, with integration and regression tests for key behavior.",
    ],
    stack: "TypeScript, Next.js, Hono, PostgreSQL, Cloudflare Workers, Expo and React Native",
    link: "https://tallyhub.ai/",
    linkText: "Visit Tally",
  },
  {
    id: "bogi",
    name: "Bogi",
    role: "Founding Engineer | 2025-2026",
    summary:
      "An AI assistant that executes tasks across connected services.",
    ownership:
      "I designed and built web, mobile and backend systems, working across the interface, APIs and agent workflows.",
    work: [
      "Developed Python FastAPI services supporting AI features and integrations.",
      "Built asynchronous processing with Cloudflare Queues, scheduled jobs and Gmail Pub/Sub webhooks.",
    ],
    stack: "Python, FastAPI, TypeScript, Cloudflare Queues and Gmail Pub/Sub",
    link: "https://usebogi.com/",
    linkText: "Visit Bogi",
  },
  {
    id: "lightpage",
    name: "Lightpage",
    role: "Product Engineer (contract) | September 2025",
    summary: "Semantic search across a poetry collection.",
    ownership:
      "My contract work focused on the semantic-search system, using embeddings and vector storage.",
    work: [
      "Built batch embedding and vector-search workflows with the Vercel AI SDK.",
      "Connected data processing and retrieval in an AI application feature.",
    ],
    stack: "Batch embeddings, vector storage and Vercel AI SDK",
    link: "https://lightpage.com/",
    linkText: "Visit Lightpage's product site",
  },
  {
    id: "gooseparty",
    name: "Goose Party",
    role: "Founding Engineer | February 2024-October 2025",
    summary: "A real-time multiplayer party game.",
    ownership:
      "I built multiplayer systems spanning player accounts, game sessions, scoring and reconnection flows.",
    work: [
      "Used WebSockets to keep player interfaces and game state in sync.",
      "Implemented authentication and access control with Supabase.",
      "Isolated countdown updates from the rest of the game interface to reduce unnecessary rendering.",
    ],
    stack: "WebSockets, Supabase and real-time state management",
    link: "https://www.gooseparty.gg/",
    linkText: "Visit Goose Party",
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
          <div className="project-copy">
            <p className="text-base font-normal">{project.summary}</p>
            <p className="text-base font-normal">{project.ownership}</p>
            {project.work.map((item) => <p key={item} className="text-base font-normal">{item}</p>)}
            <p className="text-base font-normal">Tools: {project.stack}</p>
          </div>
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
      <motion.p variants={variants}>
        Interested in building together? <a href="mailto:samansbm7@gmail.com">Get in touch.</a>
      </motion.p>
    </motion.section>
  );
}
