import React, { useRef, useState } from "react";
import GreenBar from "@images/svgs/GreenBar";
import clsx from "clsx";
import styles from "./faq.module.css";

type FaqProps = {
  className?: string;
  data?: any;
  index?: any;
  title?: string;
  question?: string;
  answer?: string;
  isOpen?: boolean;
  onClick?: boolean;
};

const DropDownItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef(null);
  return (
    <div className={`border-b first:border-t py-6 md:py-10`}>
      <button
        className={`flex flex-row justify-between items-start w-full hover:text-nextflow transition-all duration-500 ease-in-out ${isOpen ? "active text-nextflow" : ""}`}
        onClick={onClick}
      >
        <h5 className="h5 text-left pr-8">{question}</h5>

        <div
          className={`h5 leading-none transition-transform duration-600 ease-in-out  ${isOpen ? "h2 active origin-center rotate-45 " : "origin-center"}`}
        >
          +
        </div>
      </button>

      <div
        ref={contentHeight}
        className={`transition-all duration-500 transition-delay-800 ease-in-out opacity-0`}
        style={
          isOpen
            ? {
                height: contentHeight?.current?.scrollHeight,
                marginTop: "2rem",
                marginBottom: "2rem",
                opacity: 1,
              }
            : { height: "0px", overflow: "hidden", opacity: 0 }
        }
      >
        <div
          className={clsx(styles.faqAnswer, `bodycopy monospace`)}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </div>
  );
};

const Faq = ({ className, data, title, question, answer }: FaqProps) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className={`${className} container`}>
      <div className="relative w-full flex flex-col sm:flex-row">
        <div className="w-full mb-6 sm:mb-0 sm:sticky sm:top-40 self-start">
          <h2 className="h1 max-w-[200px] sm:max-w-[500px] relative z-20">
            More Information
          </h2>
          <div className="mt-[-25px] ml-[-25px] sm:mt-[-50px] sm:ml-[-50px] z-0 w-full max-w-[542px] overflow-hidden">
            <div className={clsx(styles.greenBarWrapper, ``)}>
              <div className={clsx(styles.greenBar, ``)}></div>
            </div>
          </div>
        </div>
        <div className="w-full">
          {data.main.map(({ question, answer }, index) => {
            return (
              <DropDownItem
                key={index}
                question={question}
                answer={answer}
                isOpen={activeIndex === index}
                onClick={() => handleItemClick(index)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
