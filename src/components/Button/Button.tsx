import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button = (props: ButtonProps) => {
  const { className, isLoading, disabled, children, ...rest } = props;
  const newClassName = disabled ? className + " cursor-not-allowed" : className;
  return (
    <button className={newClassName} disabled={disabled} {...rest}>
      {isLoading && "loading"}
      <span>{children}</span>
    </button>
  );
};

export default Button;
