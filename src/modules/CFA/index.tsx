import React from 'react';
import LandingHero from '@components/LandingHero';
import FeatureBlocks from '@modules/FeatureBlocks';
import Faq from '@components/Faq';
import { urlFor } from '@data/sanity-image';
import { formatLink, getButtonUrl } from '@utils/linkFormatter';
import { transformFeatureBox } from '@utils/boxTransformer';

type Props = {
  cfa: any;
};

const CFA: React.FC<Props> = ({ cfa }) => {

  return (
     <div className="bg-black text-white">
        <LandingHero
        title={cfa.hero?.headline}
        content={cfa.hero?.bodycopy}
        ctaText1={cfa.hero?.button1?.buttonText}
        ctaLink1={formatLink(cfa.hero?.button1?.buttonUrl)}
        ctaText2={cfa.hero?.button2?.buttonText}
        ctaLink2={formatLink(cfa.hero?.button2?.buttonUrl)}
        headlineSize={cfa.hero?.headlineSize}
      />

      {cfa.featureSection?.map((section, index) => {
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
  
      {cfa.faqSection && cfa.faqSection.length > 0 && (
        <Faq data={cfa.faqSection} />
      )}

    </div>
  );
};

export default CFA;
