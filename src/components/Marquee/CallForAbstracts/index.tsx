import React from "react";
import Marquee from "@components/Marquee";
import call_for_abstracts from "./call_for_abstracts.svg";

type Props = {
  className?: string;
  href?: string;
};

const CallForAbstracts: React.FC<Props> = ({ className, href }) => {
  return (
    <Marquee
      speed={50}
      className={className}
      href={href || "/2024/barcelona/call-for-abstracts/"}
    >
      <img className="ml-8" src={call_for_abstracts.src} />
      <img className="ml-8" src={call_for_abstracts.src} />
      <img className="ml-8" src={call_for_abstracts.src} />
      <img className="ml-8" src={call_for_abstracts.src} />
    </Marquee>
  );
};

export default CallForAbstracts;
