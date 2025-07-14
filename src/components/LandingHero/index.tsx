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
  isBarcelona?:boolean;
  isBoth?:boolean;
}

const LandingHero: React.FC<HeroProps> = (props) => {
  const {
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
    price,
    pathname,
    namespace,
    boston,
    barcelona,
    virtual,
    isBoston,
    isBarcelona,
    isBoth
  } = props;

  function getURL(path, root = false) {
    if (root) return path;
    if (!namespace) return path;
    return `/${namespace}${path}`;
  }

  function isActive(path) {
    return pathname?.includes(path);
  }

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
      }}
      className="md:min-h-[750px] relative w-full h-full"
    >
      <div className={clsx(styles.colorBarWrapper, "top-[0%] right-[15%]")}>
        <div
          className={clsx(
            styles.colorBar,
            styles[`${isBarcelona && "blue"}`],
            styles[`${isBoston && "red"}`],
            styles[`${isBoth && "red"}`],
            ``,
          )}
        >
          <div></div>
        </div>
      </div>

      <div className={clsx(styles.colorBarWrapper, "top-[20%] left-[0%]")}>
        <div className={clsx(styles.colorBar, styles[`green`], "colorBar")}>
          <div></div>
        </div>
      </div>

      <div className={clsx(styles.colorBarWrapper, "top-[50%] right-[20%]")}>
        <div className={clsx(styles.colorBar, styles["green"], "colorBar")}>
          <div></div>
        </div>
      </div>

      <div className={clsx(styles.colorBarWrapper, "bottom-[5%] right-[00%]")}>
        <div
          className={clsx(
            styles.colorBar,
            styles[`${isBarcelona && "blue"}`],
            styles[`${isBoston && "red"}`],
            styles[`${isBoth && "blue"}`],
          )}
        >
          <div></div>
        </div>
      </div>

      <section
        className={clsx(styles.landingHero, "container h-full relative")}
      >
        <div className="flex flex-col sm:flex-row sm:justify-between h-full relative z-10">
          <div className="w-full h-full mt-10 sm:mt-0 sm:pr-10 max-w-[750px]">
            <motion.div
              initial={{
                opacity: 0,
                y: 5,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: 0.7,
                ease: "linear",
              }}
            >
              <h1 className="h0 mb-4 max-w-[250px] sm:max-w-[800px]">
                {title}
              </h1>
              <h1 className="h1 mb-4 max-w-[250px] sm:max-w-[500px]">
                {subtitle}
              </h1>
              <div
                className={clsx(
                  styles.landingLogo,
                  "flex flex-row items-center mb-8 md:mb-16",
                )}
              >
                <p className="h5 mr-4">by</p>{" "}
                <SeqeraLogo className="w-full" alt="Seqera Logo" />
              </div>
            </motion.div>

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
                duration: 0.4,
                delay: 1,
                ease: "linear",
              }}
              className="hidden sm:flex sm:flex-col"
            >
              <p
                className="monospace sm:max-w-[580px] md:max-w-[550px]"
                dangerouslySetInnerHTML={{ __html: content }}
              />

              <div className="inline-flex flex-col sm:flex-row sm:items-center">
                {ctaText1 && (
                  <Button className="mt-10 relative" white arrowAfter>
                    {ctaLink1 && (
                      <a className="absolute w-full h-full" href={ctaLink1} target={`${ctaExternal1 ? '_blank' : '_self'}`}></a>
                    )}{" "}
                    {ctaText1}
                  </Button>
                )}

                {ctaText2 && (
                  <Button
                    className="sm:ml-10 mt-6 sm:mt-10 relative"
                    arrowBefore
                  >
                    {ctaLink2 && (
                      <a className="absolute w-full h-full" href={ctaLink2} target={`${ctaExternal2 ? '_blank' : '_self'}`}></a>
                    )}{" "}
                    {ctaText2}
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
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
              duration: 0.6,
              delay: 1.3,
              ease: "linear",
            }}
            className={clsx(
              styles.rightWrapper,
              "h-full flex flex-col justify-between sm:text-right",
            )}
          >
            <div className="sm:mt-20">
              {when && (
                <div className="mb-10">
                  <p className="h6 text-nextflow monospace mb-2">When</p>
                  <h3 className="h3">{when}</h3>
                </div>
              )}
              {where && where !== "both" && (
                <div className="mb-10">
                  <p className="h6 text-nextflow monospace mb-2">Where</p>
                  <h3 className="h3">{where}</h3>
                </div>
              )}
              {boston && (
                <div className="mb-10">
                  <p className="h6 text-nextflow monospace mb-2">Boston</p>
                  <h3 className="h3">{boston}</h3>
                </div>
              )}
              {virtual && (
                <div className="mb-10">
                  <h3 className="h3 mb-2">Nextflow Summit</h3>
                  <p className="h6 text-nextflow monospace mb-2">Virtual</p>
                  <p className="h6 text-nextflow monospace mb-2">{virtual}</p>
                </div>
              )}
              {barcelona && (
                <div className="mb-10">
                   <h3 className="h3 mb-2">Training & Hackathon</h3>
                   <p className="h6 text-nextflow monospace mb-2">Barcelona</p>
                  <p className="h6 text-nextflow monospace mb-2">{barcelona}</p>
                  
                </div>
              )}

              <div className="sm:hidden">
                
                {/* <div className="toggleLocation relative monospace">
                  <div className="flex flex-row">
     
                    <Link href="/2025/boston" active={isActive("2025/boston")}>
                      {" "}
                      <div className={`${isBoth && 'border-r border-r-brand'} px-4`}>Boston</div>
                    </Link>
              
                    <Link
                      href="/2025/barcelona"
                      active={isActive("2025/barcelona")}
                    >
                      {" "}
                      <div className="px-4">Barcelona</div>
                    </Link>
                  </div>
                </div> */}
                

                <p
                  className="monospace max-w-[580px] mt-10"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
                <div className="inline-flex flex-col sm:flex-row sm:items-center">
                  {ctaText1 && (
                    <Button className="mt-10 relative" white arrowAfter>
                      {ctaLink1 && (
                        <a
                          className="absolute w-full h-full"
                          href={ctaLink1}
                        ></a>
                      )}{" "}
                      {ctaText1}
                    </Button>
                  )}

                  {ctaText2 && (
                    <Button
                      className="sm:ml-10 mt-6 sm:mt-10 relative"
                      arrowBefore
                    >
                      {ctaLink2 && (
                        <a
                          className="absolute w-full h-full"
                          href={ctaLink2}
                        ></a>
                      )}{" "}
                      {ctaText2}
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <h1 className="hidden sm:block absolute top-80 right-0 sm:top-auto sm:right-auto sm:relative h0">
              2025
            </h1>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default LandingHero;
