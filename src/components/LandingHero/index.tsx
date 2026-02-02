import { useState, useEffect } from 'react';
import Button from '@components/Button';
import styles from './styles.module.css';
import clsx from 'clsx';
import SeqeraLogo from '@icons/SeqeraLogo';
import Link from './Link';
import { motion } from 'framer-motion';
import PortableText from '@components/PortableText';
import Pixels from '@modules/Pixels';

interface HeroProps {
  title?: string;
  subtitle?: string;
  content: string;
  ctaText1?: string;
  ctaLink1?: string;
  ctaExternal1?: boolean;
  ctaText2?: string;
  ctaLink2?: string;
  ctaExternal2?: boolean;
  namespace?: string;
  headlineSize?: 'small' | 'medium' | 'large' | 'xl';
  image?: any;
  imageAlt?: string;
  showYear?: boolean;
}

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
};

const fadeInUp = {
  initial: { opacity: 0, y: 5 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const LandingHero: React.FC<HeroProps> = ({
  title,
  subtitle,
  content,
  ctaText1,
  ctaLink1,
  ctaText2,
  ctaLink2,
  ctaExternal1,
  ctaExternal2,
  headlineSize = 'medium',
  image,
  imageAlt,
  showYear,
}) => {
  return (
    <motion.div
      {...fadeIn}
      transition={{ duration: 0.4, delay: 0.6, ease: 'linear' }}
      className="py-20 md:py-20 relative w-full h-full flex flex-row justify-between items-center container-xl"
    >
      <Pixels
        initialCellSize={18}
        initialSpeed={100}
        initialDensity={0.0015}
        colorScheme="green"
      />

      <section className={clsx(styles.landingHero, 'h-full relative w-full')}>
        <div className="flex flex-col-reverse sm:flex-row h-full relative">
          {/* Left Column */}
          <div className="w-full h-full sm:pr-10 md:mt-10 md:pb-15">
            <div className="pointer-events-none">
              <div className="relative inline-flex">
                <h1
                  className={` mb-4 md:max-w-[800px]   z-30 relative
                  ${!headlineSize && 'h3'}
                  ${headlineSize === 'xl' ? 'h1' : ''} 
                  ${headlineSize === 'large' ? 'h2' : ''} 
                  ${headlineSize === 'medium' ? 'h3' : ''} 
                  ${headlineSize === 'small' ? 'h4' : ''} 
                `}
                >
                  {title}
                </h1>
                {showYear && (
                <div className="ml-8 p-6 z-50 bg-nextflow-100  w-[40px] md:w-[80px] h-[40px] md:h-[80px] flex justify-center items-center font-display text-black text-[20px] md:text-[40px] font-medium">
                  '26
                </div>
                )}
              </div>
              <h1 className="h1 mb-4 sm:max-w-[500px] bg-black ">{subtitle}</h1>
            </div>

            <div className="flex flex-col sm:max-w-[550px] relative ">
              <div className="z-50 bg-black">
                <PortableText value={content} />
              </div>

              <div className="inline-flex flex-col sm:flex-row sm:items-center">
                {ctaText1 && (
                  <Button
                    arrow
                    className="mt-10 z-50 relative"
                    href={ctaLink1}
                    target={ctaExternal1 ? '_blank' : '_self'}
                  >
                    {ctaText1}
                  </Button>
                )}

                {ctaText2 && (
                  <Button
                    light
                    arrow
                    className="sm:ml-4 mt-3 sm:mt-10 z-50 relative"
                    href={ctaLink2}
                    target={ctaExternal2 ? '_blank' : '_self'}
                  >
                    {ctaText2}
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          {image && (
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.3, delay: 0.5, ease: 'linear' }}
              className="h-full flex flex-col w-full "
            >
              <div>
                <div
                  className={`mb-6 md:mb-0 relative w-full h-0 overflow-hidden pb-[100%] `}
                >
                  <img
                    className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0 object-cover"
                    src={image}
                    alt={imageAlt || 'Image'}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default LandingHero;
