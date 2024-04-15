import React from "react";
import Box from "@components/Box";

const Row = ({ children, title }) => {
  return (
    <div className="flex flex-wrap items-center border-t mt-6 border-brand-800 pt-6 mb-4">
      <div className="w-full text-xl font-display font-semibold text-nextflow">
        {title}
      </div>
      <div className="w-full md:text-lg md:leading-6 py-2 md:py-0 text-brand-300 font-light">
        {children}
      </div>
    </div>
  );
};

type Props = {
  showImg?: boolean;
  showTitle?: boolean;
};

const WhyAttend: React.FC<Props> = ({ showImg, showTitle }) => {
  return (
    <Box alt>
      <h1 className="h0 mb-8">Why attend</h1>
      <div className="text-brand-300 font-light md:text-lg">
        The Nextflow Summit is the leading event for scientific data processing
        and data analysis, offering high-quality programming that spans
        scientific talks, poster sessions, and networking opportunities. Here,
        the vibrant community gathers to showcase the latest developments and
        innovations from the Nextflow world. At the Summit, open science takes
        the main stage.
      </div>
      <div className="flex">
        <div className="flex-auto md:pr-8">
          <Row title="The quintessential Nextflow Community event">
            The Nextflow Summit unites Nextflow enthusiasts, experts, and
            collaborators for unparalleled networking, building friendships, and
            collaboration opportunities, including an in-person community
            hackathon.
          </Row>
          <Row title="Push boundaries and innovate with Nextflow">
            At the Hackathon, you'll join forces to tackle real-world
            challenges, pushing boundaries and creating innovative pipelines
            with Nextflow. You'll also be inspired by the latest advancements
            and best practices shared at the Summit.
          </Row>
          <Row title="Learn and collaborate with Nextflow experts">
            The Nextflow Summit provides a comprehensive experience in workflow
            management and data orchestration, featuring real-life success
            stories, inspiring keynotes, and panel discussions, catering to both
            newcomers seeking foundational training and seasoned users aiming to
            stay abreast of the latest technologies and trends.
          </Row>
          <Row title="Showcase your work to industry leaders">
            The Nextflow Summit offers a prime platform to showcase your work
            and receive valuable community feedback on a wide range of
            Nextflow-related topics, from novel analysis methods to optimizing
            performance on cloud platforms.
          </Row>
        </div>
        {showImg && (
          <div className="w-[350px] hidden md:block">
            <img src={tiles.src} className="h-full object-cover" />
          </div>
        )}
      </div>
    </Box>
  );
};

export default WhyAttend;
