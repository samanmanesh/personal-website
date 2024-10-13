"use client";
import ArrowLeftIcon from "../assets/ArrowLeftIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const Sidebar = (props: Props) => {
  const path = usePathname();
  console.log(path);

  return (
    <Link
      className={`font-sohne text-black dark:text-white font-medium  ${
        path === "/" ? "hidden" : "flex"
      }  gap-2 absolute md:fixed top-10 md:top-20 left-4 md:left-[14%] `}
      href={"/"}
    >
      <button className="flex gap-2 items-center hover:scale-95 transition ease-in-out hover:opacity-98 cursor-pointer  md:p-5">
      <ArrowLeftIcon className="dark:fill-white fill-black" />
      <span>Index</span>
      </button>
    </Link>
  );
};

export default Sidebar;
