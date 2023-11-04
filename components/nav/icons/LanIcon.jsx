import React from "react";
export const LanIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 18 16"
      fill={filled ? fill : "none"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.364,16l-.921-2.4H11.557L10.636,16H9l3.682-9.6h1.636L18,16ZM13.5,8.532,12.17,12h2.66Zm-5.842-.1-.024.024L9.712,10.46,9.09,12.088,6.545,9.6l-4.091,4L1.3,12.468l4.16-4.02A14.008,14.008,0,0,1,3.019,4.8H4.655a12.6,12.6,0,0,0,1.89,2.68A12.561,12.561,0,0,0,9.139,3.192H0V1.6H5.727V0H7.364V1.6h5.727V3.2h-2.4A13.944,13.944,0,0,1,7.658,8.428Z"
        fill="currentColor"/>
    </svg>
  );
};
