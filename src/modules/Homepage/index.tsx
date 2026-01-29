import React from 'react';
import LandingHero from '@components/LandingHero';
import FeatureBlocks from '@modules/FeatureBlocks';
import Faq from '@components/Faq';
import NextflowNumbers from '@modules/NextflowNumbers';
import KeyDates from '@modules/KeyDates';
import SignUpForm from '@modules/SignUpForm';
import { formatLink, getButtonUrl } from '@utils/linkFormatter';
import { transformFeatureBox } from '@utils/boxTransformer';
import { urlFor } from '@data/sanity-image';

type Props = {
  data: any;
};

const Homepage: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-black text-white">
      <LandingHero
        title={data.hero?.headline}
        content={data.hero?.bodycopy}
        ctaText1={data.hero?.button1?.buttonText}
        ctaLink1={formatLink(data.hero?.button1?.buttonUrl)}
        ctaText2={data.hero?.button2?.buttonText}
        ctaLink2={formatLink(data.hero?.button2?.buttonUrl)}
        headlineSize={data.hero?.headlineSize}
        image={data.image?.image ? urlFor(data.image.image).url() : null}
        imageAlt={data.image?.imageAlt || data.image?.alt}
      />

      {data.featureSection?.map((section, index) => {
        const sectionButtonUrl = getButtonUrl(section?.button);
        return (
          section?.boxes &&
          section.boxes.length > 0 && (
            <FeatureBlocks
              key={index}
              headline={section.headline}
              bodycopy={section.bodycopy}
              buttonText={section.button?.buttonText}
              buttonUrl={sectionButtonUrl}
              boxes={section.boxes.map(transformFeatureBox)}
            />
          )
        );
      })}

      {data.nextflowNumbers && (
        <NextflowNumbers
          headline={data.nextflowNumbers.headline}
          featuredStats={data.nextflowNumbers.featuredStats}
          stats={data.nextflowNumbers.statsSection}
        />
      )}

      {data.keyDatesSection && (
        <KeyDates
          dates={data.keyDatesSection.dates}
          images={data.keyDatesSection.images}
        />
      )}

      {data.pastEvents?.boxes && data.pastEvents.boxes.length > 0 && (
        <FeatureBlocks
          headline={data.pastEvents.headline}
          buttonText={data.pastEvents.button?.buttonText}
          bodycopy={data.pastEvents.bodycopy}
          buttonUrl={getButtonUrl(data.pastEvents?.button)}
          boxes={data.pastEvents.boxes.map(transformFeatureBox)}
        />
      )}

      {data.faqSection && data.faqSection.length > 0 && (
        <Faq data={data.faqSection} />
      )}

      <SignUpForm />
    </div>
  );
};

export default Homepage;
