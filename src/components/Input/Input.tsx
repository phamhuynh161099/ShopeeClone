import React from "react";
import type { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps {
  type: React.HTMLInputTypeAttribute;
  errorMessage?: string;
  placeholder?: string;
  className?: string;
  name: string;
  register: UseFormRegister<any>;
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
}: InputProps) => {
  return (
    <>
      <div className={className}>
        <input
          type={type}
          className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-sm"
          placeholder={placeholder}
          {...register(name, rules as any)}
        />
        <div className="mt-1 text-red-600 text-sm min-h-[1.25rem]">
          {errorMessage}
        </div>
      </div>
    </>
  );
};

export default Input;
