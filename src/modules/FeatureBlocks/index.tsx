import React from "react";
import clsx from "clsx";
import Button from "@components/Button";
import Box from "@components/Box";
import imgVirtual from "@images/photos/2026/virtual.jpg";
import imgBarcelona from "@images/photos/2026/barcelona/barcelona.jpg";

type BoxData = {
  title?: string;
  subtitleLeft?: string;
  subtitleRight?: string;
  image?: string;
  imageAlt?: string;
  bottomSubtitleLeft?: string;
  bottomSubtitleRight?: string;
  href?: string;
  externalLink?: boolean;
};

type Props = {
  boxes?: BoxData[];
};

import styles from "./styles.module.css";



const FeatureBlocks: React.FC<Props> = ({ boxes  }) => {
  return (
    <section className="bg-white text-black py-6 md:py-10">
      <div className="mt-10 mb-10 md:mt-20 md:mb-20 container-lg grid grid-cols-1 sm:grid-cols-2 gap-8">
        {boxes.map((box, index) => (
          <Box
            key={index}
            title={box.title}
            subtitleLeft={box.subtitleLeft}
            subtitleRight={box.subtitleRight}
            image={box.image}
            imageAlt={box.imageAlt}
            bottomSubtitleLeft={box.bottomSubtitleLeft}
            bottomSubtitleRight={box.bottomSubtitleRight}
            href={box.href}
            externalLink={box.externalLink}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureBlocks;