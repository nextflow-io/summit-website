import React from "react";
import clsx from "clsx";
import computer from "./icon-computer.svg";
import news from "./icon-news.svg";
import parentheses from "./icon-parentheses.svg";
import Box from "@components/Box";

const InfoBox = ({ children, title, icon }) => {
  return (
    <Box className="flex flex-col min-h-[350px]">
      <h5 className="h3 mb-6">{title}</h5>
      <div className="flex-auto text-base">{children}</div>
      <div>
        <img src={icon.src} className="w-[44px]" />
      </div>
    </Box>
  );
};

type Props = {
  className?: string;
};

const KeyInformation: React.FC<Props> = ({ className }) => {
  return (
    <section className={clsx("container", className)}>
      <h4 className="h5 mb-8 text-center">Key Information</h4>
      <div className="flex -m-2 sm:-m-4 flex flex-wrap">
        <div className="w-full md:w-1/3 p-2 sm:p-4">
          <InfoBox title="Training | May 14-15" icon={parentheses}>
            An in-person training to supercharge your pipeline development with
            Nextflow and nf-core.
          </InfoBox>
        </div>
        <div className="w-full md:w-1/3 p-2 sm:p-4">
          <InfoBox title="Hackathon | May 14-15" icon={computer}>
            An in-person hackathon to develop nf-core.
          </InfoBox>
        </div>
        <div className="w-full md:w-1/3 p-2 sm:p-4">
          <InfoBox title="Summit | May 16-17" icon={news}>
            A showcase of the latest developments and innovations from the
            Nextflow world.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default KeyInformation;
