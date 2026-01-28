import { useRef, useState } from "react";
import DownCaret from "@images/icons/DownCaret";

type Link = {
  isExternal?: boolean;
  internalLink?: string;
  externalUrl?: string;
};

type MenuLink = {
  linkTitle: string;
  link?: Link;
};

type SingleLink = {
  _type: 'singleLink';
  linkTitle: string;
  link?: Link;
};

type MenuGroup = {
  _type: 'menuGroup';
  menuTitle: string;
  menuLinks?: MenuLink[];
};

type MobileMenuItem = SingleLink | MenuGroup;

type Props = {
  namespace?: string;
  pathname?: string;
  mobileMenu?: MobileMenuItem[];
};

type DropDownItemProps = {
  name: string;
  url?: string;
  menuLinks?: MenuLink[];
  isOpen: boolean;
  onClick?: () => void;
};

const DropDownItem: React.FC<DropDownItemProps> = ({ 
  name, 
  url, 
  menuLinks, 
  isOpen, 
  onClick 
}) => {
  const contentHeight = useRef<HTMLDivElement>(null);
  const hasDropdown = menuLinks && menuLinks.length > 0;

  return (
    <div className={`border-b py-4 overflow-hidden`}>
      <button
        className={`dropdownBtn flex flex-row justify-between items-center w-full transition-all duration-400 hover:opacity-80 ${isOpen ? "active " : ""}`}
        onClick={hasDropdown ? onClick : undefined}
      >
        {hasDropdown ? (
          <h3 className="h3">{name}</h3>
        ) : (
          <div className="relative w-full h-full flex flex-row">
            <h3 className="h3">{name}</h3>
            {url && (
              <a 
                className="absolute top-0 left-0 right-0 bottom-0 w-full h-full" 
                href={url}
              />
            )}
          </div>
        )}

        {hasDropdown && (
          <div
            className={`caret transition-all duration-500 ease-in-out ${isOpen ? "active rotate-180" : ""}`}
          >
            <DownCaret />
          </div>
        )}
      </button>

      {hasDropdown && (
        <div
          ref={contentHeight}
          className={`transition-all duration-500 ease-in-out`}
          style={
            isOpen
              ? {
                  height: contentHeight?.current?.scrollHeight,
                  marginTop: "2rem",
                  marginBottom: "2rem",
                }
              : { height: "0px", overflow: "hidden" }
          }
        >
          <ul className="dropdown__links ">
            {menuLinks?.map((item, index) => {
              const href = item.link?.isExternal 
                ? item.link?.externalUrl 
                : item.link?.internalLink;
              
              return (
                <li key={index}>
                  <a 
                    className="h3 transition-all duration-400 hover:opacity-80"
                    href={href}
                    target={item.link?.isExternal ? '_blank' : '_self'}
                    rel={item.link?.isExternal ? 'noopener noreferrer' : undefined}
                  >
                    {item.linkTitle}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

const DropDowns: React.FC<Props> = ({ mobileMenu }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // If no menu items from Sanity, return null
  if (!mobileMenu || mobileMenu.length === 0) {
    return null;
  }

  return (
    <div className="text-xl px-4 pt-20">
      {mobileMenu.map((item, index) => {
        // Single Link
        if (item._type === 'singleLink') {
          const href = item.link?.isExternal 
            ? item.link?.externalUrl 
            : item.link?.internalLink;
          
          return (
            <DropDownItem
              key={index}
              name={item.linkTitle}
              url={href}
              isOpen={false}
              onClick={undefined}
            />
          );
        }
        
        // Menu Group with Dropdown
        if (item._type === 'menuGroup') {
          return (
            <DropDownItem
              key={index}
              name={item.menuTitle}
              menuLinks={item.menuLinks}
              isOpen={activeIndex === index}
              onClick={() => handleItemClick(index)}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export default DropDowns;