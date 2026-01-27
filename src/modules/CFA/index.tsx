import React from 'react';
import LandingHero from '@components/LandingHero';
import PortableText from '@components/PortableText';
import FeatureBlocks from '@modules/FeatureBlocks';
import Faq from '@components/Faq';

type Props = {
  cfa: any;
};

const CFA: React.FC<Props> = ({ cfa }) => {
  // console.log('Raw box data:', cfa.featureSection?.boxes);

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

      {cfa.featureSection?.boxes && cfa.featureSection.boxes.length > 0 && (
        <FeatureBlocks
          headline={cfa.featureSection.headline}
          boxes={cfa.featureSection.boxes.map((box) => ({
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
