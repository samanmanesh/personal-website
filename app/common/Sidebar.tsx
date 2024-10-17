"use client";
import { motion } from "framer-motion";
import ArrowLeftIcon from "../assets/ArrowLeftIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const path = usePathname();
  console.log(path);

  return (
    <motion.div
      className={`font-sohne text-black dark:text-white font-medium  ${
        path === "/" ? "hidden" : "block"
      } absolute md:fixed top-10 md:top-20 left-4 md:left-[14%] group `}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <Link className="flex gap-2 no-underline" href={"/"}>
        <button className="flex gap-2 items-center group-hover:scale-95 transition ease-in-out hover:opacity-98 cursor-pointer  md:p-5 group-hover:drop-shadow-sm">
          <ArrowLeftIcon className="dark:fill-white fill-black group-hover:-rotate-45 transition-all ease-linear duration-100" />
          <span>Home</span>
        </button>
      </Link>
    </motion.div>
  );
};

export default Sidebar;
