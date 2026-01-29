import React from 'react';
import LandingHero from '@components/LandingHero';
import Faq from '@components/Faq';

type Props = {
  data: any;
};

const FaqPage: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-black text-white">
      <LandingHero
        title={data.hero?.headline}
        content={data.hero?.bodycopy}
        ctaText1={data.hero?.button1?.buttonText}
        ctaLink1={data.hero?.button1?.buttonUrl}
        ctaText2={data.hero?.button2?.buttonText}
        ctaLink2={data.hero?.button2?.buttonUrl}
        headlineSize={data.hero?.headlineSize}
      />

      {data.faqSection && data.faqSection.length > 0 && (
        <>
          {data.faqSection.map((section, index) => (
            <Faq 
              key={index}
              title={section.faqTitle}
              data={section.faqs} 
            />
          ))}
        </>
      )}
   </div>
  );
};

export default FaqPage;