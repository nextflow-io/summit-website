import * as React from "react"
export default (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 23 23"
    fill="none"
   className="arrow-up-right w-5 h-5"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.18.966h16.854V17.82M.966 22.034 22.034.965"
    />
  </svg>
);