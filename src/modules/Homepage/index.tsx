import React from 'react';
import LandingHero from '@components/LandingHero';
import FeatureBlocks from '@modules/FeatureBlocks';
import Faq from '@components/Faq';
import NextflowNumbers from '@modules/NextflowNumbers';
import KeyDates from '@modules/KeyDates';
import SignUpForm from '@modules/SignUpForm';
import { formatLink, getButtonUrl } from '@utils/linkFormatter';
import { transformFeatureBox } from '@utils/boxTransformer';

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
        ctaLink1={formatLink(home.hero?.button1?.buttonUrl)}
        ctaText2={home.hero?.button2?.buttonText}
        ctaLink2={formatLink(home.hero?.button2?.buttonUrl)}
        headlineSize={home.hero?.headlineSize}
      />

      {home.featureSection?.map((section, index) => {
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
          buttonText={home.pastEvents.button?.buttonText}
          buttonUrl={getButtonUrl(home.pastEvents?.button)}
          boxes={home.pastEvents.boxes.map(transformFeatureBox)}
        />
      )}

      {home.faqSection && home.faqSection.length > 0 && (
        <Faq data={home.faqSection} />
      )}

      <SignUpForm />
    </div>
  );
};

export default Homepage;