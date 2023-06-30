import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className, paddingClassName, }) => {
  return (
    <div className={classnames('bg-black border border-gray-800 text-white rounded-md shadow-xl', className, paddingClassName)}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  paddingClassName: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  className: '',
  paddingClassName: 'px-4 py-6 lg:p-8',
};

export default Card;
