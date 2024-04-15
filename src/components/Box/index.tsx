import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  alt?: boolean;
};

const Box: React.FC<Props> = ({ children, className, href, alt }) => {
  const cn = clsx(styles.box, className, { [styles.alt]: alt });
  if (href)
    return (
      <a href={href} className={cn}>
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
