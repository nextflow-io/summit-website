import { useRef, useState } from "react";
import menuLinks from "../../menuLinks";
import DownCaret from "@images/icons/DownCaret";

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
    <div className={`border-b py-4 overflow-hidden`}>
      <button
        className={` flex flex-row justify-between items-center w-full ${isOpen ? "active" : ""}`}
        onClick={dropdowns && onClick}
      >
      {dropdowns ? (
             <p className="">
             {name}
             </p>
      ) : (
        <a href={url}> {name}</a>
        )
      }
   
        {dropdowns && (
          <div className={`transition-all duration-500 ease-in-out ${isOpen ? "active rotate-180 " : ""}`}><DownCaret/></div>
        )}
      </button>

      <div
        ref={contentHeight}
        className={`transition-all duration-500 ease-in-out`}
        style={
          isOpen
            ? { height: contentHeight?.current?.scrollHeight, marginTop: '2rem', marginBottom: '2rem' }
            : { height: "0px", overflow: "hidden" }
        }
      >
        <ul className="dropdown__links">
          {dropdowns?.map((dropdownLink) => (
            <li key={dropdownLink.id}>
              <a href={dropdownLink.url}>
                {dropdownLink.name}
              </a>
              </li>
          ))}
        </ul>
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
