import React from "react";
export const VolumUp = ({ size = 20, width, height, ...props }) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 20.988 18"
    width={size || width}
    {...props}
  >
    <path
      d="M14.3,3l-.8.8a7.365,7.365,0,0,1,0,10.3l.8.8.2-.2A8.241,8.241,0,0,0,14.3,3Z"
      fill="currentColor"
    />
    <path d="M0,6v6H2.5l5.9,6V0L2.5,6Z" fill="currentColor" />
    <path
      d="M10.6,6.8a3.138,3.138,0,0,1,0,4.4l.8.8a4.226,4.226,0,0,0,0-5.9Z"
      fill="currentColor"
    />
    <path
      d="M17.3.1l-.8.8.2.2a11.378,11.378,0,0,1-.2,16.1l.8.8.1-.1A12.707,12.707,0,0,0,17.3.1Z"
      fill="currentColor"
    />
  </svg>
);
