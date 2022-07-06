import classnames from 'classnames';
import React from 'react';

import ImageSource from '../../images/visuals/spot.svg';

const HeroAnimation = ({ className }) => {
  return (
    <div
      className="animate-flow absolute inset-0 bg-no-repeat transform-gpu"
      style={{ backgroundImage: `url(${ImageSource})` }}
    />
  );
};

export default HeroAnimation;
