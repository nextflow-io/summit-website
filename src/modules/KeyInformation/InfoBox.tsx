import React from "react";
import Box from "@components/Box";

const InfoBox = ({ children, title, subtitle, icon, link }) => {
  return (
    <Box className="flex flex-col min-h-[350px]" href={link}>
      <h5 className="h3 mb-6">{title}</h5>
      {subtitle && (
        <div className="mb-6 text-sm text-brand-300">{subtitle}</div>
      )}
      <div className="text-base flex-auto">{children}</div>
      <div className="mt-4">
        <img src={icon.src} className="w-[44px]" />
      </div>
    </Box>
  );
};

export default InfoBox;
