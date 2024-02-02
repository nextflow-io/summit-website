import React from "react";
import Marquee from "../Marquee";
import call_for_abstracts from "./call_for_abstracts.svg";

type Props = {};

const CallForAbstracts: React.FC<Props> = () => {
  return (
    <Marquee>
      <img src={call_for_abstracts.src} />
      <img src={call_for_abstracts.src} />
      <img src={call_for_abstracts.src} />
    </Marquee>
  );
};

export default CallForAbstracts;
