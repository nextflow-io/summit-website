import React from "react";
import Marquee from "@components/Marquee";
import call_for_abstracts from "./call_for_abstracts.svg";

type Props = {
  className?: string;
};

const CallForAbstracts: React.FC<Props> = ({ className }) => {
  return (
    <Marquee
      className={className}
      href="https://sessionize.com/nextflow-summit-2024-boston"
    >
      <img src={call_for_abstracts.src} />
      <img src={call_for_abstracts.src} />
      <img src={call_for_abstracts.src} />
    </Marquee>
  );
};

export default CallForAbstracts;
