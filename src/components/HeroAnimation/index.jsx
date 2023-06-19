import React from 'react';
import CircleVisualSrc from '../../images/visuals/circle.png';

const HeroAnimation = ({ className }) => {

  return (
    <div
      style={{
        backgroundPosition: 'center center',
        backgroundSize: '96px 96px',
        backgroundImage: `url(${CircleVisualSrc})`
      }}
      className="absolute inset-0"
    >
      <div
        className="absolute inset-0 duration-300 group-hover:scale-105"
        style={{
          background: "radial-gradient(calc(96px * 2.5) at calc(50% + 96px * 3), transparent 70%, rgba(41,3,98,0.9))",
        }}
      />
    </div>
  );
};

export default HeroAnimation;
