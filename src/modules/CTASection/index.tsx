import React from "react";
import clsx from "clsx";
import Button from "@components/Button";

type Props = {};

import styles from "./styles.module.css";

const CTASection: React.FC<Props> = () => {
  return (
    <section className={styles.section}>
      <div className="container smaller text-center py-30">
        <div className={clsx("h0 mb-14", styles.text)}>
          Step into the future of data-driven science at the Nextflow Summit
          held in Boston, this May
        </div>
        <Button href="/2025/boston/register" arrow large>
          Register now
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
