import { useState } from "react";
import Button from "@components/Button";
import styles from "./styles.module.css";
import clsx from "clsx";


interface BackgroundProps {
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

const Background = ({
  title,
  content,
  ctaText1,
  ctaLink1,
  ctaText2,
  ctaLink2,
  when,
  where,
  price,
}: BackgroundProps) => {
  return (
    <section className={clsx(styles.landingHero,"container h-screen relative")}>
    
    </section>
  );
};

export default Background;
