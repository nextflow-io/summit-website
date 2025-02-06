import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  externalLink?: boolean;
};

const Box: React.FC<Props> = ({ children, className, href, externalLink}) => {
  const cn = clsx(styles.box, className, {
  });
  if (href)
    if (externalLink) 
      return (
        <a href={href} className={`${cn} box-hover`} target="_blank">
        {children}
       </a>
     ); else
    return (
      <a href={href} className={`${cn} box-hover`}>
        {children}
      </a>
    );
  return <div className={cn}>{children}</div>;
};

type SubSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export const SubSection: React.FC<SubSectionProps> = ({
  children,
  className,
}) => {
  return <div className={clsx(styles.subsection, className)}>{children}</div>;
};

export default Box;
