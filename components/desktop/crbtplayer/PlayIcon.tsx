import React from "react";
export const PlayIcon = ({size = 24, width=24, height=24, ...props}) => (
    <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 27.7"
    width={size || width}
    {...props}
  >
    <polygon points="24 13.9 12 20.8 0 27.7 0 13.9 0 0 12 6.9 24 13.9" fill="currentColor"/>
  </svg>
);
