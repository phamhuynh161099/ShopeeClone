import { login } from "@/apis/auth.api";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { AppContext } from "@/contexts/app.context";
import { ErrorResponseApi } from "@/types/utils.type";
import { getRules, loginSchema } from "@/utils/rule";
import { isAxiosUnprocessableEntityError } from "@/utils/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { omit } from "lodash";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const { setIsAuthenticated } = useContext(AppContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema) as any,
  });

  const rules = getRules(getValues);

  const loginMutation = useMutation({
    mutationFn: (body: FormData) => {
      return login(body);
    },
    onSuccess: (data, variables, context) => {
      console.log("loginMutation success:", data);
      setIsAuthenticated(true);
      navigate("/");
    },
    onError: (error, variables, context) => {
      // An error happened!
      console.log(`error`, error);
      if (isAxiosUnprocessableEntityError<ErrorResponseApi<FormData>>(error)) {
        const formError = error.response?.data.data;

        // cach 1
        if (formError) {
          Object.keys(formError).forEach((key) => {
            setError(key as keyof FormData, {
              message: formError[key as keyof FormData],
              type: "Server",
            });
          });
        }

        // cach 2
        // if (formError?.email) {
        //   setError("email", {
        //     message: formError.email,
        //     type: "Server",
        //   });
        // }

        // if (formError?.password) {
        //   setError("password", {
        //     message: formError.password,
        //     type: "Server",
        //   });
        // }
      }
    },
  });
  const onSubmit = handleSubmit((data) => {
    const body = data;
    console.log("submit login");
    loginMutation.mutate(body);
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

                <div className="mt-3">
                  <Button
                    type="submit"
                    isLoading={loginMutation.isPending}
                    disabled={loginMutation.isPending}
                    className="w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600"
                  >
                    Đăng Nhap
                  </Button>
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
