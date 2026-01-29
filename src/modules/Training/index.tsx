import React from 'react';
import LandingHero from '@components/LandingHero';
import FeatureBlocks from '@modules/FeatureBlocks';
import Faq from '@components/Faq';

type Props = {
  training: any;
};

const Training: React.FC<Props> = ({ training }) => {
  return (
     <div className="bg-black text-white">
      <LandingHero
        title={training.hero?.headline}
        content={training.hero?.bodycopy}
        ctaText1={training.hero?.button1?.buttonText}
        ctaLink1={training.hero?.button1?.buttonLink}
        ctaText2={training.hero?.button2?.buttonText}
        ctaLink2={training.hero?.button2?.buttonLink}
        headlineSize={training.hero?.headlineSize}
      />

      {training.featureSection?.map((section, index) => (
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

      {training.faqSection && training.faqSection.length > 0 && (
        <Faq data={training.faqSection} />
      )}
    </div>
  );
};

export default Training;