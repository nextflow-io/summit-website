import React, { useState, useEffect } from "react";
import clsx from "clsx";
import CallForAbstracts from "./CallForAbstracts";
import RegistrationNowOpen from "./RegistrationNowOpen";
import SponsoredBy from "./SponsoredBy";

import styles from "./styles.module.css";

const Slide = ({ className, style, children }) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  width?: number;
  speed?: number;
};

function Marquee({
  children,
  className,
  href,
  width,
  speed: defaultSpeed,
}: Props): JSX.Element {
  const [isMoving, setIsMoving] = useState(false);
  const [position, setPosition] = useState(0);

  const speed = defaultSpeed || 30;
  useEffect(() => {
    setIsMoving(true);
    setPosition((pos) => pos - 100);
    const interval = setInterval(() => {
      setIsMoving(false);
      setTimeout(() => {
        setIsMoving(false);
        setPosition(0);
        setTimeout(() => {
          setIsMoving(true);
          setPosition(-100);
        }, 20);
      }, 0);
    }, speed * 1000);
    return () => clearInterval(interval);
  }, [speed]);

  return (
    <a className={clsx(styles.container, className)} href={href}>
      <Slide
        className={clsx(styles.slide1, { [styles.moving]: isMoving })}
        style={{
          transform: `translateX(${position}%)`,
          width: width ? `${width}px` : undefined,
          transitionDuration: isMoving ? `${speed}s` : undefined,
        }}
      >
        {children}
      </Slide>
      <Slide
        className={clsx(styles.slide2, { [styles.moving]: isMoving })}
        style={{
          transform: `translateX(${position}%)`,
          width: width ? `${width}px` : undefined,
          transitionDuration: isMoving ? `${speed}s` : undefined,
        }}
      >
        {children}
      </Slide>
    </a>
  );
}

export { CallForAbstracts, RegistrationNowOpen, SponsoredBy };

export default Marquee;
