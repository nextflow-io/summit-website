import classNames from "classnames";

import arrow from "./arrow.svg";
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
};

const Button: React.FC<Props> = ({
  children,
  onClick,
  href,
  to,
  className,
  ...attributes
}) => {
  const cn = classNames("button", styles.button, className, {
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
  });

  const content = [children];
  if (attributes.arrow) {
    content.push(<img key="arrow" src={arrow.src} className={styles.arrow} />);
  }

  const url = to || href;

  if (url) {
    const isOutLink = url.startsWith("http");
    if (isOutLink) {
      return (
        <a href={url} className={cn} target="_blank" rel="noreferrer">
          {content}
        </a>
      );
    } else {
      return (
        <a href={url} className={cn}>
          {content}
        </a>
      );
    }
  }

  return (
    <button type="button" onClick={onClick} className={cn}>
      {content}
    </button>
  );
};

export default Button;
