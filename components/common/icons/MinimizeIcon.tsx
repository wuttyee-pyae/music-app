import React from "react";
export const MinimizeIcon = ({
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
    <polygon points="9 5.8 3.2 0 0 3 5.9 8.9 2.9 12 15.5 15.4 12.1 2.8 9 5.8" fill={color}/>
    <polygon points="46 3 42.8 0 37 5.8 33.9 2.8 30.5 15.4 43.1 12 40.1 8.9 46 3" fill={color}/>
    <polygon points="37.2 40.2 43 46 46 42.8 40.2 37.1 43.3 34 30.7 30.6 34.1 43.2 37.2 40.2" fill={color}/>
    <polygon points="0 42.8 3 46 8.8 40.2 11.9 43.2 15.3 30.6 2.7 34 5.8 37.1 0 42.8" fill={color}/>
  </svg>
);
