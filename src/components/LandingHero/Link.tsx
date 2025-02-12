import React from "react";

type Props = {
  children: React.ReactNode;
  href?: string;
  active?: boolean;
};

const Link: React.FC<Props> = ({ children, href, active }) => {
  const attr = {};
  if (active) attr["data-active"] = true;
  return (
    <a {...attr} href={href} className={`toggleLink ${active ? 'active' : ''}`}>
      {children}
    </a>
  );
};

export default Link;
