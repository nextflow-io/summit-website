import React from "react";
import Marquee from "@components/Marquee";
import registration_now_open from "./registration_now_open.svg";

type Props = {
  className?: string;
  href?: string;
};

const RegistrationNowOpen: React.FC<Props> = ({ className, href }) => {
  return (
    <Marquee
      speed={50}
      className={className}
      href={href || "/2025/boston/register/"}
    >
      <img className="ml-8" src={registration_now_open.src} />
      <img className="ml-8" src={registration_now_open.src} />
      <img className="ml-8" src={registration_now_open.src} />
      <img className="ml-8" src={registration_now_open.src} />
    </Marquee>
  );
};

export default RegistrationNowOpen;
