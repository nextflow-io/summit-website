import React from 'react';
import LandingHero from '@components/LandingHero';
import Faq from '@components/Faq';

type Props = {
  faq: any;
};

const FaqPage: React.FC<Props> = ({ faq }) => {
  return (
    <>
      <LandingHero
        title={faq.hero?.headline}
        content={faq.hero?.bodycopy}
        ctaText1={faq.hero?.button1?.buttonText}
        ctaLink1={faq.hero?.button1?.buttonUrl}
        ctaText2={faq.hero?.button2?.buttonText}
        ctaLink2={faq.hero?.button2?.buttonUrl}
        headlineSize={faq.hero?.headlineSize}
      />

      {faq.faqSection && faq.faqSection.length > 0 && (
        <>
          {faq.faqSection.map((section, index) => (
            <Faq 
              key={index}
              title={section.faqTitle}
              data={section.faqs} 
            />
          ))}
        </>
      )}
    </>
  );
};

export default FaqPage;