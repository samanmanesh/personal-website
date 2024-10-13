import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full md:w-2/5 h-10 flex justify-between  gap-1 ">
      <p className=" font-sohne text-primary text-sm">Saman Manesh ⚙️ 2024 </p>
      <p className="text-xs text-secondary opacity-90 ">
        Inspired by{" "}
        <a
          href="https://x.com/pacocoursey"
          className="  underline underline-offset-4"
        >
          @pacocoursey
        </a>
        💡
      </p>
    </div>
  );
};

export default Footer;
