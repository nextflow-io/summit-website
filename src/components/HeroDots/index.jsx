import classnames from 'classnames';
import React from 'react';
import CircleVisualSrc from '../../images/visuals/circle.png';
import CircleRedVisualSrc from '../../images/visuals/circle-red.png';

const HeroDots = ({ className, children, variant }) => {
  return (
    <div
      style={{
        backgroundPosition: 'top right',
        backgroundSize: '96px 96px',
        backgroundImage: `url(${(variant === 'red') ? CircleRedVisualSrc : CircleVisualSrc})`
      }}
      className={classnames(className, 'py-20 h-[560px] text-white relative')}
    >
      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-black inset-0" />
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default HeroDots;
