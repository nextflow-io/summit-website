import { useState } from "react";
import Button from "@components/Button";
import styles from "./styles.module.css";
import clsx from "clsx";


interface HeroProps {
  title: string;
  content: string;
  href: string;
  alt?: string;
  ctaText1?: string;
  ctaLink1?: string;
  ctaText2?: string;
  ctaLink2?: string;
}

const Hero = ({ title, content, href, alt, ctaText1, ctaLink1, ctaText2, ctaLink2 }: HeroProps) => {

  return (
    <div className={clsx(styles.hero, "container pt-10")}>
        <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="w-full pr-10">
                <h1 className="h1 mb-10">{title}</h1>
                <p className="monospace" dangerouslySetInnerHTML={{ __html: content }} />

                {ctaText1 && (
                    <Button arrow>
                    {ctaText1}
                    </Button>
                    )
                }
            
            </div>
            <div className="w-full">
                <img src={href} alt={alt} />
            </div>
        </div>
    </div>
  );
};

export default Hero;
