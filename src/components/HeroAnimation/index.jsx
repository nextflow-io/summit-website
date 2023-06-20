import React from 'react';
import CircleVisualSrc from '../../images/visuals/circle.png';
import CircleRedVisualSrc from '../../images/visuals/circle-red.png';

const HeroAnimation = ({ className, variant }) => {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-indigo-800 to-black">
      <div
        style={{
          backgroundPosition: 'center center',
          backgroundSize: '96px 96px',
          backgroundImage: `url(${(variant === 'red') ? CircleRedVisualSrc : CircleVisualSrc})`
        }}
        className="h-full w-full"
      >
        <div
          className="absolute inset-0 duration-300 group-hover:scale-105"
          style={{
            background: "radial-gradient(calc(96px * 2.5) at calc(50% + 96px * 3), transparent 70%, rgba(0,0,0,0.75))",
          }}
        />
      </div>
    </div>
  );
};

export default HeroAnimation;
