import React from "react";
import Box, { SubSection } from "@components/Box";
import img1 from "@images/photos/2026/barcelona/why-attend-bcn-2.jpg";
import img2 from "@images/photos/2026/boston/why-attend.jpg";
import img3 from "@images/photos/2026/barcelona/why-attend-bcn-3.jpg";
import Training from "@icons/Training";
import NextflowExperts from "@icons/NextflowExperts";
import NextflowLearning from "@icons/NextflowLearning";
import NextflowTeam from "@icons/NextflowTeam";
import Lightbulb from "@icons/Lightbulb";

type Props = {
  className?: string;
};

const WhyAttend: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="hidden sm:flex  imageBlend border w-full h-full border-nextflow xl:aspect-square object-cover">
          <img
            className="aspect-square w-full h-full object-cover"
            src={img1.src}
          />
        </div>
        <Box className="xl:aspect-square">
          <SubSection className="flex flex-col justify-between min-h-[350px]">
            <NextflowTeam />
            <div className="mt-10">
              <h5 className="h5 mb-4">
                The quintessential Nextflow Community event
              </h5>
              <p className="monospace">
                The Nextflow Summit unites Nextflow enthusiasts, experts, and
                collaborators for unparalleled networking, building friendships,
                and collaboration opportunities, including an in-person
                community hackathon.
              </p>
            </div>
          </SubSection>
        </Box>
        <Box className="xl:aspect-square">
          <SubSection className="flex flex-col justify-between min-h-[350px]">
          <Lightbulb/>
            <div className="mt-10">
              <h5 className="h5 mb-4">
                Push boundaries and innovate with Nextflow
              </h5>
              <p className="monospace">
                At the Hackathon, you'll join forces to tackle real-world
                challenges, pushing boundaries and creating innovative pipelines
                with Nextflow. You'll also be inspired by the latest
                advancements and best practices shared at the Summit.
              </p>
            </div>
          </SubSection>
        </Box>
        <Box className="xl:aspect-square">
          <SubSection className="flex flex-col justify-between min-h-[350px]">
            <NextflowExperts />
            <div className="mt-10">
              <h5 className="h5 mb-4">
                Learn and collaborate with Nextflow experts
              </h5>
              <p className="monospace">
                The Nextflow Summit provides a comprehensive experience in
                workflow management and data orchestration, featuring real-life
                success stories, inspiring keynotes, and panel discussions and
                seasoned users aiming to stay abreast of the latest
                technologies.
              </p>
            </div>
          </SubSection>
        </Box>
        <Box className="xl:aspect-square">
          <SubSection className="flex flex-col justify-between min-h-[350px]">
          <NextflowLearning />
            <div className="mt-10">
              <h5 className="h5 mb-4">
                Showcase your work to industry leaders
              </h5>
              <p className="monospace">
                The Nextflow Summit offers a prime platform to showcase your
                work and receive valuable community feedback on a wide range of
                Nextflow-related topics, from novel analysis methods to
                optimizing performance on cloud platforms.
              </p>
            </div>
          </SubSection>
        </Box>

        <div className="imageBlend border w-full h-full border-nextflow xl:aspect-square object-cover">
          <img
            className="aspect-square w-full h-full object-cover"
            src={img3.src}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyAttend;
