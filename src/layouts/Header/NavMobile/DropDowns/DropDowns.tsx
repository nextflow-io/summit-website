import { useRef, useState } from "react";
import clsx from "clsx";
import menuLinks from "../../menuLinks";
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
    <div className={`${styles.dropdown} border-b py-4`}>
      <button
        className={`dropdown__title flex flex-row justify-between w-full ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <p className="">{name}</p>
        {dropdowns && (
          <div className={`plus-btn ${isOpen ? "active" : ""}`}>+ {isOpen}</div>
        )}
      </button>

      <div
        ref={contentHeight}
        className="dropdown__content"
        style={
          isOpen
            ? { height: contentHeight?.current?.scrollHeight }
            : { height: "0px", overflow: "hidden" }
        }
      >
        <div className="dropdown__links">
          {dropdowns?.map((dataItem) => (
            <div key={dataItem.id}>{dataItem.name}</div>
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
  // const contentHeight = useRef();
  // const { pathname, namespace, onClick , isOpen } = props;

  return (
    <div className="text-lg">
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
    </div>
  );
};

export default DropDowns;
