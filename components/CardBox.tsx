import clsx from "clsx";

const CardBox = ({ className, children, props }) => {
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

export default CardBox;
