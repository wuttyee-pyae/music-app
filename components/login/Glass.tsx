import clsx from "clsx";

const Glass = ({ children, className }) => {
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