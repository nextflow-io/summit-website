import React from 'react';
import LandingHero from '@components/LandingHero';
import FeatureBlocks from '@modules/FeatureBlocks';
import Faq from '@components/Faq';
type Props = {
  overview: any;
};

const Overview: React.FC<Props> = ({ overview }) => {
  return (
    <>
      <LandingHero
        title={overview.hero?.headline}
        content={overview.hero?.bodycopy}
        ctaText1={overview.hero?.button1?.buttonText}
        ctaLink1={overview.hero?.button1?.buttonLink}
        ctaText2={overview.hero?.button2?.buttonText}
        ctaLink2={overview.hero?.button2?.buttonLink}
        headlineSize={overview.hero?.headlineSize}
      />

      {overview.featureSection?.boxes && overview.featureSection.boxes.length > 0 && (
        <FeatureBlocks
          headline={overview.featureSection.headline}
          boxes={overview.featureSection.boxes.map((box) => ({
            title: box?.title?.title,
            href: box?.title?.href?.url || box?.title?.href?.href,
            externalLink: box?.title?.href?.external,
            subtitleLeft: box?.subtitle?.subtitleLeft,
            subtitleRight: box?.subtitle?.subtitleRight,
            image: box?.image?.asset?.url,
            imageAlt: box?.image?.alt,
            bottomSubtitleLeft: box?.lowerSubtitle?.lowerSubtitleLeft,
            bottomSubtitleRight: box?.lowerSubtitle?.lowerSubtitleRight,
            headline: box?.headline,
            bodycopy: box?.bodycopy,
            buttonText: box?.cta?.buttonText,
            buttonUrl: box?.cta?.buttonLink || box?.cta?.buttonUrl,
          }))}
        />
      )}

      {overview.faqSection && overview.faqSection.length > 0 && (
        <Faq data={overview.faqSection} />
      )}
    </>
  );
};

export default Overview;
