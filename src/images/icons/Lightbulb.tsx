import * as React from "react"
const Lightbulb = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={108}
    height={108}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M51.75 83.25h13.5l18-15.75V36l-31.5-18-31.5 18v31.5l18 15.75h13.5ZM51.75 83.25V63M51.75 63 63 54M51.75 63 40.5 54M51.75 2.25v4.5M29.25 6.75l2.25 3.897M15.75 22.5l3.897 2.25M74.25 6.75 72 10.647M87.75 22.5l-3.897 2.25M65.25 83.25h-27v9h27v-9ZM65.25 92.25h-27v9h27v-9ZM51.75 101.25v4.5"
    />
  </svg>
)
export default Lightbulb
