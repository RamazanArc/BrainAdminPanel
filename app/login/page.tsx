"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Login from "../Models/Login";
import { API } from "../api/service";

const LoginPage = () => {
  const [step, setStep] = useState(0);
  const loginObject = new Login();
  // const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const username = document.getElementById("username");
  //   const phoneNumber = document.getElementById("phone-number");
  //   const verificationCode = document.getElementById("verification-code");

  //   console.log({ username, phoneNumber, verificationCode });
  //   router.push("/home");
  // };

  const userSchema = yup
    .object({
      id: yup.string().required("Doldurulması zorunlu alan"),
      phoneNumber: yup.string().required("Doldurulması zorunlu alan"),
      verificationCode:
        step === 0
          ? yup.string().notRequired()
          : yup.string().required("Doldurulması zorunlu alan"),
    })
    .required();
  type UserSchemaType = yup.InferType<typeof userSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchemaType>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data: UserSchemaType) => {
    const params = {
      id: data.id,
      mobilePhone: data.phoneNumber,
    };
    const loginParams = {
      id: data.id,
      mobilePhone: data.phoneNumber,
      authCode: data.verificationCode,
    };
    if (step === 0) {
      loginObject.getMobileAuthCode(params, {});
      setStep(1);

      // validation code sended
    } else {
      loginObject.getLoginInfo(loginParams);

      // login with verification code
      // router.push("/home");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-white">
      {/* <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center "> */}
      <div className="bg-white absolute rounded-l shadow-xl flex w-2/3 max-w-4xl">
        <div className="w-1/2 rounded-tr-l rounded-br-l">
          <img
            src="/assets/bg1.jpg"
            alt="Sample image"
            className=" w-full h-full object-top rounded-bl-l rounded-tl-l"
          />
        </div>
        <div className="w-1/2 py-36 px-12">
          <div>
            <img
              src="/assets/brain.jpg"
              alt="brain-logo"
              width={200}
              height={200}
              className="m-auto mb-5"
            />
            <label className="mr-1 font-bold text-3xl">Brain Smart</label>
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            {step === 0 ? (
              <div className="flex flex-col gap-2 text-left">
                <div className="mb-5 relative w-full min-w-[200px] h-10">
                  <input
                    className=" peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    type="text"
                    id="username"
                    placeholder=""
                    {...register("id")}
                  />
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                    Kullanıcı Adı
                  </label>
                  {errors?.id?.message && (
                    <span className="text-red-400 text-xs">
                      {errors.id.message}
                    </span>
                  )}
                </div>
                <div className="relative w-full min-w-[200px] h-10 mb-8">
                  <input
                    className=" peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    type="text"
                    id="phoneNumber"
                    placeholder=""
                    {...register("phoneNumber")}
                  />
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                    Telefon Numarası
                  </label>
                  {errors?.phoneNumber?.message && (
                    <span className="text-red-400 text-xs">
                      {errors.phoneNumber.message}
                    </span>
                  )}
                </div>
              </div>
            ) : (
              <div className="relative w-full min-w-[200px] h-10 mb-8">
                <input
                  className=" peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  type="text"
                  id="verificationCode"
                  placeholder=""
                  {...register("verificationCode")}
                />
                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                  Doğrulama Kodu
                </label>
                {errors?.verificationCode?.message && (
                  <span className="text-red-400 text-xs">
                    {errors.verificationCode.message}
                  </span>
                )}
              </div>
            )}

            <div className="text-center md:text-left">
              <button
                className=" w-full h-12 mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white rounded text-xs tracking-wider"
                type="submit"
              >
                {step === 0 ? "Doğrulama Kodu Al" : "Giriş"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* </main> */}
    </div>
    // <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
    //   <div className="md:w-1/3 max-w-sm">
    //     <img src="/assets/brain.jpg" alt="Sample image" />
    //   </div>
    //   <div className="md:w-1/3 max-w-sm">
    //      -----
    //   </div>
    // </section>
  );
};

export default LoginPage;
