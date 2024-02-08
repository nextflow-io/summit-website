import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  p?: string;
  text?: string;
  bg?: string;
};

const Box: React.FC<Props> = ({ children, className, href, ...props }) => {
  let p = "p-8";
  let text = "text-white";
  let bg = "bg-brand-1000";
  if (props.p) p = props.p;
  if (props.text) text = props.text;
  if (props.bg) bg = props.bg;
  const cn = clsx("rounded-lg h-full font-light", className, p, text, bg);
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
  return (
    <div className={clsx("bg-white text-brand p-4 rounded-md", className)}>
      {children}
    </div>
  );
};

export default Box;
