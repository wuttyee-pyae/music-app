import clsx from "clsx";
import React from "react";

const CardSidebar = ({ className, children }) => {
  return (
    <div id="cta-button-sidebar" className={clsx("drop-shadow-xl", className)}>
        {children}
        <hr />
    </div>
    
  );
};

export default CardSidebar;
