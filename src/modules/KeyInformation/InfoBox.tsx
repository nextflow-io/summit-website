import React from "react";
import Box from "@components/Box";
import nfcore_logo from "@images/nf-core-mono.svg";

const InfoBox = ({ children, title, subtitle, icon, icon_extra, link }) => {
  return (
    <Box className="flex flex-col min-h-[350px]" href={link}>
      <h5 className="h3 mb-6">{title}</h5>
      {subtitle && (
        <div className="mb-6 text-sm text-brand-300">{subtitle}</div>
      )}
      <div className="text-base flex-auto">{children}</div>
      <div className="mt-4">
        <img src={icon.src} className="w-[44px] inline-block" />
        {icon_extra && icon_extra == 'nf-core' && (
          <img src={nfcore_logo.src} className="h-[44px] ml-4 inline-block" />
        )}
      </div>
    </Box>
  );
};

export default InfoBox;
