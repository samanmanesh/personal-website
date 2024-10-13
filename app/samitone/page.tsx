import ArrowIcon from "../assets/ArrowIcon";

const SamitoneData = {
  title: "Samitone",
  date: "May 2, 2021",
  paragraphs: [
    "Samitone is one of my most rewarding and challenging projects, born from my passion for music. It’s a browser-based audio sequencer that allows users to create music using a wide variety of instruments. Building this app was an exciting journey that came with unique technical challenges, especially since running complex audio logic in a browser environment can easily overwhelm it. There were moments when poor code logic or the use of nested loops caused the browser to crash, but overcoming these hurdles made the project even more fulfilling.",
    "To achieve high-quality sound generation, I leveraged <b>Tone.js</b>, a powerful audio library. By carefully adjusting frequencies and pitch, I created a range of musical notes for users to compose with. On the development side, I used <b>React</b> to manage the app's structure and functionality, while <b>Styled Components</b> handled the styling to ensure a clean and cohesive user interface.",
    "This project reflects my passion for blending clean, efficient code with thoughtful design, enhancing user engagement through the use of cutting-edge technologies like AI and carefully crafted interactions.",
  ],
  link: "https://samanmanesh.github.io/samitone/",
};

export default function Samitone() {
  return (
    <section className=" mb-16 h-full md:w-2/5 text-primary dark:text-white flex flex-col gap-11">
      <div className="flex flex-col gap-1">
        <h1 className="font-inter font-medium text-lg ">{SamitoneData.title}</h1>
        <span className="text-secondary">{SamitoneData.date}</span>
      </div>

      <section className="flex flex-col gap-7">
        {SamitoneData.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-base  font-normal"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}

        
      </section>
      <span className="flex items-center gap-2">
          You can view the live demo at{" "}
          <a
            className="flex items-center gap-2 text-foreground border-b border-secondary"
            href={SamitoneData.link}
          >
            {SamitoneData.title}{" "}
            <ArrowIcon className="dark:fill-white fill-secondary" />
          </a>
        </span>
      {/* video */}
      <div className="relative w-full  rounded-md border border-[#E8E8E8] dark:border-none aspect-video">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src="/videos/selected-project.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
