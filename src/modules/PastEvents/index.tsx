import React from 'react';
import LandingHero from '@components/LandingHero';
import FeatureBlocks from '@modules/FeatureBlocks';
import Faq from '@components/Faq';
import { urlFor } from '@data/sanity-image'
import { formatLink, getButtonUrl } from '@utils/linkFormatter';
import { transformFeatureBox } from '@utils/boxTransformer';

type Props = {
  past: any;
};

const PastEventsPage: React.FC<Props> = ({ past }) => {
  return (
     <div className="bg-black text-white">
        <LandingHero
        title={past.hero?.headline}
        content={past.hero?.bodycopy}
        ctaText1={past.hero?.button1?.buttonText}
        ctaLink1={formatLink(past.hero?.button1?.buttonUrl)}
        ctaText2={past.hero?.button2?.buttonText}
        ctaLink2={formatLink(past.hero?.button2?.buttonUrl)}
        headlineSize={past.hero?.headlineSize}
      />

      {past.featureSection?.map((section, index) => {
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

      {past.faqSection && past.faqSection.length > 0 && (
        <Faq data={past.faqSection} />
      )}
    </div>
  );
};

export default PastEventsPage;
