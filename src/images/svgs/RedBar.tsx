import * as React from "react"
const RedBar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={542}
    height={111}
    fill="none"
    {...props}
  >
    <path fill="#FA6863" d="M0 0h542v111H0z" />
    <mask
      id="a"
      width={542}
      height={111}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#FA6863" d="M0 0h542v111H0z" />
    </mask>
    <g
      clipPath="url(#b)"
      mask="url(#a)"
      style={{
        mixBlendMode: "multiply",
      }}
    >
      <path fill="url(#c)" d="M-900 472.345h2348.51V-1094H-900V472.345Z" />
      <path fill="url(#d)" d="M548.369-4.119H4.136v131.622h544.233V-4.119Z" />
    </g>
    <defs>
      <linearGradient
        id="c"
        x1={-900}
        x2={1448.51}
        y1={-310.847}
        y2={-310.847}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EFDFDF" />
        <stop offset={0.27} stopColor="#E4DBDA" />
        <stop offset={0.64} stopColor="#D8CFD0" />
        <stop offset={1} stopColor="#DFDDDB" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={548.369}
        x2={4.136}
        y1={61.652}
        y2={61.652}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E17257" />
        <stop offset={0.16} stopColor="#E48E7A" />
        <stop offset={0.38} stopColor="#E7B0A4" />
        <stop offset={0.58} stopColor="#EAC8C2" />
        <stop offset={0.74} stopColor="#ECD7D5" />
        <stop offset={0.86} stopColor="#EDDDDC" />
      </linearGradient>
      <clipPath id="b">
        <path fill="#fff" d="M-900-1094h2348.51V472.35H-900z" />
      </clipPath>
    </defs>
  </svg>
)
export default RedBar
