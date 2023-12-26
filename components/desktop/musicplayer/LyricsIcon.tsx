import React from "react";
export const LyricsIcon = ({ size = 18, width=18, height=18, ...props }) => (
  <svg
    aria-hidden="true"
    fill="currentColor"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 18 18"
    width={size || width}
    {...props}
    className="text-white"
  >
    <path d="M0,0V8.1l6.8-4Z" fill="currentColor"  />
    <rect
      width="18"
      height="1.5"
      transform="translate(0 16.5)"
      fill="currentColor"
    />
    <rect
      width="18"
      height="1.5"
      transform="translate(0 12)"
      fill="currentColor"
    />
    <rect
      width="8"
      height="1.5"
      transform="translate(10 7.5)"
      fill="currentColor"
    />
    <rect
      width="8"
      height="1.5"
      transform="translate(10 3)"
      fill="currentColor"
    />
  </svg>
);
