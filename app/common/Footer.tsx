import React from "react";
import { ExternalLink } from "../components/ExternalLink";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full md:w-2/5 h-10 flex justify-between  gap-1 mt-32 ">
      <p className=" font-sohne text-primary text-sm">Saman Manesh ⚙️ 2024 </p>
      <div className="text-xs text-secondary opacity-90 flex">
        Inspired by &nbsp;
        <ExternalLink link="https://x.com/pacocoursey" target="_blank">
          <span className="text-xs">@pacocoursey</span>
        </ExternalLink>
        &nbsp; 💡
      </div>
    </div>
  );
};

export default Footer;
