import { useRef, useState } from "react";
import menuLinks from "../../menuLinks";
import data from "./DropDownLinks";
import Link from "../../Link";
import styles from "./dropdowns.module.css";

type Props = {
  namespace?: string;
  pathname?: string;
  name?: string;
  url?: string;
  isOpen?: any;
  onClick?: any;
  main?: any;
  dropdown?: any;
};

const DropDownItem = ({ name, url, dropdowns, isOpen, onClick }) => {
    const contentHeight = useRef();
    return (
      <div className="wrapper">
        <button
          className={`question-container ${isOpen ? "active" : ""}`}
          onClick={onClick}
        >
          <p className="question-content">{name}</p>
          <div className={`arrow ${isOpen ? "active" : ""}`}> {isOpen}</div>
        </button>
  
        <div
          ref={contentHeight}
          className="answer-container"
          style={
            isOpen
              ? { height: contentHeight?.current?.scrollHeight }
              : { height: "0px", overflow: 'hidden'}
          }
        >
          <div className="answer-content pl-10"> 
         
            {dropdowns?.map(dataItem => (
            <div key={dataItem.id}>
                {dataItem.name}
            </div>
            ))}
          </div>
        </div>
      </div>
    );
  };


const DropDowns: React.FC<Props> = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));

  };
  const contentHeight = useRef();
  const { pathname, namespace, onClick , isOpen } = props;
//   let location = "menu";
//   const { main } = menuLinks[location];



  return (
    <div className="container" >
   
       
      {menuLinks.map(({ name, url, dropdowns }, index) => (
        <DropDownItem
          key={index}
          name={name}
          dropdowns={dropdowns}
          url={url}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
      {/* {data.map((item, index) => (
        <DropDownItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))} */}
    </div>
  );
};

export default DropDowns;
