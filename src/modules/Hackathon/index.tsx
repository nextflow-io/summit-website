import React from 'react';
import LandingHero from '@components/LandingHero';
import FeatureBlocks from '@modules/FeatureBlocks';
import Faq from '@components/Faq';
import { formatLink, getButtonUrl } from '@utils/linkFormatter';
import { transformFeatureBox } from '@utils/boxTransformer';


type Props = {
  hackathon: any;
};

const Hackathon: React.FC<Props> = ({ hackathon }) => {
  return (
     <div className="bg-black text-white">
      <LandingHero
        title={hackathon.hero?.headline}
        content={hackathon.hero?.bodycopy}
        ctaText1={hackathon.hero?.button1?.buttonText}
        ctaLink1={formatLink(hackathon.hero?.button1?.buttonUrl)}
        ctaText2={hackathon.hero?.button2?.buttonText}
        ctaLink2={formatLink(hackathon.hero?.button2?.buttonUrl)}
        headlineSize={hackathon.hero?.headlineSize}
      />

      {hackathon.featureSection?.map((section, index) => {
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

      {hackathon.faqSection && hackathon.faqSection.length > 0 && (
        <Faq data={hackathon.faqSection} />
      )}
    </div>
  );
};

export default Hackathon;