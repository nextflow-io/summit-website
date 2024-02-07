import React from "react";
import classNames from "classnames";
import computer from "./icon-computer.svg";
import news from "./icon-news.svg";
import parentheses from "./icon-parentheses.svg";

const Box = ({ children, title, icon }) => {
  return (
    <div className="bg-brand-1000 text-white text-left py-8 px-8 rounded-md text-brand h-full font-light flex flex-col min-h-[350px]">
      <h5 className="h3 mb-6">{title}</h5>
      <div className="flex-auto text-base">{children}</div>
      <div>
        <img src={icon.src} className="w-[44px]" />
      </div>
    </div>
  );
};

type Props = {
  className?: string;
};

const KeyInformation: React.FC<Props> = ({ className }) => {
  return (
    <section className={classNames("container", className)}>
      <h4 className="h5 mb-8 text-center">Key Information</h4>
      <div className="flex -m-2 sm:-m-4 flex flex-wrap">
        <div className="w-full md:w-1/3 p-2 sm:p-4">
          <Box title="Training | May 14-15" icon={parentheses}>
            An in-person training to supercharge your pipeline development with
            Nextflow and nf-core.
          </Box>
        </div>
        <div className="w-full md:w-1/3 p-2 sm:p-4">
          <Box title="Hackathon | May 14-15" icon={computer}>
            An in-person hackathon to develop nf-core.
          </Box>
        </div>
        <div className="w-full md:w-1/3 p-2 sm:p-4">
          <Box title="Summit | May 16-17" icon={news}>
            A showcase of the latest developments and innovations from the
            Nextflow world.
          </Box>
        </div>
      </div>
    </section>
  );
};

export default KeyInformation;
