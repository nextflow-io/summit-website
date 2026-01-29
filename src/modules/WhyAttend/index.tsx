import React from 'react';
import LandingHero from '@components/LandingHero';
import FeatureBlocks from '@modules/FeatureBlocks';
import Faq from '@components/Faq';
import { urlFor } from '@data/sanity-image';
import { formatLink, getButtonUrl } from '@utils/linkFormatter';
import { transformFeatureBox } from '@utils/boxTransformer';

type Props = {
 data: any;
};

const WhyAttendPage: React.FC<Props> = ({ data }) => {
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
        image={data.hero?.image?.image ? urlFor(data.hero.image.image).url() : null}
        imageAlt={data.hero?.image?.imageAlt || data.hero?.image?.alt}
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

      {data.faqSection && data.faqSection.length > 0 && (
        <Faq data={data.faqSection} />
      )}
    </div>
  );
};

export default WhyAttendPage;