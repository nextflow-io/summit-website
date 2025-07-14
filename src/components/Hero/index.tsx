import { useState } from "react";
import Button from "@components/Button";
import { motion } from "framer-motion";

interface HeroProps {
  preTitle?: string;
  title: string;
  content: string;
  href?: string;
  alt?: string;
  ctaText1?: string;
  ctaLink1?: string;
  ctaExternal1?: boolean;
  ctaText2?: string;
  ctaLink2?: string;
  ctaExternal2?: boolean;
}

const Hero = ({
  preTitle,
  title,
  content,
  href,
  alt,
  ctaText1,
  ctaLink1,
  ctaText2,
  ctaLink2,
  ctaExternal1,
  ctaExternal2,
}: HeroProps) => {
  return (
    <motion.div 
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    viewport={{
      once: true,
    }}
    transition={{
      duration: 0.25,
      ease: "linear",
      delay: .7,
    }}
    
    className={"container pt-10"}>
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="w-full mb-10 sm:mb-0 sm:pr-10 sm:pt-10 max-w-[750px]">
          <h2 className="h2 mb-10">
            {preTitle && <span className="text-nextflow">{preTitle}</span>}{" "}
            {title}
          </h2>
          <p
            className="monospace "
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <div className="inline-flex flex-col sm:flex-row sm:items-center mr-8" >
            {ctaText1 && (
              <Button className="mt-10 relative" white arrowAfter>
                {ctaLink1 && (
                  <a className="absolute w-full h-full" href={ctaLink1} target={`${ctaExternal1 ? '_blank' : '_self'}`} ></a>
                )}{" "}
                {ctaText1}
              </Button>
            )}

            {ctaText2 && (
              <Button className="sm:ml-10 mt-6 sm:mt-10 relative" arrowBefore>
                {ctaLink2 && (
                  <a className="absolute w-full h-full" href={ctaLink2} target={`${ctaExternal2 ? '_blank' : '_self'}`}></a>
                )}{" "}
                {ctaText2}
              </Button>
            )}
          </div>
        </div>
        {href &&
        <div className={"imageBlend border border-nextflow w-full h-full object-cover"}>
            <img
              className="aspect-square w-full h-full object-cover"
              src={href}
              alt={alt}
            />
        </div>
        }
      </div>
    </motion.div>
  );
};

export default Hero;
