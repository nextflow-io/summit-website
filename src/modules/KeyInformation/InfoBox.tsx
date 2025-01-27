

import React from "react";
import Box from "@components/Box";

type Props = {
  className?: string;
  children?: string;
  title?: string;
  subtitle?: string;
  icon?: string;
  link?: string;
};

const InfoBox: React.FC<Props> = (props = {}) => {
  const { className, children = "", title, subtitle, icon, link } = props;
  return (
    <Box className="flex flex-col min-h-[350px]" href={link}>
    <h5 className="h3 mb-6">{title}</h5>
    {subtitle && (
      <div className="mb-6 text-sm text-brand-300">{subtitle}</div>
    )}
    <div className="text-base flex-auto">{children}</div>
    <div className="mt-4">
      {/* <img src={icon.src} className="w-[44px] inline-block" /> */}
    </div>
  </Box>
  );
};

export default InfoBox;

