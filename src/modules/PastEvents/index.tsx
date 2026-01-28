import React from 'react';
import LandingHero from '@components/LandingHero';
import FeatureBlocks from '@modules/FeatureBlocks';
import Faq from '@components/Faq';
import { urlFor } from '@data/sanity-image'

type Props = {
  past: any;
};

const PastEventsPage: React.FC<Props> = ({ past }) => {
  return (
    <>
      <LandingHero
        title={past.hero?.headline}
        content={past.hero?.bodycopy}
        ctaText1={past.hero?.button1?.buttonText}
        ctaLink1={past.hero?.button1?.buttonLink}
        ctaText2={past.hero?.button2?.buttonText}
        ctaLink2={past.hero?.button2?.buttonLink}
        headlineSize={past.hero?.headlineSize}
      />

      {past.featureSection?.map(
        (section, index) =>
          section?.boxes &&
          section.boxes.length > 0 && (
            <FeatureBlocks
              key={index}
              headline={section.headline}
              boxes={section.boxes.map((box) => {
                const link = box?.title?.href;
                const href = link?.isExternal
                  ? link?.externalUrl
                  : link?.internalLink;

                return {
                  title: box?.title?.title,
                  href: href || null,
                  externalLink: link?.isExternal || false,
                  subtitleLeft: box?.subtitle?.subtitleLeft,
                  subtitleRight: box?.subtitle?.subtitleRight,
                  image: box?.image?.image
                    ? urlFor(box.image.image).url()
                    : null,
                  imageAlt: box?.image?.imageAlt || box?.image?.alt,
                  imageCover?: box?.imageCover,
                  bottomSubtitleLeft: box?.lowerSubtitle?.lowerSubtitleLeft,
                  bottomSubtitleRight: box?.lowerSubtitle?.lowerSubtitleRight,
                  headline: box?.headline,
                  bodycopy: box?.bodycopy,
                  buttonText: box?.cta?.buttonText,
                  buttonUrl:
                    box?.cta?.buttonLink || box?.cta?.buttonUrl?.url || null,
                };
              })}
            />
          )
      )}

      {past.faqSection && past.faqSection.length > 0 && (
        <Faq data={past.faqSection} />
      )}
    </>
  );
};

export default PastEventsPage;
