import clsx from "clsx";

const Glass = ({ children, className } : { children: React.ReactNode, className: any }) => {
  return (
    <div
      className={clsx(
        "",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Glass;