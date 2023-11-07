import React from "react";
export const MoreIcon = ({ size = 24, width, height, ...props }) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 52.6 11.9"
    width={size || width}
    {...props}
  >
    <circle cx="5.9" cy="5.9" r="5.9" fill="currentColor"/>
    <circle  cx="46.7" cy="5.9" r="5.9" fill="currentColor"/>
    <circle cx="25.9" cy="5.9" r="5.9" fill="currentColor"/>
  </svg>
);
