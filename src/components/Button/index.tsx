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
  large?: boolean;
  wide?: boolean;
  wider?: boolean;
  white?: boolean;
  white2?: boolean;
  secondary?: boolean;
  arrow?: boolean;
  cta?: boolean;
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
    [styles.large]: attributes.large,
    [styles.wide]: attributes.wide,
    [styles.wider]: attributes.wider,
    [styles.white]: attributes.white,
    [styles.white2]: attributes.white2,
    [styles.secondary]: attributes.secondary,
    [styles.cta]: attributes.cta,
  });

  let arrow = null;
  if (attributes.arrow) {
    arrow = <Arrow key="arrow" className={styles.arrow} />;
  }

  const url = to || href;

  const btnContent = (
    <Fragment>
      <span className={styles.hoverBG} />
      <span className={styles.content}>
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
    <button type="button" onClick={onClick} className={`monospace ${cn}`}>
      {btnContent}
    </button>
  );
};

export default Button;
