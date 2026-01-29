import React from 'react';
import LandingHero from '@components/LandingHero';
import FeatureBlocks from '@modules/FeatureBlocks';
import Faq from '@components/Faq';
import NextflowNumbers from '@modules/NextflowNumbers';
import KeyDates from '@modules/KeyDates';
import SignUpForm from '@modules/SignUpForm';
import { urlFor } from '@data/sanity-image';

type Props = {
  home: any;
};

const Homepage: React.FC<Props> = ({ home }) => {
  return (
    <div className="bg-black text-white">
      <LandingHero
        title={home.hero?.headline}
        content={home.hero?.bodycopy}
        ctaText1={home.hero?.button1?.buttonText}
        ctaLink1={home.hero?.button1?.buttonLink}
        ctaText2={home.hero?.button2?.buttonText}
        ctaLink2={home.hero?.button2?.buttonLink}
        headlineSize={home.hero?.headlineSize}
      />

      {home.featureSection?.map((section, index) => {
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

      {home.pastEvents?.boxes &&
        home.pastEvents.boxes.length > 0 &&
        (() => {
          const pastEventsButtonLink = home.pastEvents?.button?.buttonUrl;
          const pastEventsButtonUrl = pastEventsButtonLink?.isExternal
            ? pastEventsButtonLink?.externalUrl
            : pastEventsButtonLink?.internalLink;

          return (
            <FeatureBlocks
              headline={home.pastEvents.headline}
              buttonText={home.pastEvents.button?.buttonText}
              buttonUrl={pastEventsButtonUrl || null}
              boxes={home.pastEvents.boxes.map((box) => {
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
          );
        })()}

      {home.faqSection && home.faqSection.length > 0 && (
        <Faq data={home.faqSection} />
      )}

      <SignUpForm />
    </div>
  );
};

export default Homepage;
