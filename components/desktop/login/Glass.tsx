import clsx from "clsx";

const Glass = ({ children, className } : { children: React.ReactNode, className: string }) => {
  return (
    <div
      className={`${className}`}
    >
      {children}
    </div>
  );
};

export default Glass;