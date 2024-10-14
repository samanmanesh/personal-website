import * as motion from "framer-motion/client";
import Contact from "./components/Contact";
import CurrentFocus from "./components/CurrentFocus";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import { filter } from "framer-motion/m";
import { easeInOut } from "framer-motion";

export default function Home() {
  //render each section of the home page with animation from blured to clear and with a delay of 0.5s
  // Animation variants for the parent section
  const containerVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 10 }, // Fade in and slide up
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        // staggerChildren: 0.5, // Delay between child animations
        staggerChildren: 0.15, // Stagger the children animations
      },
    },
  };

  // Animation variants for individual children
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

  const containers = [
    {
      title: "Intro",
      component: <Intro />,
    },
    {
      title: "Projects",
      component: <Projects />,
    },
    {
      title: "CurrentFocus",
      component: <CurrentFocus />,
    },
    {
      title: "Contact",
      component: <Contact className="mb-32" />,
    },
  ];

  return (
    <motion.section
      className="h-full md:w-2/5 text-primary dark:text-white flex flex-col gap-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {containers.map((container, index) => (
        <motion.div
          key={index}
          variants={childVariants}
          transition={{
            delay: index * 20,
          }}
        >
          {container.component}
        </motion.div>
      ))}
      {/* <motion.div variants={childVariants}>
        <Intro />
      </motion.div>
      <motion.div variants={childVariants}>
        <Projects />
      </motion.div>
      <motion.div variants={childVariants}>
        <CurrentFocus />
      </motion.div>
      <motion.div variants={childVariants}>
        <Contact className="mb-32" />
      </motion.div> */}
    </motion.section>
  );
}
