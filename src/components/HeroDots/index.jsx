import classnames from 'classnames';
import React from 'react';
import CircleVisualSrc from '../../images/visuals/circle.png';

const HeroDots = ({ className, children }) => {
  return (
    <div
      style={{
        backgroundPosition: 'top right',
        backgroundSize: '96px 96px',
        backgroundImage: `url(${CircleVisualSrc})`
      }}
      className={classnames(className, 'py-20 h-[560px] text-white relative')}
    >
      <div className="bg-indigo-800 bg-opacity-90 absolute inset-0" />
      <div className="bg-gradient-to-b from-transparent to-gray-900 absolute inset-0" />
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default HeroDots;
