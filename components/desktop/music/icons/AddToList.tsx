import React from "react";
export const AddToListIcon = ({ size = 24, width = 24, height = 24 , ...props }) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 61.2 50"
    width={size || width}
    {...props}
  >
    <path
      d="m14.3,18.4c-.3,0-.5.2-.6.4L2,48v1c0,.7,0,1,.6,1h45.7c1.2,0,2.2-.7,2.5-1.8l10.4-28.8v-1H14.3Z"
      fill="currentColor"
    />
    <path
      d="m13,16.3h42.1v-6.4c0-1.5-1.2-2.8-2.8-2.8h-25.3L22,0H2.8C1.3,0,0,1.2,0,2.8v42.7l10.5-27.3c.3-1.1,1.3-1.9,2.5-1.9Z"
      fill="currentColor"
    />
  </svg>
);
