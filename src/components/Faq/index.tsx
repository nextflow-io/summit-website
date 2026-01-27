import React, { useRef, useState } from "react";
import clsx from "clsx";
import styles from "./faq.module.css";
import PortableText from "@components/PortableText";

type FaqItemProps = {
  question: string;
  answer: any; 
  isOpen: boolean;
  onClick: () => void;
};

const DropDownItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef<HTMLDivElement>(null);
  
  return (
    <div className={`border-white border-b first:border-t py-6 md:py-8`}>
      <button
        className={`flex flex-row justify-between items-start w-full hover:text-nextflow transition-all duration-500 ease-in-out ${isOpen ? "active text-nextflow" : ""}`}
        onClick={onClick}
      >
        <h5 className="h5 text-left pr-8">{question}</h5>

        <div
          className={`h5 leading-none transition-transform duration-600 ease-in-out ${isOpen ? "h2 active origin-center rotate-45" : "origin-center"}`}
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
        <div className={clsx(styles.faqAnswer, `bodycopy monospace text-nextflow`)}>
          {answer && Array.isArray(answer) && answer.length > 0 ? (
            <PortableText value={answer} />
          ) : typeof answer === 'string' ? (
            <div dangerouslySetInnerHTML={{ __html: answer }} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

type FaqProps = {
  className?: string;
  data: Array<{
    question: string;
    answer: any;
  }>;
  title?: string;
};

const Faq: React.FC<FaqProps> = ({ className, data, title = "FAQ" }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className={`${className} bg-black py-20`}>
      <div className="container-xl relative w-full flex flex-col sm:flex-row">
        <div className="w-full mb-6 sm:mb-0 sm:sticky sm:top-40 self-start">
          <h2 className="h1 max-w-[200px] sm:max-w-[500px] relative z-20">
            {title}
          </h2>
        </div>
        <div className="w-full">
          {data.map((faq, index) => (
            <DropDownItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={activeIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;