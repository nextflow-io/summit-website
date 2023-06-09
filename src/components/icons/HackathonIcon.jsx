import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: 'h-10 w-10',
};

const HackathonIcon = ({ className }) => (
  <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M11.7 34.1533C14.2533 35.7467 17.27 36.6667 20.5 36.6667C23.7233 36.6667 26.735 35.75 29.2867 34.1617L31.3533 36.7983C28.2267 38.8233 24.5 40 20.5 40C16.495 40 12.7633 38.82 9.63333 36.79L11.7 34.1533ZM2.83833 31.9367H0.5C0.5 30.0967 1.99167 28.6033 3.83333 28.6033H7.16667C8.05 28.6033 8.89833 28.955 9.52333 29.58C10.1483 30.205 10.5 31.0533 10.5 31.9367H8.16167C7.835 30.9267 6.90333 30.7267 5.5 30.7267C4.09667 30.7267 3.16667 30.9183 2.83833 31.9367ZM32.8383 31.6667H30.5C30.5 29.825 31.9917 28.3333 33.8333 28.3333H37.1667C38.05 28.3333 38.8983 28.685 39.5233 29.31C40.1483 29.935 40.5 30.7817 40.5 31.6667H38.1617C37.835 30.6567 36.9033 30.4567 35.5 30.4567C34.0967 30.4567 33.1667 30.6483 32.8383 31.6667ZM5.5 20.27C7.57 20.27 9.25 21.95 9.25 24.02C9.25 26.09 7.57 27.77 5.5 27.77C3.43 27.77 1.75 26.09 1.75 24.02C1.75 21.95 3.43 20.27 5.5 20.27ZM35.5 20C37.57 20 39.25 21.68 39.25 23.75C39.25 25.82 37.57 27.5 35.5 27.5C33.43 27.5 31.75 25.82 31.75 23.75C31.75 21.68 33.43 20 35.5 20ZM5.5 22.52C6.32833 22.52 7 23.1917 7 24.02C7 24.8483 6.32833 25.52 5.5 25.52C4.67167 25.52 4 24.8483 4 24.02C4 23.1917 4.67167 22.52 5.5 22.52ZM35.5 22.25C36.3283 22.25 37 22.9217 37 23.75C37 24.5783 36.3283 25.25 35.5 25.25C34.6717 25.25 34 24.5783 34 23.75C34 22.9217 34.6717 22.25 35.5 22.25ZM13.8333 1.14V4.72167C8.93667 6.86333 5.265 11.2917 4.17 16.6517L0.78 16.6467C2 9.43333 7.08833 3.52667 13.8333 1.14ZM27.1667 1.14C33.9117 3.52667 39 9.43333 40.22 16.6467L36.83 16.6517C35.735 11.2917 32.0633 6.86333 27.1667 4.72167V1.14ZM17.8383 11.6667H15.5C15.5 9.825 16.9917 8.33333 18.8333 8.33333H22.1667C23.05 8.33333 23.8983 8.685 24.5233 9.31C25.1483 9.935 25.5 10.7817 25.5 11.6667H23.1617C22.835 10.6567 21.9033 10.4567 20.5 10.4567C19.0967 10.4567 18.1667 10.6483 17.8383 11.6667ZM20.5 0C22.57 0 24.25 1.68 24.25 3.75C24.25 5.82 22.57 7.5 20.5 7.5C18.43 7.5 16.75 5.82 16.75 3.75C16.75 1.68 18.43 0 20.5 0ZM20.5 2.25C21.3283 2.25 22 2.92167 22 3.75C22 4.57833 21.3283 5.25 20.5 5.25C19.6717 5.25 19 4.57833 19 3.75C19 2.92167 19.6717 2.25 20.5 2.25Z"
      fill="currentColor"
    />
  </svg>
);

HackathonIcon.propTypes = propTypes;
HackathonIcon.defaultProps = defaultProps;

export default React.memo(HackathonIcon);