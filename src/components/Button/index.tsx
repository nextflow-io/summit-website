import { Fragment } from "react";
import clsx from "clsx";
import ArrowRight from "@icons/ArrowRight";
import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  to?: string;
  className?: string;
  light?: boolean;
  dark?: boolean;
  small?: boolean;
  target?: '_blank' | '_self';
  rel?: string;
};

const Button: React.FC<Props> = ({
  children,
  onClick,
  href,
  to,
  className,
  light,
  dark,
  small,
  target,
  rel,
}) => {
  const cn = clsx(
    "button monospace flex items-center justify-center",
    styles.button,
    className,
    {
      [styles.light]: light,
      [styles.dark]: dark,
      [styles.small]: small,
    }
  );

  const contentCn = clsx(styles.content, {
    "text-xs py-1 px-2": small,
    "text-sm py-1 px-2": !small,
  });

  const url = to || href;
  
  // Safe check for external links
  const isOutLink = url && typeof url === 'string' && (
    url.startsWith('http://') || 
    url.startsWith('https://')
  );

  const btnContent = (
    <Fragment>
      <div className={styles.hoverBG} />
      <div className={contentCn}>
        {children}
        <div className="ml-6">
          <ArrowRight className={styles.arrowAfter} />
        </div>
      </div>
    </Fragment>
  );

  if (url) {
    return (   
      <a 
        href={url}
        className={cn}
        target={target || (isOutLink ? "_blank" : "_self")}
        rel={rel || (isOutLink ? "noreferrer noopener" : undefined)}
      >
        {btnContent}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cn}>
      {btnContent}
    </button>
  );
};

export default Button;