// import clsx from "clsx";

const Button = ({
  // selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  return (
    <button type={type} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
