import React from "react";
export const PauseCircleIcon = ({size = 24, width, height, ...props}) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 28"
    width={size || width}
    {...props}
  >
    <path
      d="m0,0h7v28H0V0Zm17,0v28h7V0h-7Z"
      fill="currentColor"
    />
  </svg>
);
