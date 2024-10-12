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
      className={`font-sohne text-black font-medium text-lg ${
        path === "/" ? "hidden" : "flex"
      }  gap-2 absolute md:fixed top-12 md:top-24 left-4 md:left-[15%] items-center hover:scale-95 transition ease-in-out hover:opacity-98 cursor-pointer `}
      href={"/"}
    >
      <ArrowLeftIcon className="dark:fill-white fill-black" />
      <span>Index</span>
    </Link>
  );
};

export default Sidebar;
