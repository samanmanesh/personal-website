import { ExternalLink } from "@/app/components/ExternalLink";
import { cn } from "@/app/utils/cn";

type ContactProps = {
  className?: string;
};

//here needs to be fixed to not have overflow on the phone
const Contact = ({ className }: ContactProps) => {
  return (
    <div className={cn("flex flex-col gap-10 ", className)}>
      <h2 className="font-inter font-medium text-base">Contact</h2>
      <div className="flex flex-col md:flex-row  gap-1 ">
        <p className="flex-shrink-0">Reach me at</p>
        <div className="flex gap-1">
          <ExternalLink link="https://x.com/sam_sobhan" target="_blank">
            <span className="text-base text-primary font-medium">
              @sam_sobhan
            </span>
          </ExternalLink>
          <span> or </span>
          <ExternalLink link="mailto:samansbm7@gmail.com ">
            <span className="text-base text-primary font-medium ">
              samansbm7@gmail.com
            </span>
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};

export default Contact;
