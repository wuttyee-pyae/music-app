import clsx from "clsx";

const Input = ({ className, ...props }) => {
  return (
    <input
      className={clsx(
        "border-solid border-gray border-2 px-2 py-2 text-sm w-full",
        className
      )}
      {...props}
    />
  );
};

export default Input;