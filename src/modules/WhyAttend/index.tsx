import React from 'react';
import LandingHero from '@components/LandingHero';
import FeatureBlocks from '@modules/FeatureBlocks';
import Faq from '@components/Faq';

type Props = {
  attend: any;
};

const WhyAttendPage: React.FC<Props> = ({ attend }) => {
  return (
    <>
      <LandingHero
        title={attend.hero?.headline}
        content={attend.hero?.bodycopy}
        ctaText1={attend.hero?.button1?.buttonText}
        ctaLink1={attend.hero?.button1?.buttonLink}
        ctaText2={attend.hero?.button2?.buttonText}
        ctaLink2={attend.hero?.button2?.buttonLink}
        headlineSize={attend.hero?.headlineSize}
      />

      {attend.featureSection?.boxes &&
        attend.featureSection.boxes.length > 0 && (
          <FeatureBlocks
            headline={attend.featureSection.headline}
            boxes={attend.featureSection.boxes.map((box) => ({
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

      {attend.faqSection && attend.faqSection.length > 0 && (
        <Faq data={attend.faqSection} />
      )}
    </>
  );
};

export default WhyAttendPage;
