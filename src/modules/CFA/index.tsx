import React from 'react';
import LandingHero from '@components/LandingHero';
import FeatureBlocks from '@modules/FeatureBlocks';
import Faq from '@components/Faq';
import { urlFor } from '@data/sanity-image';

type Props = {
  cfa: any;
};

const CFA: React.FC<Props> = ({ cfa }) => {

  return (
    <>
      <LandingHero
        title={cfa.hero?.headline}
        content={cfa.hero?.bodycopy}
        ctaText1={cfa.hero?.button1?.buttonText}
        ctaLink1={cfa.hero?.button1?.buttonLink}
        ctaText2={cfa.hero?.button2?.buttonText}
        ctaLink2={cfa.hero?.button2?.buttonLink}
        headlineSize={cfa.hero?.headlineSize}
      />

        {cfa.featureSection?.map((section, index) => {
        const sectionButtonLink = section?.button?.buttonUrl;
        const sectionButtonUrl = sectionButtonLink?.isExternal
          ? sectionButtonLink?.externalUrl
          : sectionButtonLink?.internalLink;

        return (
          section?.boxes &&
          section.boxes.length > 0 && (
            <FeatureBlocks
              key={index}
              headline={section.headline}
              bodycopy={section.bodycopy}
              buttonText={section.button?.buttonText}
              buttonUrl={sectionButtonUrl || null}
              boxes={section.boxes.map((box) => {
                const link = box?.title?.href;
                const href = link?.isExternal
                  ? link?.externalUrl
                  : link?.internalLink;

                const buttonLink = box?.cta?.buttonUrl;
                const buttonUrl = buttonLink?.isExternal
                  ? buttonLink?.externalUrl
                  : buttonLink?.internalLink;

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
                  imageCover: box?.imageCover,
                  bottomSubtitleLeft: box?.lowerSubtitle?.lowerSubtitleLeft,
                  bottomSubtitleRight: box?.lowerSubtitle?.lowerSubtitleRight,
                  headline: box?.headline,
                  bodycopy: box?.bodycopy,
                  buttonText: box?.cta?.buttonText,
                  buttonUrl: buttonUrl || null,
                };
              })}
            />
          )
        );
      })}
  
      {cfa.faqSection && cfa.faqSection.length > 0 && (
        <Faq data={cfa.faqSection} />
      )}
      {/* <section>
        <iframe src="https://seqera.swoogo.com/summit-boston-2026/call-for-abstracts"/>
      </section> */}
    </>
  );
};

export default CFA;
