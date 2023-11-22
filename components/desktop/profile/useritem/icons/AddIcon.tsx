import React from "react";
export const AddIcon = ({ size, height, width, ...props } : { size : number, height : number, width : number}) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 20 20"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(-205 -128)">
        <rect rx="10" transform="translate(205 128)" fill="currentColor" />
        <path
          d="M-3981.5,1324v-4.249h-4.25v-1.5h4.25V1314h1.5v4.251h4.25v1.5H-3980V1324Z"
          transform="translate(4195.75 -1180.998)"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
