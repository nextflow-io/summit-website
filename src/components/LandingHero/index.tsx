import { useState } from "react";
import Button from "@components/Button";
import styles from "./styles.module.css";
import clsx from "clsx";

interface HeroProps {
  title: string;
  content: string;
  ctaText1?: string;
  ctaLink1?: string;
  ctaText2?: string;
  ctaLink2?: string;
  when?: string;
  where?: string;
  price?: string;
}

const LandingHero = ({
  title,
  content,
  ctaText1,
  ctaLink1,
  ctaText2,
  ctaLink2,
  when,
  where,
  price,
}: HeroProps) => {
  return (
    <div className={clsx(styles.hero, "container")}>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="w-full mb-10 mb:mb-0 md:pr-10 max-w-[750px]">
          <h1 className="h0 mb-10">
           {title}
          </h1>
          <p
            className="monospace"
            dangerouslySetInnerHTML={{ __html: content }}
          />

         <div className="flex md:flex-row items-center">
          {ctaText1 && (
            <Button className="mt-16 relative" white arrowAfter>
              {ctaLink1 && (
                <a className="absolute w-full h-full" href={ctaLink1}></a>
              )}{" "}
              {ctaText1}
            </Button>
          )}

          {ctaText2 && (
            <Button className="ml-10 mt-16 relative" arrowBefore>
              {ctaLink2 && (
                <a className="absolute w-full h-full" href={ctaLink2}></a>
              )}{" "}
              {ctaText2}
            </Button>
          )}
          </div>
        </div>
        <div className={clsx(styles.imageWrapper, "")}>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
