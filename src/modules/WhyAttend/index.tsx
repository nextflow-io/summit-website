import React from "react";
import InfoBox from "@components/InfoBox";
import Button from "@components/Button";

const Box = ({ children, title }) => {
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
  cta?: {
    title: string;
    url: string;
  };
};

const WhyAttend: React.FC<Props> = ({ cta }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        <InfoBox subtitle="The quintessential Nextflow Community event">
          The Nextflow Summit unites Nextflow enthusiasts, experts, and
          collaborators for unparalleled networking, building friendships, and
          collaboration opportunities, including an in-person community
          hackathon.
        </InfoBox>
        <InfoBox subtitle="Push boundaries and innovate with Nextflow">
          At the Hackathon, you'll join forces to tackle real-world challenges,
          pushing boundaries and creating innovative pipelines with Nextflow.
          You'll also be inspired by the latest advancements and best practices
          shared at the Summit.
        </InfoBox>
        <InfoBox subtitle="Learn and collaborate with Nextflow experts">
          The Nextflow Summit provides a comprehensive experience in workflow
          management and data orchestration, featuring real-life success
          stories, inspiring keynotes, and panel discussions, catering to both
          newcomers seeking foundational training and seasoned users aiming to
          stay abreast of the latest technologies and trends.
        </InfoBox>
        <InfoBox subtitle="Showcase your work to industry leaders">
          The Nextflow Summit offers a prime platform to showcase your work and
          receive valuable community feedback on a wide range of
          Nextflow-related topics, from novel analysis methods to optimizing
          performance on cloud platforms.
        </InfoBox>
        <InfoBox subtitle="Need help convincing your manager?">
          We’ve got you covered. To make it easier to explain the benefits of attending,
          we’ve prepared a template letter for you. Just edit it to suit your
          needs and make your case. Take the first step toward joining
          us—download the template now and secure your spot!
        </InfoBox>
      </div>

    </>
  );
};

export default WhyAttend;
