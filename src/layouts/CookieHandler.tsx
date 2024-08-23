import { setUTMcookies, setUTMlocalStorage } from "@utils/utm";
import React, { useEffect } from "react";

const CookieHandler: React.FC = () => {
  useEffect(setUTMcookies, []);
  useEffect(setUTMlocalStorage, []);
  return null;
};

export default CookieHandler;
