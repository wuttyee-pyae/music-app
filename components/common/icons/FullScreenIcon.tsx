import React from "react";
export const FullScreenIcon = ({
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
    <polygon points="6.4 9.5 12.3 15.4 15.5 12.4 9.5 6.4 12.6 3.4 0 0 3.4 12.6 6.4 9.5"  fill={color} />
    <polygon points="30.5 12.4 33.7 15.4 39.6 9.5 42.6 12.6 46 0 33.4 3.4 36.5 6.4 30.5 12.4"  fill={color} />
    <polygon points="39.6 36.5 33.7 30.6 30.7 33.8 36.5 39.6 33.4 42.6 46 46 42.6 33.4 39.6 36.5"  fill={color} />
    <polygon points="15.3 33.8 12.3 30.6 6.4 36.5 3.4 33.4 0 46 12.6 42.6 9.5 39.6 15.3 33.8"  fill={color} />
  </svg>
);
