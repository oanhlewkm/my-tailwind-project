"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import "../../app/globals.css";
import { Fragment, useState } from "react";
import { clsx } from "clsx";
import Link from "next/link";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type RegisterProps = {
  setCurrentAction: Function;
  setOpenModal: Function;
};

export default function Register({
  setCurrentAction,
  setOpenModal,
}: RegisterProps) {
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
            <div className="flex flex-col md:flex-row space-x-3">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2 sm:col-span-1">
                  <input
                    autoFocus
                    type="text"
                    {...register("firstName", { required: true })}
                    id="firstName"
                    placeholder="Firstname"
                    className={clsx(
                      "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5",
                      {
                        "border-red-500 placeholder-red-500 text-red-900 focus:ring-red-500 focus:border-red-500":
                          errors.firstName,
                      }
                    )}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Lastname"
                    {...register("lastName", { required: true })}
                    className={clsx(
                      "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5",
                      {
                        "border-red-500 placeholder-red-500 text-red-900 focus:ring-red-500 focus:border-red-500":
                          errors.lastName,
                      }
                    )}
                  />
                </div>
              </div>
            </div>
            <input
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
      <div className="pt-12"></div>
      <div className="w-full">
        <button
          type="button"
          onClick={() => setCurrentAction("login")}
          className="w-full font-light rounded-full text-sm px-5 py-2.5 me-2 mb-2"
        >
          Login
        </button>
      </div>
    </Fragment>
  );
}
