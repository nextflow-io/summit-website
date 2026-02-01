import { useState } from 'react';

const COLORS = [
  '#fff', // white
  '#B6ECE2', // nextflow-200
  '#86E0CE', // nextflow-300
  '#56D3BA', // nextflow-400
  '#31C9AC', // nextflow-500
  '#000', // black
];

interface SquareProps {
  initialColor?: string;
  className?: string;
}

export function SquarePixel({ initialColor = COLORS[0], className = '' }: SquareProps) {
  const [color, setColor] = useState(initialColor);

  const handleClick = () => {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    setColor(randomColor);
  };

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: color }}
      className={`w-[18px] h-[18px] transition-colors duration-200 ${className}`}
      aria-label="Change color"
    />
  );
}