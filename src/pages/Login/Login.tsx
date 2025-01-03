import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <>
      <div className="bg-orange">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:py-32 lg:pr-10">
            <div className="lg:col-span-2 lg:col-start-4">
              <form
                className="p-10 rounded bg-white shadow-sm"
                onSubmit={onSubmit}
              >
                <div className="text-2xl">Đăng Nhap</div>
                <div className="mt-8">
                  <input
                    type="email"
                    name="email"
                    className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-sm"
                    placeholder="Email"
                  />
                  <div className="mt-1 text-red-600 text-sm min-h-[1rem]">
                    Email khong hop le
                  </div>
                </div>

                <div className="mt-3">
                  <input
                    type="password"
                    name="password"
                    className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-sm"
                    placeholder="Password"
                  />
                  <div className="mt-1 text-red-600 text-sm min-h-[1rem]">
                    Password khong hop le
                  </div>
                </div>

                <div className="mt-3">
                  <button
                    type="submit"
                    className="w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600"
                  >
                    Đăng Nhap
                  </button>
                </div>

                <div className="mt-8 text-center">
                  <div className="flex items-center justify-center">
                    <span className="text-slate-400">
                      Bạn chưa có tài khoản?
                    </span>
                    <Link to="/register" className="text-red-400 ml-2">
                      Đăng Ký
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
