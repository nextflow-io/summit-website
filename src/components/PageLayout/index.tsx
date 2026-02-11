import React from 'react';
import LandingHero from '@components/LandingHero';
import FeatureBlocks from '@modules/FeatureBlocks';
import Faq from '@components/Faq';
import { urlFor } from '@data/sanity-image';
import { formatLink, getButtonUrl } from '@utils/linkFormatter';
import { transformFeatureBox } from '@utils/boxTransformer';

type PageLayoutProps = {
  hero?: {
    headline?: string;
    bodycopy?: string;
    button1?: {
      buttonText?: string;
      buttonUrl?: any;
    };
    button2?: {
      buttonText?: string;
      buttonUrl?: any;
    };
    headlineSize?:any;
    image?: {
      image?: any;
      imageAlt?: string;
      alt?: string;
    };
  };
  featureSection?: any[];
  faqSection?: any[];
  children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ 
  hero, 
  featureSection,
  faqSection, 
  children 
}) => {
  return (
    <div className="bg-black text-white">
      {hero && (
        <LandingHero
          title={hero.headline}
          content={hero.bodycopy}
          ctaText1={hero.button1?.buttonText}
          ctaLink1={formatLink(hero.button1?.buttonUrl)}
          ctaText2={hero.button2?.buttonText}
          ctaLink2={formatLink(hero.button2?.buttonUrl)}
          headlineSize={hero.headlineSize}
          image={hero.image?.image ? urlFor(hero.image.image).url() : null}
          imageAlt={hero.image?.imageAlt || hero.image?.alt}
        />
      )}

      {featureSection?.map((section, index) => {
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
              bgStyle={section.bgStyle}
              hideSection={section.hideSection}
            />
          )
        );
      })}

      {children}

      {faqSection && faqSection.length > 0 && <Faq data={faqSection} />}
    </div>
  );
};

export default PageLayout;