import * as React from "react"
const Ticket = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={148}
    height={104}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M1 13.742 13.692 26.49 1.064 39.27l12.692 12.743L1.064 64.76 13.756 77.51 1 90.252v12.716L147 103V90.252L134.308 77.51 147 64.76l-12.692-12.748L147 39.27l-12.692-12.748 12.622-12.781V1H1v12.742ZM32 91h7M51 91h7M71 91h6M90 91h6M109 91h6M32 20h7M51 20h7M71 20h6M90 20h6M109 20h6M51 72V40M45 40h13M103 72V40M96 40h13M71 72V40M84 40 71 53M84 72 71 53"
    />
  </svg>
)
export default Ticket
