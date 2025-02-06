import { useState, useEffect } from "react";
import Button from "@components/Button";
import styles from "./styles.module.css";
import clsx from "clsx";
import SeqeraLogo from "@icons/SeqeraLogo";
import RedBar from "@images/svgs/RedBar";
import GreenBar from "@images/svgs/GreenBar";
import BlueBar from "@images/svgs/BlueBar";
import Link from "./Link";

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
  namespace: string;
  pathname: string;
}

const LandingHero: React.FC<HeroProps> = (props) => {
  const {
    title,
    content,
    ctaText1,
    ctaLink1,
    ctaText2,
    ctaLink2,
    when,
    where,
    price,
    pathname,
    namespace,
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
    <div className="relative w-full h-full">
      <div className={clsx(styles.colorBarWrapper, "top-[0%] right-[15%]")}>
        <div className={clsx(styles.colorBar, styles["red"], "")}>
          <div></div>
        </div>
      </div>

      <div className={clsx(styles.colorBarWrapper, "top-[20%] left-[0%]")}>
        <div className={clsx(styles.colorBar, styles["green"], "colorBar")}>
          <div></div>
        </div>
      </div>

      <div className={clsx(styles.colorBarWrapper, "top-[50%] right-[20%]")}>
        <div className={clsx(styles.colorBar, styles["green"], "colorBar")}>
          <div></div>
        </div>
      </div>

      <div className={clsx(styles.colorBarWrapper, "bottom-[5%] right-[00%]")}>
        <div className={clsx(styles.colorBar, styles["red"], "colorBar")}>
          <div></div>
        </div>
      </div>

      <section
        className={clsx(styles.landingHero, "container h-full relative")}
      >
        <div className="flex flex-col sm:flex-row sm:justify-between h-full relative z-10">
          <div className="w-full h-full mt-10 sm:mt-0 sm:pr-10 max-w-[750px]">
            <h1 className="h0 mb-4 max-w-[250px] sm:max-w-[800px]">{title}</h1>
            <div
              className={clsx(
                styles.landingLogo,
                "flex flex-row items-center mb-8 md:mb-16",
              )}
            >
              <p className="h5 mr-4">by</p> <SeqeraLogo className="w-full"/>
            </div>

            <div className="hidden sm:flex sm:flex-col">
              <p
                className="monospace sm:max-w-[600px] md:max-w-[680px]"
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
                  <Button
                    className="sm:ml-10 mt-6 sm:mt-10 relative"
                    arrowBefore
                  >
                    {ctaLink2 && (
                      <a className="absolute w-full h-full" href={ctaLink2}></a>
                    )}{" "}
                    {ctaText2}
                  </Button>
                )}
              </div>
            </div>
          </div>
          <div
            className={clsx(
              styles.rightWrapper,
              "h-full flex flex-col justify-between sm:text-right",
            )}
          >
            <div className="sm:mt-20">
              <div className="mb-10">
                <p className="h6 text-nextflow monospace mb-2">When</p>
                <h3 className="h3">{when}</h3>
              </div>
              <div className="mb-10">
                <p className="h6 text-nextflow monospace mb-2">Where</p>
                <h3 className="h3">{where}</h3>
              </div>
              <div className="mb-10">
                <p className="h6 text-nextflow monospace mb-2">Price</p>
                <h3 className="h3">{price}</h3>
              </div>

              <div className="sm:hidden">
                <div className="toggleLocation relative monospace">
                  <div className="flex flex-row">
                    <Link href="/2025/boston" active={isActive("2025/boston")}>
                      {" "}
                      <div className="px-4">Boston</div>
                    </Link>
                    <Link
                      href="/2025/barcelona"
                      active={isActive("2025/barcelona")}
                    >
                      {" "}
                      <div className="px-4">Barcelona</div>
                    </Link>
                  </div>
                </div>

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
            <h1 className="absolute top-80 right-0 sm:top-auto sm:right-auto sm:relative h0">
              2025
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingHero;
