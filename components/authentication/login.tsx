"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import "../../app/globals.css";
import { Fragment, useState } from "react";
import { clsx } from "clsx";
import Link from "next/link";

type Inputs = {
  email: string;
  password: string;
};

type LoginProps = {
  setCurrentAction: Function;
  setOpenModal: Function;
};

export default function Login({ setCurrentAction, setOpenModal }: LoginProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data, "SubmitHandler");
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 500000);
  };

  console.log(watch("email")); // watch input value by passing the name of it
  console.log(errors.password?.type, "errors.password");

  return (
    <Fragment>
      <div className="pt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 text-left"
        >
          {/* register your input into the hook by invoking the "register" function */}
          <div className="flex flex-col space-y-1 text-left">
            <input
              autoFocus
              type="text"
              id="email-input"
              {...register("email", { required: true })}
              placeholder="Email address"
              className={clsx(
                "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
                {
                  "border-red-500 placeholder-red-500 text-red-900 focus:ring-red-500 focus:border-red-500":
                    errors.email,
                }
              )}
            />
            {errors.email && (
              <span className="text-sm text-red-600">Invalid email.</span>
            )}
          </div>
          <div className="flex flex-col space-y-1 text-left">
            {/* include validation with required or other standard HTML validation rules */}
            <input
              id="password-input"
              {...register("password", { required: true })}
              placeholder="Password"
              type="password"
              className={clsx(
                "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
                {
                  "border-red-500 placeholder-red-500 text-red-900 focus:ring-red-500 focus:border-red-500":
                    errors.password,
                }
              )}
            />
            {/* errors will return when field validation fails  */}
            {errors.password && (
              <span className="text-sm text-red-600">
                This field is required.
              </span>
            )}
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="w-full text-white bg-violet-500 font-light rounded-full text-sm px-5 py-2.5 me-2 mb-2"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
      <div>
        <Link href="" className="text-sm underline text-accent">
          Forgot your password?
        </Link>
      </div>
      <div className="pt-12"></div>
      <div className="w-full">
        <button
          type="button"
          onClick={() => setCurrentAction("register")}
          className="w-full font-light rounded-full text-sm px-5 py-2.5 me-2 mb-2"
        >
          Free account? Register now
        </button>
      </div>
    </Fragment>
  );
}
