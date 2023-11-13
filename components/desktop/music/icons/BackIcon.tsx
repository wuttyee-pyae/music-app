import React from "react";
export const BackIcon = ({ size = 16, width = 16, height = 16, ...props }) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 30 51.6"
    width={size || width}
    {...props}
  >
    <polygon points="30 4.2 25.8 0 0 25.8 4.2 30 4.2 30 25.8 51.6 30 47.4 8.4 25.8 30 4.2" fill="currentColor"/>

  </svg>
);
