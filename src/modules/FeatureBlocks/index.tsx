import React from 'react';
import Box from '@components/Box';
import PortableText from '@components/PortableText';
import Button from '@components/Button';

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
  buttonText?: string;
  buttonUrl?: string;
  tag?: string;
  tags?: string;
};

type Props = {
  headline?: string;
  boxes?: BoxData[];
  bodycopy?: any;
  buttonText?: string;
  buttonUrl?: string;
};

const FeatureBlocks: React.FC<Props> = ({
  boxes,
  headline,
  bodycopy,
  buttonText,
  buttonUrl,
}) => {
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
        return 'grid-cols-1 sm:grid-cols-3';
      case 4:
        return 'grid-cols-1 sm:grid-cols-2';
      default:
        return 'grid-cols-1 sm:grid-cols-3';
    }
  };
  const gridCols = getGridCols(boxes.length);

  return (
    <section className="bg-white text-black py-10 md:pt-16 md:pb-20">
      <div className="container-xl">
        <h3 className="h4 mb-4 sm:max-w-[60%] text-balance">{headline}</h3>
        <div className="sm:max-w-[550px] mb-6">
          <PortableText value={bodycopy} />
        </div>
      </div>
      <div
        className={`container-xl grid items-self gap-6 md:gap-8 ${gridCols}`}
      >
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
            buttonText={box.buttonText}
            buttonUrl={box.buttonUrl}
            tag={box.tag}
            tags={box.tags}
          />
        ))}
      </div>

      {buttonText && buttonUrl && (
        <div className="container-xl text-center mt-8">
          <Button dark href={buttonUrl}>
            {buttonText}
          </Button>
        </div>
      )}
    </section>
  );
};

export default FeatureBlocks;