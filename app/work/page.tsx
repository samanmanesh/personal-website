import Link from "next/link";

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

export default function WorkPage() {
  return (
    <section className="w-full max-w-2xl flex flex-col gap-12 text-primary dark:text-white/85">
      <Link href="/" className="text-sm text-secondary hover:underline">
        &larr; Back to Sam Sobhan
      </Link>
      <header className="flex flex-col gap-5">
        <h1 className="font-newsreader text-4xl">Selected engineering work</h1>
        <p className="text-secondary">
          I build across product and engineering, from early scope and interface
          design to APIs, data models and reliable workflows. Here is what I
          owned and built in four projects.
        </p>
      </header>
      {projects.map((project) => (
        <article
          key={project.id}
          id={project.id}
          className="flex flex-col gap-5 border-t border-black/10 dark:border-white/15 pt-8 scroll-mt-36"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-newsreader">{project.name}</h2>
            <p className="text-sm text-secondary">{project.role}</p>
          </div>
          <p>{project.summary}</p>
          <p>{project.ownership}</p>
          <ul className="list-disc pl-5 space-y-3 text-secondary">
            {project.work.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="text-sm text-secondary">Tools: {project.stack}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm underline underline-offset-4">
              {project.linkText} &rarr;
            </a>
          )}
        </article>
      ))}
      <p className="border-t border-black/10 dark:border-white/15 pt-8">
        Interested in building together? <a className="underline underline-offset-4" href="mailto:samansbm7@gmail.com">Get in touch.</a>
      </p>
    </section>
  );
}
