import React from "react";

import sponsors from "@data/sponsors";
import Marquee from "@components/Marquee";

import styles from "./styles.module.css";

type Props = {
  className?: string;
  location?: "boston" | "barcelona";
};

const SponsoredBy: React.FC<Props> = ({ className, location = "boston" }) => (
  <section>
    <Marquee
      speed={50}
      className={className}
      href={`/2024/${location}/sponsors/`}
    >
      <div className={styles.container}>
        {sponsors[location]?.map((sponsor, i) => (
          <div
            key={i}
            className="h-24 lg:h-40 max-ws px-10 flex items-center justify-center"
          >
            <img src={sponsor.image} className="h-10" alt={sponsor.name} />
          </div>
        ))}
      </div>
    </Marquee>
  </section>
);

export default SponsoredBy;
