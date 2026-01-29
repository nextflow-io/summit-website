import React from 'react';
import LandingHero from '@components/LandingHero';
import FeatureBlocks from '@modules/FeatureBlocks';
import Faq from '@components/Faq';
import { formatLink, getButtonUrl } from '@utils/linkFormatter';
import { transformFeatureBox } from '@utils/boxTransformer';

type Props = {
  travel: any;
};

const TravelPage: React.FC<Props> = ({ travel }) => {
  return (
    <div className="bg-black text-white">
      <LandingHero
        title={travel.hero?.headline}
        content={travel.hero?.bodycopy}
        ctaText1={travel.hero?.button1?.buttonText}
        ctaLink1={formatLink(travel.hero?.button1?.buttonUrl)}
        ctaText2={travel.hero?.button2?.buttonText}
        ctaLink2={formatLink(travel.hero?.button2?.buttonUrl)}
        headlineSize={travel.hero?.headlineSize}
      />

      {travel.featureSection?.map((section, index) => {
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

      {travel.faqSection && travel.faqSection.length > 0 && (
        <Faq data={travel.faqSection} />
      )}
    </div>
  );
};

export default TravelPage;
