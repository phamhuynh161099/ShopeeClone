import { UseFormGetValues, type RegisterOptions } from "react-hook-form";

type Rules = {
  [key in "email" | "password" | "confirm_password"]?: RegisterOptions;
};

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: "Email la bat buoc",
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Email khong dung dinh dang",
    },
    maxLength: {
      value: 160,
      message: "Do dai tu 5 - 160 ky tu",
    },
    minLength: {
      value: 5,
      message: "Do dai tu 5 - 160 ky tu",
    },
  },
  password: {
    required: {
      value: true,
      message: "Password la bat buoc",
    },
    maxLength: {
      value: 160,
      message: "Do dai tu 5 - 160 ky tu",
    },
    minLength: {
      value: 5,
      message: "Do dai tu 5 - 160 ky tu",
    },
  },
  confirm_password: {
    required: {
      value: true,
      message: "Confirm password la bat buoc",
    },
    maxLength: {
      value: 160,
      message: "Do dai tu 5 - 160 ky tu",
    },
    minLength: {
      value: 5,
      message: "Do dai tu 5 - 160 ky tu",
    },
    validate:
      typeof getRules === "function"
        ? (value) =>
            value === getValues!("password") || "Nhâp lại password không khớp"
        : undefined,
  },
});
