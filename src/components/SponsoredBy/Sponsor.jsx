import React from 'react';
import classNames from 'classnames';

const Sponsor = ({ children, className }) => (
  <div className={classNames(className, 'p-1')}>
    <div className="bg-gray-800 h-24 sm:h-40 max-ws px-4 flex items-center justify-center">{children}</div>
  </div>
);

export default Sponsor;
