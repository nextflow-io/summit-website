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

//  DropDownitem component
const DropDownItem: React.FC<Props> = (props) => {
  const contentHeight = useRef();
  const { pathname, namespace, isOpen, onClick, name, url, dropdown } = props;
  function getURL(path, root = false) {
    if (root) return path;
    if (!namespace) return path;
    return `/${namespace}${path}`;
  }
  let location = "menu";
  const { main } = menuLinks[location];

  return (
    <div className={`${styles.dropdowns}`}>
      <button
        className={`question-container ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <p className="question-content">{name} Test</p>
        <div className={`arrow ${isOpen ? "active" : ""}`}> {isOpen}</div>
      </button>

      <div
        ref={contentHeight}
        className="answer-container"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className="answer-content pl-10">
        {main.map(({ name, url, dropdowns }, index) => (
          <Link href={getURL(url)}>
          <div>{name} = {index}</div>
        </Link>
      ))}


        {main?.dropdowns.forEach(dropdown => {
           <h2>{dropdown.name}</h2>
        })}


          {/* <Link href={getURL(url)}>
            <div>{name} = {index}</div>
          </Link> */}
        </p>
      </div>
    </div>
  );
};

const DropDowns: React.FC<Props> = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const { pathname, namespace } = props;
  let location = "menu";
  const { main } = menuLinks[location];

  return (
    <div className="container">
      {main.map(({ name, url, dropdowns }, index) => {
        if (!dropdowns) return;
        return (
          <DropDownItem
            key={index}
            name={name}
            dropdown={dropdowns}
            url={url}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        );
      })}
      {/* {main.map(({ name, url, dropdowns }, index) => (
        <DropDownItem
          key={index}
          name={name}
          url={url}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))} */}
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
