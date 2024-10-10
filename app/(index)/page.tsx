import Experiences from "./components/Experiences";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import SelectedProject from "./components/SelectedProject";

export default function Home() {
  return (
    <main className="pt-16 md:pt-32 grid items-center justify-items-center min-h-screen overflow-auto ">
      <nav className="h-28 w-full bg-gradient-to-t from-transparent to-stone-100 dark:to-[#1e1e1e]  mix-blend-normal backdrop-grayscale fixed top-0 z-10"></nav>
      <section className="h-full md:w-2/5 text-primary dark:text-white">
        <Intro className="mb-16" />
        <SelectedProject className="mb-16" />
        <Projects className="mb-16" />
        <Experiences className="mb-16" />
      </section>
    </main>
  );
}
