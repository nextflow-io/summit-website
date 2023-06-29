import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: 'h-10 w-10',
};

const LaptopIcon = ({ className }) => (
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M37.1667 28.3333V8.66663C37.1667 7.56163 36.2717 6.66663 35.1667 6.66663H5.83333C4.72833 6.66663 3.83333 7.56163 3.83333 8.66663V28.3333H37.1667ZM7.16667 9.99996H33.8333V25H7.16667V9.99996ZM40.5 30V31.3333C40.5 32.4383 39.605 33.3333 38.5 33.3333H2.5C1.395 33.3333 0.5 32.4383 0.5 31.3333V30H17.1667C17.1667 30.46 17.54 30.8333 18 30.8333H23C23.46 30.8333 23.8333 30.46 23.8333 30H40.5Z"
      fill="currentColor"
    />
  </svg>
);

LaptopIcon.propTypes = propTypes;
LaptopIcon.defaultProps = defaultProps;

export default React.memo(LaptopIcon);
