import React from "react";
import Marquee from "../Marquee";
import call_for_abstracts from "./call_for_abstracts.svg";

type Props = {
  className?: string;
};

const SectionCallForAbstracts: React.FC<Props> = ({ className }) => {
  return (
    <Marquee className={className}>
      <img src={call_for_abstracts.src} />
      <img src={call_for_abstracts.src} />
      <img src={call_for_abstracts.src} />
    </Marquee>
  );
};

export default SectionCallForAbstracts;
