import { useState, useEffect } from "react";
import Button from "@components/Button";
import { motion } from "framer-motion";
import Close from "./Close";

interface BannerProps {
  title: string;
  ctaText?: string;
  ctaLink?: string;
}

const Banner = ({ title, ctaLink, ctaText }: BannerProps) => {

  const [showBanner, setShowBanner] = useState(() => {
    if (typeof window !== 'undefined') {
        const storedValue = localStorage.getItem("showBanner");
        return storedValue === null ? true : JSON.parse(storedValue);
    }
  });

  useEffect(() => {
    localStorage.setItem("showBanner", JSON.stringify(showBanner));
  }, [showBanner]);

  const handleClose = () => {
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.25,
            ease: "linear",
            delay: 2.5,
          }}
          className={
            "mx-3 md:mx-auto pt-2 md:pb-2 container max-w-[700px] fixed top-[100px] md:top-[75px] left-0 right-0 h-auto md:h-[40px] bg-nextflow-200 w-auto z-[1000] rounded-md border border-nextflow"
          }
        >
          <div className="w-full h-full flex justify-between items-center text-brand ">
            <div className="relative z-20 w-full">
              <div className="w-full h-full flex flex-col md:flex-row justify-between items-center mr-5 text-center md:text-left">
                <p className="text-[.9rem] md:text-[1rem] monospace mr-6">
                  {title}
                </p>
                <Button className="my-4" small brand>
                  {ctaText}
                </Button>
              </div>
              <a
                href={ctaLink}
                className="w-full h-full absolute top-0 right-0 bottom-0 left-0 z-[1001]"
              ></a>
            </div>
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-[13px] right-[10px] z-[1002]"
            >
              <Close />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Banner;
