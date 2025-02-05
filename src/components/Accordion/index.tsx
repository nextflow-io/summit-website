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
    <div className={clsx(styles.accordion, "w-full max-w-full text-left py-4 my-4")}>
      <button
        className="flex justify-between w-full text-left focus:outline-none"
        onClick={toggleAccordion}
      >
        <div>
          <h5 className="h6 text-white">{title}</h5>
        </div>
        <div
          className={clsx(styles.arrow, `w-6 h-6 transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`)}
        >
          +
        </div>
      </button>
      <div
        className={`mt-4 transition-all duration-300 ${isOpen ? "block" : "hidden"} w-full max-w-full`}
      >
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Accordion;
