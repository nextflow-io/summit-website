import React from 'react';
import LandingHero from '@components/LandingHero';
import FeatureBlocks from '@modules/FeatureBlocks';
import Faq from '@components/Faq';

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

      {past.featureSection?.boxes &&
        past.featureSection.boxes.length > 0 && (
          <FeatureBlocks
            headline={past.featureSection.headline}
            boxes={past.featureSection.boxes.map((box) => ({
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

      {past.faqSection && past.faqSection.length > 0 && (
        <Faq data={past.faqSection} />
      )}
    </>
  );
};

export default PastEventsPage;
