import React from "react";

import sponsors from "@data/sponsors";
import Marquee from "@components/Marquee";

import styles from "./styles.module.css";

type Props = {
  className?: string;
};

const SponsoredBy: React.FC<Props> = ({ className }) => (
  <section>
    <Marquee speed={50} className={className} href="/2024/boston/sponsors/">
      <div className={styles.container}>
        <div className={styles.overlay} />
        {sponsors.map((sponsor) => (
          <div className="h-24 lg:h-40 max-ws px-10 flex items-center justify-center">
            <img src={sponsor.image} className="h-10" alt="Seqera" />
          </div>
        ))}
      </div>
    </Marquee>
  </section>
);

export default SponsoredBy;
