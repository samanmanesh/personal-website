import Contact from "./components/Contact";
import CurrentFocus from "./components/CurrentFocus";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <section className="h-full md:w-2/5 text-primary dark:text-white flex flex-col gap-16">
      <Intro />
      <Projects />
      <CurrentFocus />
      <Contact className="mb-32" />
    </section>
  );
}
