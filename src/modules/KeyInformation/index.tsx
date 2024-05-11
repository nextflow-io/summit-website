import React from "react";
import clsx from "clsx";
import computer from "./icon-computer.svg";
import news from "./icon-news.svg";
import parentheses from "./icon-parentheses.svg";
import Box from "@components/Box";

const InfoBox = ({ children, title, subtitle, icon, link }) => {
  return (
    <Box className="flex flex-col min-h-[350px]" href={link}>
      <h5 className="h3 mb-6">{title}</h5>
      {subtitle && (
        <div className="mb-6 text-sm text-brand-300">{subtitle}</div>
      )}
      <div className="text-base flex-auto">{children}</div>
      <div className="mt-4">
        <img src={icon.src} className="w-[44px]" />
      </div>
    </Box>
  );
};

type Props = {
  className?: string;
  linkPath?: string;
};

const KeyInformation: React.FC<Props> = ({ className, linkPath = "" }) => {
  return (
    <section className={clsx("container", className)}>
      <div className="flex -m-2 lg:-m-4 flex flex-wrap">
        <div className="w-full md:w-1/3 p-2 lg:p-4">
          <InfoBox
            title="Training | May 21-22"
            subtitle="2 days · 30 people · training"
            icon={parentheses}
            link={`${linkPath}#05-21`}
          >
            An in-person foundational training to supercharge your pipeline
            development with Nextflow and nf-core. Running in parallel to the
            hackathon.
          </InfoBox>
        </div>
        <div className="w-full md:w-1/3 p-2 lg:p-4">
          <InfoBox
            title="Hackathon | May 21-22"
            subtitle="2 days · 100 people · hackathon"
            icon={computer}
            link={`${linkPath}#05-22`}
          >
            An in-person hackathon to develop nf-core. Running in parallel to
            the training.
          </InfoBox>
        </div>
        <div className="w-full md:w-1/3 p-2 lg:p-4">
          <InfoBox
            title="Summit | May 23-24"
            subtitle="1.5 days · 200 people · talks, networking, and more"
            icon={news}
            link={`${linkPath}#05-23`}
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
