import ArrowRightIcon from "../assets/ArrowRightIcon";


const QAndAIData = {
  title: "Q&Ai",
  date: "October 8, 2024",
  paragraphs: [
    "QandAi is a seamless blend of AI and UI, a project I designed and developed using <b>Next.js</b> and <b>Tailwind CSS</b>. The goal was to create a highly intuitive interface while leveraging the power of AI in the background. To generate intelligent questions, possible answer choices, and the correct answers, I integrated the <b>Anthropic Claude</b> API. This allows the app to offer dynamic question generation, providing users with an engaging and educational experience powered by advanced AI capabilities.",
    "I’ve always believed that animations add a layer of interaction that brings a website to life—when done thoughtfully and without overwhelming the user. For QandAi, I combined <b>CSS</b> animations and <b>Framer Motion</b> to introduce smooth, subtle animations that guide users through the experience, keeping the interface dynamic yet refined. The result is an app that feels polished and responsive, with the right balance of functionality and visual delight.",
    "This project reflects my passion for blending clean, efficient code with thoughtful design, enhancing user engagement through the use of cutting-edge technologies like AI and carefully crafted interactions.",
  ],
  link: "",
};

const childVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 10 }, // Fade in and slide up
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
    },
  },
};

export default function QAndAI() {
  return (
    <section className=" mb-16 h-full md:w-2/5 text-primary dark:text-white flex flex-col gap-11">
      <div className="flex flex-col gap-1">
        <h1 className="font-inter font-medium text-lg ">{QAndAIData.title}</h1>
        <span className="text-secondary">{QAndAIData.date}</span>
      </div>

      <section className="flex flex-col gap-7">
        {QAndAIData.paragraphs.map((paragraph, index) => (
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
          href={QAndAIData.link}
        >
          {QAndAIData.title}{" "}
          <ArrowRightIcon className="dark:fill-white fill-secondary" />
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
