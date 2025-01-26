import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Input from "@/components/Input";
import { getRules, schema } from "@/utils/rule";
import { registerAccount } from "@/apis/auth.api";
import { omit } from "lodash";
import { isAxiosUnprocessableEntityError } from "@/utils/utils";
import { ErrorResponseApi } from "@/types/utils.type";
import { AppContext } from "@/contexts/app.context";

/**
 * phamhuynh1307
 * 123456789
 * fake account
 */

interface FormData {
  email: string;
  password: string;
  confirm_password: string;
}

const Register = () => {
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
    resolver: yupResolver(schema) as any,
  });

  const rules = getRules(getValues);

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, "confirm_password">) => {
      return registerAccount(body);
    },
    onSuccess: (data, variables, context) => {
      console.log("registerAccountMutation success:", data);
      setIsAuthenticated(true);
      navigate("/");
    },
    onError: (error, variables, context) => {
      // An error happened!
      console.log(`error`, error);
      if (
        isAxiosUnprocessableEntityError<
          ErrorResponseApi<Omit<FormData, "confirm_password">>
        >(error)
      ) {
        const formError = error.response?.data.data;

        // cach 1
        if (formError) {
          Object.keys(formError).forEach((key) => {
            setError(key as keyof Omit<FormData, "confirm_password">, {
              message:
                formError[key as keyof Omit<FormData, "confirm_password">],
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
    const body = omit(data, ["confirm_password"]);
    registerAccountMutation.mutate(body);
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
