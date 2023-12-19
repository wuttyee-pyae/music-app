import React from "react";
export const CloseIcon = ({size = 24, width =24, height=24, color="currentColor", ...props}) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 46 46"
    width={size || width}
    {...props}
  >
    <path
      d="m26.7,23L45.2,4.4c1-1,1-2.7,0-3.7-1-1-2.7-1-3.7,0l-18.6,18.6L4.4.8C3.4-.3,1.8-.3.8.8-.3,1.8-.3,3.4.8,4.4l18.6,18.6L.8,41.6c-1,1-1,2.7,0,3.7.5.5,1.2.8,1.8.8s1.3-.3,1.8-.8l18.6-18.6,18.6,18.6c.5.5,1.2.8,1.8.8s1.3-.3,1.8-.8c1-1,1-2.7,0-3.7l-18.6-18.6Z"
      fill={color}
    />
  </svg>
);
