import { useState } from "react";
import Button from "@components/Button";

interface HeroProps {
  preTitle?: string;
  title: string;
  content: string;
  href: string;
  alt?: string;
  ctaText1?: string;
  ctaLink1?: string;
  ctaText2?: string;
  ctaLink2?: string;
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
}: HeroProps) => {
  return (
    <div className={"container pt-10"}>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="w-full mb-10 mb:mb-0 md:pr-10 md:pt-10 max-w-[750px]">
          <h2 className="h2 mb-10">
            {preTitle && <span className="text-nextflow">{preTitle}</span>}{" "}
            {title}
          </h2>
          <p
            className="monospace "
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <div className="inline-flex flex-col sm:flex-row sm:items-center">
            {ctaText1 && (
              <Button className="mt-10 relative" white arrowAfter>
                {ctaLink1 && (
                  <a className="absolute w-full h-full" href={ctaLink1}></a>
                )}{" "}
                {ctaText1}
              </Button>
            )}

            {ctaText2 && (
              <Button className="sm:ml-10 mt-6 sm:mt-10 relative" arrowBefore>
                {ctaLink2 && (
                  <a className="absolute w-full h-full" href={ctaLink2}></a>
                )}{" "}
                {ctaText2}
              </Button>
            )}
          </div>
        </div>
        <div className={"imageBlend border border-nextflow w-full -h-ful"}>
        
            <img
              className="aspect-square w-full h-full object-cover"
              src={href}
              alt={alt}
            />
     
        </div>
      </div>
    </div>
  );
};

export default Hero;
