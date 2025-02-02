import { useRef, useState } from "react";
import data from "./data";

type FaqProps = {
  faqs?: any;
  index?: any;
  title?: string;
  question?: string;
  answer?: string;
  isOpen?: boolean;
  onClick?: boolean;
};

const Faq = ({ question, answer }: FaqProps) => {
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

        <div className="container">
          {data.map(({ question, answer }, index) => {
        
            return (
              <div
            
                 onClick={() => handleItemClick(index)}
                key={index}
                className={`border-b py-4`}
              >
                <button
                  className={` flex flex-row justify-between items-center w-full ${activeIndex === index ? "active" : ""}`}
          
                >
                  {question} - {index}
                  <div
                    className={`transition-all duration-500 ease-in-out ${activeIndex === index ? "active rotate-180 " : ""}`}
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
                  {answer}
                </div>
              </div>
            );
          })}
        </div>
    
  );
};

export default Faq;
