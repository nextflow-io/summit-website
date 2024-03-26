import React from "react";
import Marquee from "@components/Marquee";
import registration_now_open from "./registration_now_open.svg";

type Props = {
  className?: string;
};

const CallForAbstracts: React.FC<Props> = ({ className }) => {
  return (
    <Marquee
      speed={50}
      className={className}
      href="/2024/boston/call-for-abstracts/"
    >
      <img className="ml-8" src={registration_now_open.src} />
      <img className="ml-8" src={registration_now_open.src} />
      <img className="ml-8" src={registration_now_open.src} />
      <img className="ml-8" src={registration_now_open.src} />
    </Marquee>
  );
};

export default CallForAbstracts;
