import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: 'h-10 w-10',
};

const MountainIcon = ({ className }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M30.5233 19.035L26.0967 11.3267L27.5417 10.4967L31.9683 18.205L30.5233 19.035ZM36.02 21.6667L31.5933 13.9584L33.0383 13.1284L37.465 20.8367L36.02 21.6667ZM35.6717 24.33C34.8233 21.8234 31.8283 20.1684 29.3283 21.1467L18.9367 3.33337L0.5 36.6667H34.25C37.695 36.6667 40.5 33.8634 40.5 30.4167C40.5 27.46 38.435 24.975 35.6717 24.33ZM34.25 33.3334H6.15333L14.19 18.8034L15.9683 22.3617L19.1717 16.2767L21.955 20.9684L23.815 18.3067L28.2083 25.8334C29.6667 22.865 33.755 24.6867 32.6883 27.6734C34.8067 26.84 37.1667 28.0467 37.1667 30.4167C37.1667 32.025 35.8583 33.3334 34.25 33.3334Z"
      fill="currentColor"
    />
  </svg>
);

MountainIcon.propTypes = propTypes;
MountainIcon.defaultProps = defaultProps;

export default React.memo(MountainIcon);
