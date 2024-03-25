"use client";

import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = document.getElementById("username");
    const phoneNumber = document.getElementById("phone-number");
    const verificationCode = document.getElementById("verification-code");

    console.log({ username, phoneNumber, verificationCode });
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-500">
      {/* <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center "> */}
      <div className="bg-white absolute rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-1/2 relative rounded-tr-2xl rounded-br-2xl">
          <img
            src="/assets/bg1.jpg"
            alt="Sample image"
            className=" w-full h-full object-top rounded-bl-2xl rounded-tl-2xl"
          />
        </div>
        <div className="w-1/2 py-36 px-12">
          <div className=" items-center md:text-left">
            <img
              src="/assets/brain.jpg"
              alt="brain-logo"
              width={200}
              height={200}
              className="m-auto mb-5"
            />
            <label className="mr-1 font-bold text-3xl">
              Brain Smart Panel Giriş
            </label>
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
          <form onSubmit={handleLogin}>
            <TextField
              className="text-sm w-full mb-5 border-gray-300 rounded mt-4"
              required
              type="text"
              id="username"
              label="Kullanıcı Adı"
              size="small"
            />
            <TextField
              className="text-sm w-full border-gray-300 rounded mt-4 mb-5"
              required
              type="tel"
              id="phone-number"
              label="Telefon Numarası"
              placeholder="(xxx)-xxx-xxxx"
              size="small"
            />
            <TextField
              className="text-sm w-full border-gray-300 rounded mt-4 mb-5"
              required
              type="tel"
              id="verification-code"
              label="Doğrulama Kodu"
              size="small"
            />

            <div className="text-center md:text-left">
              <button
                className=" w-full mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
              >
                Giriş
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

export default HomePage;
