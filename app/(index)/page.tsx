
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import SelectedProject from "./components/SelectedProject";

export default function Home() {
  return (
    <main className="pt-16 md:pt-32 grid items-center justify-items-center min-h-screen overflow-auto ">
      <section className="h-full md:w-2/5 text-primary">
        <Intro className="mb-16" />
        <SelectedProject className="mb-16"/>
        <Projects className="mb-16" />

      </section>
    </main>
  );
}
