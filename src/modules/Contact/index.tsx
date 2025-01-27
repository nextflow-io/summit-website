import React from "react";
import clsx from "clsx";
import Icon from "./Icon";
import Box from "@components/Box";

import styles from "./styles.module.css";

const SectionBox = ({ children, href }) => {
  return (
    <Box href={href} className={styles.box}>
      <span>{children}</span>
      <Icon />
    </Box>
  );
};

type Props = {
  className?: string;
};

const SectionContact: React.FC<Props> = ({ className }) => {
  return (
    <section className={clsx("mt-40 container smaller", className)} id="footer">
      <div className="flex -m-2 sm:-m-4 flex flex-wrap">
        <div className="w-full md:w-1/2 p-2 sm:p-4">
          <SectionBox href="mailto:help.summit@nextflow.io">
            <h5 className="h5 mb-2">Ticketing questions</h5>
            <div className="monospace text-nextflow">help.summit@nextflow.io</div>
          </SectionBox>
        </div>
        <div className="w-full md:w-1/2 p-2 sm:p-4">
          <SectionBox href="mailto:summit@nextflow.io">
            <h5 className="h5 mb-2">Program questions</h5>
            <div className="monospace text-nextflow">summit@nextflow.io</div>
          </SectionBox>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
