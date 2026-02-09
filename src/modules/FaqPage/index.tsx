import React from 'react';
import Faq from '@components/Faq';
import PortableText from '@components/PortableText';
import { motion } from 'framer-motion';
import Pixels from '@modules/Pixels';

type Props = {
  data: any;
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
};

const FaqPage: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-black text-white">

      <section>
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.4, delay: 0.6, ease: 'linear' }}
          className="py-20 md:py-20 relative w-full h-full flex flex-row justify-between items-center container-xl"
        >
          <Pixels
            initialCellSize={18}
            initialSpeed={100}
            initialDensity={0.002}
            colorScheme="green"
          />

          <div className="w-full h-full sm:pr-10 md:mt-10 md:pb-15">
            <div className="pointer-events-none">
              <div className="relative inline-flex">
                <h1
                  className={` mb-4 md:max-w-[800px] z-30 relative h3
                `}
                >
                  {data.hero?.headline}
                </h1>
              </div>
            </div>

            <div className="flex flex-col sm:max-w-[550px] relative">
              <div className="z-50 pointer-events-none">
                <PortableText value={data.hero?.bodycopy} />
              </div>
            </div>


            <div className="mt-10 relative z-50">
            {data.faqSection && data.faqSection.length > 0 && (
              <div className="inline-flex flex-col text-xl">
                {data.faqSection.map((section, index) => (
                 <a className="hover:text-nextflow-600" href={`#${section.faqTitle}`}><h3 className="h6 mb-2">→ {section.faqTitle}</h3></a>
                ))}
              </div>
            )}
            </div>
          </div>
        </motion.div>
      </section>

      {data.faqSection && data.faqSection.length > 0 && (
        <>
          {data.faqSection.map((section, index) => (
            <Faq
              key={index}
              title={section.faqTitle}
              data={section.faqs}
              noSticky
              noPixels
            />
          ))}
        </>
      )}
    </div>
  );
};

export default FaqPage;
