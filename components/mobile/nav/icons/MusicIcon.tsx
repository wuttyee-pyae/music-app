import React from "react";
export const MusicIcon = (props: any) => (
  <svg
    aria-hidden="true"
    fill="currentColor"
    focusable="false"
    height="20px"
    role="presentation"
    viewBox="0 0 16.721 16.738"
    width="20px"
    size="20"
    className=""
    {...props}
  >
    <path
      d="M15.059,0H6.693A1.674,1.674,0,0,0,5.02,1.679V10.5a4.574,4.574,0,0,0-1.663-.448,3.3,3.3,0,0,0-3.2,2.33,3.356,3.356,0,0,0,3.074,4.363,3.455,3.455,0,0,0,3.458-3.516V2.516a.837.837,0,0,1,.837-.837h6.692a.837.837,0,0,1,.837.837V10.5a4.578,4.578,0,0,0-1.663-.448,3.3,3.3,0,0,0-3.2,2.33,3.357,3.357,0,0,0,3.074,4.363,3.456,3.456,0,0,0,3.459-3.516V1.679A1.674,1.674,0,0,0,15.059,0Z"
      transform="translate(-0.012 -0.005)"
      fill={props.color || "currentColor"}
    />
  </svg>
);
