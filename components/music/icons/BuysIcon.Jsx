import React from "react";
export const BuysIcon = ({ size = 24, width, height, ...props }) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 47.2 50"
    width={size || width}
    {...props}
  >
    <path
      d="m37.8,40c-2.8-.2-5.1,2-5.3,4.7-.2,2.8,2,5.1,4.7,5.3,2.8.2,5.1-2,5.3-4.7,0,0,0-.2,0-.3,0-2.7-2-4.9-4.7-5Z"
      fill="currentColor"
    />
    <path
      d="m14.2,40c-2.8.2-4.9,2.5-4.7,5.3.1,2.5,2.2,4.6,4.7,4.7,2.8-.2,4.9-2.5,4.7-5.3-.1-2.5-2.2-4.6-4.7-4.7Z"
      fill="currentColor"
    />
    <path
      d="m16.8,27.5h17.5c1.7,0,3.3-.9,4-2.5l8.5-16.3c.3-.3.5-.8.5-1.2.1-1.3-.8-2.4-2.1-2.5,0,0-.2,0-.3,0H9.9L7.8,0H0v5h4.7l8.5,19-3.3,6c-.3.8-.4,1.6-.5,2.5,0,2.7,2,4.9,4.7,5h28.3v-5H15.1c-.3,0-.5-.2-.5-.5v-.3l2.1-4.2Z"
      fill="currentColor"
    />
  </svg>
);
