import { useState } from "react";
import Button from "@components/Button";
import styles from "./styles.module.css";
import clsx from "clsx";
import SeqeraLogo from "@icons/SeqeraLogo";

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
    <section className={clsx(styles.landingHero,"container h-screen relative")}>
      <div className="flex flex-col md:flex-row md:justify-between h-full">
        <div className="w-full h-full mt-10 md:mt-0 mb-10 mb:mb-0 md:pr-10 max-w-[750px]">
          <h1 className="h0 mb-4">{title}</h1>
          <div
            className={clsx(
              styles.landingLogo,
              "flex flex-row items-center mb-16",
            )}
          >
            <p className="h3 mr-4">by</p> <SeqeraLogo />
          </div>
          <p
            className="monospace max-w-[680px]"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <div className="inline-flex flex-col md:flex-row md:items-center">
            {ctaText1 && (
              <Button className="mt-10 relative" white arrowAfter>
                {ctaLink1 && (
                  <a className="absolute w-full h-full" href={ctaLink1}></a>
                )}{" "}
                {ctaText1}
              </Button>
            )}

            {ctaText2 && (
              <Button className="md:ml-10 mt-6 md:mt-10 relative" arrowBefore>
                {ctaLink2 && (
                  <a className="absolute w-full h-full" href={ctaLink2}></a>
                )}{" "}
                {ctaText2}
              </Button>
            )}
          </div>
        </div>
        <div
          className={clsx(
            styles.rightWrapper,
            "h-full flex flex-col justify-between md:text-right",
          )}
        >
          <div className="mt-20">
            <div className="mb-10">
              <p className="h6 text-nextflow monospace mb-2">When</p>
              <h3 className="h3">May 14-16</h3>
            </div>
            <div className="mb-10">
              <p className="h6 text-nextflow monospace mb-2">Where</p>
              <h3 className="h3">Boston</h3>
            </div>
            <div className="mb-10">
              <p className="h6 text-nextflow monospace mb-2">Price</p>
              <h3 className="h3">XXX</h3>
            </div>
          </div>
          <h1 className="h0">2025</h1>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
