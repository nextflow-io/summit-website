import { useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={clsx(styles.box, "border w-full max-w-full text-left rounded-lg p-4 my-4")}>
      <button
        className="flex justify-between w-full text-left focus:outline-none"
        onClick={toggleAccordion}
      >
        <div>
          <h5 className="h6  px-4 text-white">{title}</h5>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={clsx(styles.arrow, `w-6 h-6 transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12l-7.5 7.5L4.5 12"
          />
        </svg>
      </button>
      <div
        className={`mt-4 p-4 rounded-lg transition-all duration-300 ${isOpen ? "block" : "hidden"} w-full max-w-full`}
      >
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Accordion;
