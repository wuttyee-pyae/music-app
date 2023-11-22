import clsx from "clsx";

const Card = ({ className, children } : { className : string, children : any }) => {
  return (
    <div id="cta-button-sidebar" className={clsx("drop-shadow-xl", className)}>
      <aside
        id="sidebar-multi-level-sidebar"
        className="sidebar sidebar-dark left-bar left-0 z-30 w-64 transition-transform -translate-x-full lg:translate-x-0"
        aria-label="Sidebar"
      >
        {children}
      </aside>
    </div>
  );
};

export default Card;
