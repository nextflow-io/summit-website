import React from 'react';
import CircleVisualSrc from '../../images/visuals/circle.png';

const HeroAnimation = ({ className }) => {
  return (
    <div
      style={{
        backgroundPosition: 'right',
        backgroundSize: '96px 96px',
        backgroundRepeat: 'space',
        backgroundImage: `url(${CircleVisualSrc})`
      }}
      className="absolute inset-0"
    >
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(transparent, #290362)",
        }}
      />
    </div>
  );
};

export default HeroAnimation;
