import Input from "@/components/Input";
import { getRules, schema } from "@/utils/rule";
import { yupResolver } from "@hookform/resolvers/yup";
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
    watch,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema) as any,
  });

  const rules = getRules(getValues);

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

              <Input
                type="email"
                className="mt-8"
                placeholder="Email"
                name="email"
                errorMessage={errors.email?.message}
                register={register}
                rules={rules.email}
              />

              <Input
                type="password"
                className="mt-3"
                placeholder="Password"
                name="password"
                errorMessage={errors.password?.message}
                register={register}
                rules={rules.password}
              />

              <Input
                type="password"
                className="mt-3"
                placeholder="Confirm Password"
                name="confirm_password"
                errorMessage={errors.confirm_password?.message}
                register={register}
                rules={rules.confirm_password}
              />

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
