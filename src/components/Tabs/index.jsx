import classnames from 'classnames';
import React, { createContext, useContext } from 'react';
import { Link } from 'website-components';

import PropTypes from '../../utils/PropTypes';

const TabsContext = createContext();

const Tabs = ({ children, current, setCurrent, vertical }) => {
  return (
    <div className={classnames('rounded-sm overflow-hidden', {
        'inline-flex': !vertical,
        'flex flex-col': vertical,
      })}
    >
      <TabsContext.Provider value={{ current, setCurrent, vertical }}>
        {children}
      </TabsContext.Provider>
    </div>
  );
};

const Item = ({ children, index }) => {
  const { current, setCurrent, vertical } = useContext(TabsContext);

  return (
    <button onClick={() => { setCurrent(index) }} className={classnames(
      'typo-small block border px-4 py-1 duration-300',
      {
        'mx-px first:ml-0 last:mr-0 first:rounded-l-sm last:rounded-r-sm': !vertical,
        'my-px first:mt-0 last:mb-0 first:rounded-t-sm last:rounded-b-sm': vertical,
        'text-green-300 bg-black border-gray-800 hover:border-green-300': current != index,
        'bg-green-300 text-black border-green-300': current === index,
      }
    )}
    >
      {children}
    </button>
  );
};

Tabs.Item = Item;

export default Tabs;
