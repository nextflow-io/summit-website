import * as React from "react"
export default (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    className="arrow-up-right"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.18.966h16.854V17.82M.966 22.034 22.034.965"
    />
  </svg>
);

