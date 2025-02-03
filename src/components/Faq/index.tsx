import { useRef, useState } from "react";
import data from "./data";

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

const Faq = ({ className, data, title, question, answer }: FaqProps) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentHeight = useRef();
  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleAccordion = () => {
  //   setIsOpen((prev) => !prev);
  // };

  return (
    <section className={`${className} container`}>
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full">
          <h2 className="h2">{title ? title : "More Information"}</h2>
        </div>
        <div className="w-full">
          {data.map(({ question, answer }, index) => {
            return (
              <div key={index} className={`border-b first:border-t py-10`}>
                <button
                  onClick={() => handleItemClick(index)}
                  className={`flex flex-row justify-between w-full ${activeIndex === index ? "active" : ""}`}
                >
                  <h3 className="h3 text-left">{question}</h3>
                  <div
                    className={`h3 pl-10 transition-all duration-500 ease-in-out ${activeIndex === index ? "active rotate-45 " : ""}`}
                  >
                    +
                  </div>
                </button>

                <div
                  ref={contentHeight}
                  className={`transition-all duration-500 ease-in-out`}
                  style={
                    activeIndex === index
                      ? {
                          height: contentHeight?.current?.scrollHeight,
                          marginTop: "2rem",
                          marginBottom: "2rem",
                        }
                      : { height: "0px", overflow: "hidden" }
                  }
                >
                  <div className="monospace" dangerouslySetInnerHTML={{ __html: answer }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
