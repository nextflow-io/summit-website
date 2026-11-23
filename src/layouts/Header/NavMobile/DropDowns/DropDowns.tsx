import { useLayoutEffect, useRef, useState } from 'react';
import DownCaret from '@images/icons/DownCaret';
import { formatLink } from '@utils/linkFormatter';
import { mostSpecificSectionIndex, sectionOfLink } from '@utils/navSection';

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
  /** The group's own landing page, mirroring what the desktop tab links to. */
  link?: Link;
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

const titleClasses = 'text-[1.6rem] leading-tight';

const DropDownItem: React.FC<DropDownItemProps> = ({
  name,
  url,
  menuLinks,
  isOpen,
  onClick,
}) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const hasDropdown = Boolean(menuLinks && menuLinks.length > 0);

  // Measure the expanded height after mount so collapsing animates from a pixel
  // value: a group that starts open would otherwise sit at `auto` and snap shut.
  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const measure = () => setContentHeight(list.scrollHeight);
    measure();

    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    return () => observer.disconnect();
  }, [menuLinks]);

  return (
    <div className="border-b py-2 overflow-hidden">
      <div className="flex flex-row justify-between items-center w-full">
        {url ? (
          // The group's own landing page stays reachable; the caret toggles the sub-links.
          <a
            className="flex-1 py-1 transition-all duration-400 hover:opacity-80"
            href={url}
          >
            <h3 className={titleClasses}>{name}</h3>
          </a>
        ) : hasDropdown ? (
          <button
            className="dropdownBtn flex-1 text-left py-1 transition-all duration-400 hover:opacity-80"
            onClick={onClick}
            aria-expanded={isOpen}
          >
            <h3 className={titleClasses}>{name}</h3>
          </button>
        ) : (
          <h3 className={titleClasses}>{name}</h3>
        )}

        {hasDropdown && (
          <button
            className={`caret p-2 -mr-2 transition-all duration-500 ease-in-out ${isOpen ? 'active rotate-180' : ''}`}
            onClick={onClick}
            aria-expanded={isOpen}
            aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${name} menu`}
          >
            <DownCaret />
          </button>
        )}
      </div>

      {hasDropdown && (
        <div
          className="transition-all duration-500 ease-in-out overflow-hidden"
          style={{
            height: isOpen ? contentHeight : 0,
            marginTop: isOpen ? '1.5rem' : 0,
            marginBottom: isOpen ? '1.5rem' : 0,
          }}
          aria-hidden={!isOpen}
        >
          <ul className="dropdown__links" ref={listRef}>
            {menuLinks?.map((item, index) => {
              const href = formatLink(item.link);

              return (
                <li key={index}>
                  <a
                    className="text-[1.6rem] leading-tight font-normal font-display transition-all duration-400 hover:opacity-80"
                    href={href}
                    target={item.link?.isExternal ? '_blank' : '_self'}
                    rel={
                      item.link?.isExternal ? 'noopener noreferrer' : undefined
                    }
                    tabIndex={isOpen ? undefined : -1}
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

/**
 * The group whose section owns the current path, so it starts expanded.
 * Keyed off each group's *own* link with the same rule the desktop secondary bar
 * uses, so the two navs always agree on the current section.
 */
const activeGroupIndex = (
  mobileMenu: MobileMenuItem[] | undefined,
  pathname?: string
): number | null => {
  if (!mobileMenu || !pathname) return null;

  const groups = mobileMenu.filter(
    (item): item is MenuGroup => item._type === 'menuGroup'
  );
  const matchIndex = mostSpecificSectionIndex(
    groups.map((group) => sectionOfLink(group.link)),
    pathname
  );
  if (matchIndex === null) return null;

  return mobileMenu.indexOf(groups[matchIndex]);
};

const DropDowns: React.FC<Props> = ({ pathname, mobileMenu }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(() =>
    activeGroupIndex(mobileMenu, pathname)
  );

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
          const href = formatLink(item.link);

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

        // Menu Group: its own landing page plus a toggle for the sub-links
        if (item._type === 'menuGroup') {
          return (
            <DropDownItem
              key={index}
              name={item.menuTitle}
              url={formatLink(item.link)}
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
