import { rules } from "@/utils/rule";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
  confirm_password: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  console.log("error", errors);

  return (
    <div className="bg-orange">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:py-32 lg:pr-10">
          <div className="lg:col-span-2 lg:col-start-4">
            <form
              className="p-10 rounded bg-white shadow-sm"
              onSubmit={onSubmit}
            >
              <div className="text-2xl">Đăng Ky</div>
              <div className="mt-8">
                <input
                  type="email"
                  className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-sm"
                  placeholder="Email"
                  {...register("email", rules.email as any)}
                />
                <div className="mt-1 text-red-600 text-sm min-h-[1.25rem]">
                  {errors.email?.message}
                </div>
              </div>

              <div className="mt-3">
                <input
                  type="password"
                  className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-sm"
                  placeholder="Password"
                  {...register("password", rules.password as any)}
                />
                <div className="mt-1 text-red-600 text-sm min-h-[1.25rem]">
                  {errors.password?.message}
                </div>
              </div>

              <div className="mt-3">
                <input
                  type="password"
                  className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-sm"
                  placeholder="Confirm Password"
                  {...register(
                    "confirm_password",
                    rules.confirm_password as any
                  )}
                />
                <div className="mt-1 text-red-600 text-sm min-h-[1.25rem]">
                  {errors.confirm_password?.message}
                </div>
              </div>

              <div className="mt-3">
                <button
                  type="submit"
                  className="w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600"
                >
                  Đăng Ky
                </button>
              </div>

              <div className="mt-8 text-center">
                <div className="flex items-center justify-center">
                  <span className="text-slate-400">Bạn đã có tài khoản?</span>
                  <Link to="/login" className="text-red-400 ml-2">
                    Đăng Nhập
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
