import React from "react";
export const MinusIcon = ({
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
    viewBox="0 0 60.5 5.9"
    width={size || width}
    {...props}
  >
    <path
      d="m57.5,0H3C1.3,0,0,1.3,0,3s1.3,3,3,3h54.6c1.6,0,3-1.3,3-3s-1.3-3-3-3Z"
      fill={color}
    />
  </svg>
);
