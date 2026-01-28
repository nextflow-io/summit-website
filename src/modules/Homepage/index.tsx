import React from 'react';
import LandingHero from '@components/LandingHero';
import FeatureBlocks from '@modules/FeatureBlocks';
import Faq from '@components/Faq';
import NextflowNumbers from '@modules/NextflowNumbers';
import KeyDates from '@modules/KeyDates';
import SignUpForm from '@modules/SignUpForm';
import { urlFor } from '@data/sanity-image'

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

      {home.featureSection?.map((section, index) => (
        section?.boxes && section.boxes.length > 0 && (
          <FeatureBlocks
            key={index}
            headline={section.headline}
            bodycopy={section.bodycopy}
            boxes={section.boxes.map((box) => {
              const link = box?.title?.href;
              const href = link?.isExternal ? link?.externalUrl : link?.internalLink;
              
              // Extract button URL the same way as title href
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
                image: box?.image?.image ? urlFor(box.image.image).url() : null,
                imageAlt: box?.image?.imageAlt || box?.image?.alt,
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
      ))}

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
          boxes={home.pastEvents.boxes.map((box) => {
            const link = box?.title?.href;
            const href = link?.isExternal ? link?.externalUrl : link?.internalLink;
            
            // Extract button URL the same way as title href
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
              image: box?.image?.image ? urlFor(box.image.image).url() : null,
              imageAlt: box?.image?.imageAlt || box?.image?.alt,
              bottomSubtitleLeft: box?.lowerSubtitle?.lowerSubtitleLeft,
              bottomSubtitleRight: box?.lowerSubtitle?.lowerSubtitleRight,
              headline: box?.headline,
              bodycopy: box?.bodycopy,
              buttonText: box?.cta?.buttonText,
              buttonUrl: buttonUrl || null,
            };
          })}
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