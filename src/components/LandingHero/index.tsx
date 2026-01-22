import { useState, useEffect } from "react";
import Button from "@components/Button";
import styles from "./styles.module.css";
import clsx from "clsx";
import SeqeraLogo from "@icons/SeqeraLogo";
import Link from "./Link";
import { motion } from "framer-motion";

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
  when?: string;
  where?: string;
  price?: string;
  boston?: string;
  barcelona?: string;
  virtual?: string;
  namespace?: string;
  pathname?: string;
  isBoston?: boolean;
  isBarcelona?: boolean;
  isBoth?: boolean;
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
  when,
  where,
  boston,
  barcelona,
  virtual,
}) => {
  return (
    <motion.div
      {...fadeIn}
      transition={{ duration: 0.25, ease: "linear" }}
      className="py-30 relative w-full h-full flex flex-row justify-between items-center container-xl"
    >
      <section className={clsx(styles.landingHero, "h-full relative w-full")}>
        <div className="w-full flex flex-col sm:flex-row h-full relative z-10">
          {/* Left Column */}
          <div className="w-full h-full sm:pr-10">
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.4, delay: 0.7, ease: "linear" }}
            >
              <h1 className="h0 mb-4 max-w-[250px] sm:max-w-[800px]">
                {title}
              </h1>
              <h1 className="h1 mb-4 max-w-[250px] sm:max-w-[500px]">
                {subtitle}
              </h1>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ duration: 0.4, delay: 1, ease: "linear" }}
              className="flex flex-col"
            >
              <p
                className="m:max-w-[580px] md:max-w-[550px]"
                dangerouslySetInnerHTML={{ __html: content }}
              />

              <div className="inline-flex flex-col sm:flex-row sm:items-center">
                {ctaText1 && (
                  <Button className="mt-10" href={ctaLink1} target={ctaExternal1 ? "_blank" : "_self"}>
                    {ctaText1}
                  </Button>
                )}

                {ctaText2 && (
                  <Button
                    light
                    className="sm:ml-4 mt-6 sm:mt-10"
                    href={ctaLink2}
                    target={ctaExternal2 ? "_blank" : "_self"}
                  >
                    {ctaText2}
                  </Button>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.6, delay: 1.3, ease: "linear" }}
            className="h-full flex flex-col sm:text-right w-full"
          >
            <div>
              {when && (
                <div className="mb-10">
                  <p className="h6 text-nextflow monospace mb-2">When</p>
                  <h3 className="h3">{when}</h3>
                </div>
              )}

              {where && where !== "both" && (
                <div className="mb-10">
                  <p className="h5 text-nextflow monospace mb-2">Where</p>
                  <h3 className="h3">{where}</h3>
                </div>
              )}

              {boston && (
                <div className="mb-10">
                  <p className="h5 text-nextflow monospace mb-2">Boston</p>
                  <h3 className="h3">{boston}</h3>
                </div>
              )}

              {virtual && (
                <div className="mb-10">
                  <h3 className="h5 mb-2">Nextflow Summit</h3>
                  <p className="h6 text-nextflow monospace mb-2">Virtual</p>
                  <p className="h6 text-nextflow monospace mb-2">{virtual}</p>
                </div>
              )}

              {barcelona && (
                <div className="mb-10">
                  <h3 className="h5 mb-2">Training & Hackathon</h3>
                  <p className="h6 text-nextflow monospace mb-2">Barcelona</p>
                  <p className="h6 text-nextflow monospace mb-2">{barcelona}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default LandingHero;