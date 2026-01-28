import React from "react";
import clsx from "clsx";
import Button from "@components/Button";
import Box from "@components/Box";
import imgVirtual from "@images/photos/2026/virtual.jpg";
import imgBarcelona from "@images/photos/2026/barcelona/barcelona.jpg";

type BoxData = {
  headline?: string;
  title?: string;
  subtitleLeft?: string;
  subtitleRight?: string;
  image?: string;
  imageAlt?: string;
  bottomSubtitleLeft?: string;
  bottomSubtitleRight?: string;
  href?: string;
  externalLink?: boolean;
  bodycopy?: any;
  imageCover?: boolean;
};

type Props = {
  headline?: string;
  boxes?: BoxData[];
};

const FeatureBlocks: React.FC<Props> = ({ boxes, headline  }) => {

  if (!boxes || boxes.length === 0) {
    return null;
  }

  const getGridCols = (count: number) => {
    switch (count) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-1 sm:grid-cols-2';
      case 3:
        return 'grid-cols-1 md:grid-cols-3';
      case 4:
        return 'grid-cols-1 sm:grid-cols-2';
      default:
        return 'grid-cols-1 md:grid-cols-3';
    }
  };
    const gridCols = getGridCols(boxes.length);


  return (
    <section className="bg-white text-black py-6 md:pt-16 md:pb-20">
      <div className="container-xl"><h3 className="h4 mb-4">{headline}</h3></div>
      <div className={`container-xl grid items-self gap-6 md:gap-8 ${gridCols}`}>
        {boxes.map((box, index) => (
          <Box
            key={index}
            title={box.title}
            subtitleLeft={box.subtitleLeft}
            subtitleRight={box.subtitleRight}
            image={box.image}
            imageAlt={box.imageAlt}
            imageCover={box.imageCover}
            bottomSubtitleLeft={box.bottomSubtitleLeft}
            bottomSubtitleRight={box.bottomSubtitleRight}
            href={box.href}
            headline={box.headline}
            bodycopy={box.bodycopy}
            externalLink={box.externalLink}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureBlocks;