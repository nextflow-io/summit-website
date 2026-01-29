import { useState } from "react";
import classnames from "classnames";
import Button from "@components/Button";
import { motion } from "framer-motion";
import { readCookie, writeCookie } from "@utils/cookies";

const CookieSVG = ({ className }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M29.7833 12.5C29.3333 11.6667 28.3333 11.6667 28.3333 11.6667H25V10C25 8.33333 23.3333 8.33333 23.3333 8.33333H20V6.66667C20 5 18.3333 5 18.3333 5H16.6667V1.66667C16.6667 0 15 0 15 0C6.71667 0 0 6.71667 0 15C0 23.2833 6.71667 30 15 30C23.2833 30 30 23.2833 30 15C30 14.1667 29.9333 13.3333 29.7833 12.5ZM13.8667 26.6C15 26.3667 15.8333 25.3667 15.8333 24.1667C15.8333 22.7833 14.7167 21.6667 13.3333 21.6667C11.95 21.6667 10.8333 22.7833 10.8333 24.1667C10.8333 25 11.2667 25.7833 11.9333 26.2333C7.56667 25.0667 4.16667 21.35 3.48333 16.8667C3.33333 16.0167 3.33333 15.1833 3.33333 14.3667C3.45 15.65 4.51667 16.6667 5.83333 16.6667C7.21667 16.6667 8.33333 15.55 8.33333 14.1667C8.33333 12.7833 7.21667 11.6667 5.83333 11.6667C4.7 11.6667 3.75 12.4333 3.45 13.4667C4.11667 8.33333 8.18333 4.16667 13.3333 3.45V5.83333C13.3333 7.21667 14.45 8.33333 15.8333 8.33333H16.6667V9.16667C16.6667 10.55 17.7833 11.6667 19.1667 11.6667H21.6667V12.5C21.6667 13.8833 22.7833 15 24.1667 15H26.6667C26.6667 21.8 20.8333 27.2667 13.8667 26.6ZM10.8333 10C9.45 10 8.33333 8.88333 8.33333 7.5C8.33333 6.11667 9.45 5 10.8333 5C12.2167 5 13.3333 6.11667 13.3333 7.5C13.3333 8.88333 12.2167 10 10.8333 10ZM16.6667 15.8333C16.6667 17.2167 15.55 18.3333 14.1667 18.3333C12.7833 18.3333 11.6667 17.2167 11.6667 15.8333C11.6667 14.45 12.7833 13.3333 14.1667 13.3333C15.55 13.3333 16.6667 14.45 16.6667 15.8333ZM25 19.1667C25 20.55 23.8833 21.6667 22.5 21.6667C21.1167 21.6667 20 20.55 20 19.1667C20 17.7833 21.1167 16.6667 22.5 16.6667C23.8833 16.6667 25 17.7833 25 19.1667Z"
      fill="currentColor"
    />
  </svg>
);

const CookieBanner = () => {
  const key = "preferencesSet";
  const preferencesSet = readCookie(key);
  const [isVisible, setIsVisible] = useState(preferencesSet !== "true");

  const acceptAll = () => {
    const sixMonths = 30 * 6;
    writeCookie(key, "true", sixMonths);
    setIsVisible(false);
    if (typeof window === "undefined") return;
    if (!window.dataLayer) window.dataLayer = [];
    if (!window.gtag)
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
    window.gtag("consent", "update", {
      ad_user_data: "granted",
      ad_personalization: "granted",
      ad_storage: "granted",
      analytics_storage: "granted",
    });
  };

  const denyAll = () => {
    writeCookie(key, "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      ease: "linear",
      delay: 1.4,
    }}
    viewport={{
      once: true,
    }}
      className={classnames(
        "bg-nextflow-200 text-black text-xs fixed bottom-0 w-full z-[2147483648] py-4 border-t border-nextflow-300 px-2",
        {
          hidden: !isVisible,
        },
      )}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between flex-wrap -my-2 sm:-mx-4 lg:mx-0">
          <div className="flex items-center py-2 md:pr-4 opacity-90">
            <div className="mr-4 hidden sm:block">
              <CookieSVG className="h-6 w-6" />
            </div>
            <div className="flex-auto">
              This website uses cookies to offer you a better browsing
              experience.&nbsp;
              <br className="hidden md:block" />
              Find out more on{" "}
              <a href="/privacy-policy/" className="underline">
                how we use cookies
              </a>
              .
            </div>
          </div>
          <div className="py-2">
            <div className="flex flex-wrap -mx-2 -my-1">
              <div className="px-2 py-1">
                <Button light small onClick={denyAll}>
                  Essential only
                </Button>
              </div>
              <div className="px-2 py-1">
                <Button light small onClick={acceptAll}>
                  Accept all cookies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieBanner;
