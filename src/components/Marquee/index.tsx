import React, { useState, useEffect } from "react";
import classNames from "classnames";

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
  width?: number;
  speed?: number;
};

function Marquee({
  children,
  className,
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
    <div className={classNames(styles.container, className)}>
      <Slide
        className={classNames(styles.slide1, { [styles.moving]: isMoving })}
        style={{
          transform: `translateX(${position}%)`,
          width: width ? `${width}px` : undefined,
          transitionDuration: isMoving ? `${speed}s` : undefined,
        }}
      >
        {children}
      </Slide>
      <Slide
        className={classNames(styles.slide2, { [styles.moving]: isMoving })}
        style={{
          transform: `translateX(${position}%)`,
          width: width ? `${width}px` : undefined,
          transitionDuration: isMoving ? `${speed}s` : undefined,
        }}
      >
        {children}
      </Slide>
    </div>
  );
}

export default Marquee;
