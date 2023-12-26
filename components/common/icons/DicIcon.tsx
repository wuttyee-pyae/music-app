import React from "react";
export const DicIcon = ({
  size = 24,
  width = 24,
  height = 24,
  color = "currentColor",
  ...props
}) => (
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
      d="m23,0C10.3,0,0,10.3,0,23s10.3,23,23,23,23-10.3,23-23S35.7,0,23,0Zm0,29.9c-3.8,0-6.9-3.1-6.9-6.9s3.1-6.9,6.9-6.9,6.9,3.1,6.9,6.9-3.1,6.9-6.9,6.9Z"
      fill={color}
    />
  </svg>
);
