import { useRef, useState } from "react";

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

  return (
    <section className={`${className} container`}>
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full mb-6 md:mb-0">
          <h2 className="h2">{title ? title : "More Information"}</h2>
        </div>
        <div className="w-full">
          {data.map(({ question, answer }, index) => {
            return (
              <div key={index} className={`border-b first:border-t py-10`}>
                <button
                  onClick={() => handleItemClick(index)}
                  className={`flex flex-row justify-between items-start w-full hover:text-nextflow transition-all duration-500 ease-in-out ${activeIndex === index ? "active  text-nextflow" : ""}`}
                >
                  <h3 className="h3 text-left pr-8">{question}</h3>
                  <div
                    className={`h3 leading-none transition-transform duration-500 ease-in-out ${activeIndex === index ? "h2 active origin-center rotate-45" : "origin-center"}`}
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
                  <div
                    className="monospace"
                    dangerouslySetInnerHTML={{ __html: answer }}
                  />
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
