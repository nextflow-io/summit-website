import React from "react";

type Props = {
  children: React.ReactNode;
  href?: string;
  active?: boolean;
  target?: '_blank' | '_self';
  rel?: string;
  className?: string;
};

const Link: React.FC<Props> = ({ children, href, active, target, rel, className }) => {
  const attr: Record<string, any> = {};
  if (active) attr["data-active"] = true;
  
  return (
    <a 
      {...attr} 
      href={href} 
      className={`navItem ${className || ''}`}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
};

export default Link;