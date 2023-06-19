import classnames from 'classnames';
import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={classnames('bg-black border border-gray-800 text-white px-4 py-6 lg:p-8 rounded-md shadow-xl', className)}>
      {children}
    </div>
  );
};

export default Card;
