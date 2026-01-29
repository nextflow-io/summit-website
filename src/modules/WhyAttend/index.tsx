import React from 'react';
import LandingHero from '@components/LandingHero';
import FeatureBlocks from '@modules/FeatureBlocks';
import Faq from '@components/Faq';
import { urlFor } from '@data/sanity-image'

type Props = {
  attend: any;
};

const WhyAttendPage: React.FC<Props> = ({ attend }) => {
  
  return (
    <div className="bg-black text-white">
      <LandingHero
        title={attend.hero?.headline}
        content={attend.hero?.bodycopy}
        ctaText1={attend.hero?.button1?.buttonText}
        ctaLink1={attend.hero?.button1?.buttonLink}
        ctaText2={attend.hero?.button2?.buttonText}
        ctaLink2={attend.hero?.button2?.buttonLink}
        headlineSize={attend.hero?.headlineSize}
      />

        {attend.featureSection?.map(
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
                  imageCover: box?.imageCover,
                  imageAlt: box?.image?.imageAlt || box?.image?.alt,
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

      {attend.faqSection && attend.faqSection.length > 0 && (
        <Faq data={attend.faqSection} />
      )}
    </div>
  );
};

export default WhyAttendPage;
