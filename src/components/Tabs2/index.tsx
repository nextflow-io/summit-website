import classnames from "classnames";
import React, { createContext, useContext } from "react";
import { Link } from "website-components";

import PropTypes from "../../utils/PropTypes";

const TabsContext = createContext();

const Tabs = ({ children, location, anchor }) => {
  return (
    <div className="bg-black rounded-sm overflow-hidden inline-flex">
      <TabsContext.Provider value={{ location, anchor }}>
        {children}
      </TabsContext.Provider>
    </div>
  );
};

const Item = ({ children, to, inactive }) => {
  const { location, anchor } = useContext(TabsContext);

  let url = to;

  if (anchor) {
    url += anchor;
  }

  return (
    <Link
      to={url}
      noBorder
      className={classnames(
        "typo-small block border border-green-600 mx-px first:ml-0 last:mr-0 first:rounded-l-sm last:rounded-r-sm px-4 py-1",
        {
          "bg-black text-green-600 hover:bg-gray-800":
            !location.pathname?.includes(to) || inactive,
          "bg-green-600 text-white":
            location.pathname?.includes(to) && !inactive,
        }
      )}
    >
      {children}
    </Link>
  );
};

Tabs.Item = Item;

export default Tabs;
