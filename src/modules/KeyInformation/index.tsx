import React from "react";
import clsx from "clsx";
import computer from "./icon-computer.svg";
import news from "./icon-news.svg";
import parentheses from "./icon-parentheses.svg";
import Box from "@components/Box";

const InfoBox = ({ children, title, subtitle, icon }) => {
  return (
    <Box className="flex flex-col min-h-[350px]">
      <h5 className="h3 mb-6">{title}</h5>
      {subtitle && (
        <div className="mb-6 text-sm text-brand-300">{subtitle}</div>
      )}
      <div className="text-base">{children}</div>
      <div className="flex-auto pt-6">
        <a href="/2024/boston/agenda/schedule" className="text-brand-400 font-bold text-sm">View agenda</a>
      </div>
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
      <div className="flex -m-2 lg:-m-4 flex flex-wrap">
        <div className="w-full md:w-1/3 p-2 lg:p-4">
          <InfoBox
            title="Training | May 21-22"
            subtitle="2 days · 30 people · training"
            icon={parentheses}
          >
            An in-person training to supercharge your pipeline development with
            Nextflow and nf-core.
          </InfoBox>
        </div>
        <div className="w-full md:w-1/3 p-2 lg:p-4">
          <InfoBox
            title="Hackathon | May 21-22"
            subtitle="2 days · 100 people · hackathon"
            icon={computer}
          >
            An in-person hackathon to develop nf-core.
          </InfoBox>
        </div>
        <div className="w-full md:w-1/3 p-2 lg:p-4">
          <InfoBox
            title="Summit | May 23-24"
            subtitle="1.5 days · 200 people · talks, networking, and more"
            icon={news}
          >
            A showcase of the latest developments and innovations from the
            Nextflow world.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default KeyInformation;
