import { setUTMcookies } from "@utils/utm";
import React, { useEffect } from "react";

const CookieHandler: React.FC = () => {
  useEffect(setUTMcookies, []);
  return null;
};

export default CookieHandler;
