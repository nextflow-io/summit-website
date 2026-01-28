import React from 'react';
import LandingHero from '@components/LandingHero';
import FeatureBlocks from '@modules/FeatureBlocks';
import Faq from '@components/Faq';

type Props = {
  hackathon: any;
};

const Hackathon: React.FC<Props> = ({ hackathon }) => {
  return (
    <>
      <LandingHero
        title={hackathon.hero?.headline}
        content={hackathon.hero?.bodycopy}
        ctaText1={hackathon.hero?.button1?.buttonText}
        ctaLink1={hackathon.hero?.button1?.buttonLink}
        ctaText2={hackathon.hero?.button2?.buttonText}
        ctaLink2={hackathon.hero?.button2?.buttonLink}
        headlineSize={hackathon.hero?.headlineSize}
      />

      {hackathon.featureSection?.map((section, index) => (
        section?.boxes && section.boxes.length > 0 && (
          <FeatureBlocks
            key={index}
            headline={section.headline}
            boxes={section.boxes.map((box) => ({
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
        )
      ))}

      {hackathon.faqSection && hackathon.faqSection.length > 0 && (
        <Faq data={hackathon.faqSection} />
      )}
    </>
  );
};

export default Hackathon;