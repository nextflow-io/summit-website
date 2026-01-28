import React from 'react';
import LandingHero from '@components/LandingHero';
import FeatureBlocks from '@modules/FeatureBlocks';
import Faq from '@components/Faq';
import NextflowNumbers from '@modules/NextflowNumbers';
import KeyDates from '@modules/KeyDates';
import SignUpForm from '@modules/SignUpForm';

type Props = {
  home: any;
};

const Homepage: React.FC<Props> = ({ home }) => {
  return (
    <>
      <LandingHero
        title={home.hero?.headline}
        content={home.hero?.bodycopy}
        ctaText1={home.hero?.button1?.buttonText}
        ctaLink1={home.hero?.button1?.buttonLink}
        ctaText2={home.hero?.button2?.buttonText}
        ctaLink2={home.hero?.button2?.buttonLink}
        headlineSize={home.hero?.headlineSize}
      />

      {home.featureSection?.boxes && home.featureSection.boxes.length > 0 && (
        <FeatureBlocks
          headline={home.featureSection.headline}
          boxes={home.featureSection.boxes.map((box) => ({
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

      {home.nextflowNumbers && (
        <NextflowNumbers
          headline={home.nextflowNumbers.headline}
          featuredStats={home.nextflowNumbers.featuredStats}
          stats={home.nextflowNumbers.statsSection}
        />
      )}

      {home.keyDatesSection && (
        <KeyDates
          dates={home.keyDatesSection.dates}
          images={home.keyDatesSection.images}
        />
      )}

      {home.pastEvents?.boxes && home.pastEvents.boxes.length > 0 && (
        <FeatureBlocks
          headline={home.pastEvents.headline}
          boxes={home.pastEvents.boxes.map((box) => ({
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

      {home.faqSection && home.faqSection.length > 0 && (
        <Faq data={home.faqSection} />
      )}

      <SignUpForm />
    </>
  );
};

export default Homepage;