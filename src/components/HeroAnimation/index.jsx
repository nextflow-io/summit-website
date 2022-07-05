import classnames from 'classnames';
import React from 'react';

const HeroAnimation = ({ className }) => {
  return (
    <svg
      width="1943"
      height="1844"
      viewBox="0 0 1943 1844"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames(
        className,
      )}
    >
      <g filter="url(#filter0_f_629_5939)">
        <ellipse cx="897.734" cy="1110.77" rx="664.714" ry="429.377" transform="rotate(35.0909 897.734 1110.77)" fill="url(#paint0_linear_629_5939)"/>
      </g>
      <g style={{ mixBlendMode: 'color-dodge' }} opacity="0.6" filter="url(#filter1_f_629_5939)">
        <ellipse cx="925.94" cy="596.038" rx="307.143" ry="181.875" transform="rotate(16.599 925.94 596.038)" fill="#26AF64"/>
      </g>
      <g style={{ mixBlendMode: 'color-dodge' }} filter="url(#filter2_f_629_5939)">
        <ellipse cx="1297.48" cy="1374.94" rx="354.984" ry="204.036" transform="rotate(16.599 1297.48 1374.94)" fill="#26AF64"/>
      </g>
      <defs>
        <filter id="filter0_f_629_5939" x="0.300781" y="291.679" width="1794.87" height="1638.19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_629_5939"/>
        </filter>
        <filter id="filter1_f_629_5939" x="226.996" y="0.860352" width="1397.89" height="1190.35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_629_5939"/>
        </filter>
        <filter id="filter2_f_629_5939" x="652.274" y="854.631" width="1290.41" height="1040.62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_629_5939"/>
        </filter>
        <linearGradient id="paint0_linear_629_5939" x1="1516.25" y1="809.774" x2="649.205" y2="1675.13" gradientUnits="userSpaceOnUse">
          <stop offset="0.281087" stop-color="#26AF64"/>
          <stop offset="1" stop-color="#3443B4"/>
        </linearGradient>
      </defs>
    </svg>
  )
};

export default HeroAnimation;
