import React, { InputHTMLAttributes } from "react";
import type { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  classNameInput?: string;
  classNameError?: string;
  register?: UseFormRegister<any>;
  rules?: RegisterOptions;
}

const Input = ({
  type,
  errorMessage,
  placeholder,
  className,
  name,
  register,
  rules,
  classNameError = "mt-1 text-red-600 text-sm min-h-[1.25rem]",
  classNameInput = "p-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-sm",
}: InputProps) => {
  const registerResult = register && name ? register(name, rules as any) : {};
  return (
    <>
      <div className={className}>
        <input
          type={type}
          className={classNameInput}
          placeholder={placeholder}
          {...registerResult}
        />
        <div className={classNameError}>{errorMessage}</div>
      </div>
    </>
  );
};

export default Input;
