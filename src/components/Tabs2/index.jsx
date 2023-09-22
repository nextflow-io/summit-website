import classnames from 'classnames';
import React, { createContext, useContext } from 'react';
import { Link } from 'website-components';

const TabsContext = createContext();

const Tabs = ({ children, location, anchor, partialMatch }) => {
  return (
    <div className="bg-black rounded-sm overflow-hidden inline-flex">
      <TabsContext.Provider value={{ location, anchor, partialMatch }}>{children}</TabsContext.Provider>
    </div>
  );
};

const Item = ({ children, to, inactive, altPath }) => {
  const { location, anchor, partialMatch } = useContext(TabsContext);

  let isCurrentPage = location.pathname === to;
  if (partialMatch) isCurrentPage = location.pathname?.includes(to);

  if (altPath && !isCurrentPage) {
    isCurrentPage = location.pathname?.includes(altPath);
  }

  let url = to;

  if (anchor) {
    url += anchor;
  }

  return (
    <Link
      to={url}
      noBorder
      className={classnames(
        'typo-small block border border-green-300 mx-px first:ml-0 last:mr-0 first:rounded-l-sm last:rounded-r-sm px-4 py-1',
        {
          'bg-black text-green-300 hover:bg-gray-800': !isCurrentPage || inactive,
          'bg-green-300 text-white': isCurrentPage && !inactive,
        }
      )}
    >
      {children}
    </Link>
  );
};

Tabs.Item = Item;

export default Tabs;
