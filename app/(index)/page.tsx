
import Intro from "./components/Intro";
import SelectedProject from "./components/SelectedProject";

export default function Home() {
  return (
    <main className="pt-16 md:pt-32 grid items-center justify-items-center min-h-screen ">
      <section className="relative  h-full md:w-2/5  flex flex-col gap-7 text-primary">
        <Intro />
        <SelectedProject />
      </section>
    </main>
  );
}
