import ArrowRightIcon from "../assets/ArrowRightIcon";
import * as motion from "framer-motion/client";

const HilarionData = {
  title: "Hilarion",
  date: "Julay 12, 2021",
  paragraphs: [
    "Hilarion is a project born out of my curiosity about how large-scale platforms like Instagram are built and the challenges they face during development. My goal was to create a small-scale version of Instagram to explore both familiar and new technologies required to handle complex interactions. The result is a full-stack web application, built using the <b>MERN stack</b> (MongoDB, Express, React, and Node.js) along with <b>Next.js</b> for server-side rendering and frontend routing.",
    "For the backend, I utilized <b>MongoDB</b> for efficient data management and structured storage, and <b>Node.js</b> to handle API requests and server-side operations. To enhance security, I implemented <b>SHA256 hashing</b> with salting, ensuring that user passwords and sensitive data remain protected. Additionally, robust authentication mechanisms were incorporated to manage user sessions, logins, and access rights securely.",
    "One of the more interesting challenges involved handling media uploads and optimizing performance for large files. I integrated <b>Cloudinary</b>, a powerful external CDN, to efficiently manage and deliver images and media assets. This allowed for smooth uploads, on-the-fly transformations, and fast retrieval, preventing any unnecessary load on the server. For the frontend, I used <b>Tailwind CSS</b> to maintain a clean and responsive UI that mirrored the sleek and minimalistic feel of Instagram.",
    "While Hilarion was a case study in building a small-scale social platform, there are aspects that could be further improved for handling a large number of users and high traffic. Technologies like <b>Redis</b> for caching, load balancers, and horizontal scaling would be essential to enhance performance and scalability as user demand increases. However, given that this project was more of an exploration, I didn't implement these advanced solutions but gained valuable insights into what would be needed for larger-scale production systems.",
    "Through this project, I deepened my understanding of user authentication, data routing, and media handling, making <b>Hilarion</b> a highly educational experience in full-stack development.",
  ],
  link: "https://hilarion-socialmedia-client.vercel.app/login",
};

const variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 6 }, // Fade in and slide up
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.2,
      staggerChildren: 0.1, // Stagger the children animations
    },
  },
};

export default function Hilarion() {
  return (
    <section className=" mb-16 h-full md:w-2/5 text-primary dark:text-white flex flex-col gap-11">
      <motion.div className="flex flex-col gap-1" 
      variants={variants}
      initial="hidden"
      animate="visible"
      >
        <h1 className="font-inter font-medium text-lg ">
          {HilarionData.title}
        </h1>
        <span className="text-secondary">{HilarionData.date}</span>
      </motion.div>

      <motion.section className="flex flex-col gap-7" variants={variants}
      initial="hidden"
      animate="visible"
      >
        {HilarionData.paragraphs.map((paragraph, index) => (
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
        <a
          className="flex items-center gap-2 text-foreground border-b border-secondary"
          href={HilarionData.link}
        >
          {HilarionData.title}{" "}
          <ArrowRightIcon className="dark:fill-white fill-secondary" />
        </a>
      </motion.span>
      {/* video */}
      <motion.div
        className="relative w-full  rounded-md border border-[#E8E8E8] dark:border-none aspect-video"
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
