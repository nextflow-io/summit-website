import { Fragment } from "react";
import clsx from "clsx";

import Arrow from "./Arrow.tsx";
import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  to?: string;
  className?: string;
  small?: boolean;
  wide?: boolean;
  wider?: boolean;
  white?: boolean;
  white2?: boolean;
  brand?: boolean;
  brand2?: boolean;
  blue?: boolean;
  blue2?: boolean;
  secondary?: boolean;
  arrow?: boolean;
  cta?: boolean;
  cta2?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  onClick,
  href,
  to,
  className,
  ...attributes
}) => {
  const cn = clsx("button", styles.button, className, {
    [styles.small]: attributes.small,
    [styles.wide]: attributes.wide,
    [styles.wider]: attributes.wider,
    [styles.white]: attributes.white,
    [styles.white2]: attributes.white2,
    [styles.brand]: attributes.brand,
    [styles.brand2]: attributes.brand2,
    [styles.blue]: attributes.blue,
    [styles.blue2]: attributes.blue2,
    [styles.secondary]: attributes.secondary,
    [styles.cta]: attributes.cta,
    [styles.cta2]: attributes.cta2,
  });

  let arrow = null;
  if (attributes.arrow) {
    arrow = <Arrow key="arrow" className={styles.arrow} />;
  }

  const url = to || href;

  const btnContent = (
    <Fragment>
      <span>
        {children}
        {arrow}
      </span>
    </Fragment>
  );

  if (url) {
    const isOutLink = url.startsWith("http");
    if (isOutLink) {
      return (
        <a href={url} className={cn} target="_blank" rel="noreferrer">
          {btnContent}
        </a>
      );
    } else {
      return (
        <a href={url} className={cn}>
          {btnContent}
        </a>
      );
    }
  }

  return (
    <button type="button" onClick={onClick} className={cn}>
      {btnContent}
    </button>
  );
};

export default Button;
