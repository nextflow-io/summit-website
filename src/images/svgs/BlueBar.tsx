import * as React from "react"
const BlueBar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={540}
    height={111}
    fill="none"
    {...props}
  >
    <path fill="#3D95FD" d="M0 0h540v111H0z" />
    <mask
      id="a"
      width={540}
      height={111}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#FA6863" d="M0 0h540v111H0z" />
    </mask>
    <g
      clipPath="url(#b)"
      mask="url(#a)"
      style={{
        mixBlendMode: "multiply",
      }}
    >
      <path fill="url(#c)" d="M-362 891.89h2348.51V-510.242H-362V891.89Z" />
      <path fill="url(#d)" d="M542.095-5.88H-7.831v117.824h549.926V-5.879Z" />
    </g>
    <defs>
      <linearGradient
        id="c"
        x1={-362}
        x2={1986.51}
        y1={190.806}
        y2={190.806}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EFDFDF" />
        <stop offset={0.27} stopColor="#E4DBDA" />
        <stop offset={0.64} stopColor="#D8CFD0" />
        <stop offset={1} stopColor="#DFDDDB" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={542.135}
        x2={-7.79}
        y1={52.996}
        y2={52.996}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DCCBCB" />
        <stop offset={0.08} stopColor="#DECAC7" />
        <stop offset={0.54} stopColor="#E8C5B4" />
        <stop offset={0.86} stopColor="#ECC4AE" />
      </linearGradient>
      <clipPath id="b">
        <path fill="#fff" d="M-362-510.242h2348.51v1402.13H-362z" />
      </clipPath>
    </defs>
  </svg>
)
export default BlueBar
