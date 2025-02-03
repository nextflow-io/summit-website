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
  secondary?: boolean;
  arrow?: boolean;
  arrowBefore?: boolean;
  arrowAfter?: boolean;
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
    [styles.secondary]: attributes.secondary,
    [styles.cta]: attributes.cta,
  });

  let arrowBefore = null;
  let arrowAfter = null;

  if (attributes.arrowBefore) {
    arrowBefore = <Arrow key="arrow" className={styles.arrowBefore} />;
  }
  if (attributes.arrowAfter) {
    arrowAfter = <Arrow key="arrow" className={styles.arrowAfter} />;
  }

  const url = to || href;

  const btnContent = (
    <Fragment>
      <div className={styles.hoverBG} />
      <div className={styles.content}>
        {arrowBefore && (<div className="mr-2">{arrowBefore}</div>)}
        {children}
        {arrowAfter && (<div className="ml-6">{arrowAfter}</div>)}
      </div>
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
    <button type="button" onClick={onClick} className={`monospace flex items-center justify-center ${cn}`}>
      {btnContent}
    </button>
  );
};

export default Button;
