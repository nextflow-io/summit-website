import React from 'react';
import LandingHero from '@components/LandingHero';
import FeatureBlocks from '@modules/FeatureBlocks';
import Faq from '@components/Faq';
import { formatLink, getButtonUrl } from '@utils/linkFormatter';
import { transformFeatureBox } from '@utils/boxTransformer';

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
        ctaLink1={formatLink(training.hero?.button1?.buttonUrl)}
        ctaText2={training.hero?.button2?.buttonText}
        ctaLink2={formatLink(training.hero?.button2?.buttonUrl)}
        headlineSize={training.hero?.headlineSize}
      />
      {training.featureSection?.map((section, index) => {
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

      {training.faqSection && training.faqSection.length > 0 && (
        <Faq data={training.faqSection} />
      )}
    </div>
  );
};

export default Training;
