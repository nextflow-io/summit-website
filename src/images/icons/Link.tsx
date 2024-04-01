import React from "react";

type Props = {
  className?: string;
};

export default ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="20.01"
    height="20.01"
    viewBox="0 0 20.01 20.01"
  >
    <path
      d="M15.83,0H4.17C1.87,0,0,1.87,0,4.17v11.67c0,2.3,1.87,4.17,4.17,4.17h11.67c2.3,0,4.17-1.87,4.17-4.17V4.17c0-2.3-1.86-4.17-4.17-4.17h-.01ZM9,14h-1c-1.61,0-4-1.06-4-4s2.39-4,4-4h1v2h-1c-.46,0-2,.17-2,2s1.67,2,2,2h1v2M13,9v2h-6v-2h6M12,14h-1v-2h1c.46,0,2-.17,2-2s-1.67-2-2-2h-1v-2h1c1.61,0,4,1.07,4,4s-2.39,4-4,4Z"
      fill="currentColor"
      stroke-width="0"
    />
  </svg>
);
