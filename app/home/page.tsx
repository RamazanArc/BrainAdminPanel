"use client";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ramazan Arıcı",
      roleCode: "ABCDE",
      roleDescription: "Stajyer",
      companyCode: "BR",
      mobile: "5555555555",
      status: "Aktif",
    },
    {
      id: 2,
      name: "Ümit Biçici",
      roleCode: "AAAAA",
      roleDescription: "Admin",
      companyCode: "BR",
      mobile: "5555555555",
      status: "Aktif",
    },
    {
      id: 3,
      name: "Mehmet Cem Çolpan",
      roleCode: "AAAAA",
      roleDescription: "Admin",
      companyCode: "BR",
      mobile: "5555555555",
      status: "Aktif",
    },
  ]);

  return (
    <div className=" flex min-h-screen text-text-color">
      <Sidebar />

      <div className="relative overflow-x-auto w-full">
        <h1 className="font-bold text-xl mt-5 mb-5 ml-5">
          Aktif Brain Kullanıcıları
        </h1>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
            placeholder="Kullanıcı Ara"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500  mt-10">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Ad Soyad
              </th>
              <th scope="col" className="px-6 py-3">
                Rol Kodu
              </th>
              <th scope="col" className="px-6 py-3">
                Rol Açıklama
              </th>
              <th scope="col" className="px-6 py-3">
                Şirket Kodu
              </th>
              <th scope="col" className="px-6 py-3">
                Mobil
              </th>
              <th scope="col" className="px-6 py-3">
                Statü
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="odd:bg-white even:bg-gray-100">
                <td className="px-6 py-4">{user.id}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {user.name}
                </th>
                <td className="px-6 py-4">{user.roleCode}</td>
                <td className="px-6 py-4">{user.roleDescription}</td>
                <td className="px-6 py-4">{user.companyCode}</td>
                <td className="px-6 py-4">{user.mobile}</td>
                <td className="px-6 py-4">{user.status}</td>
                <td className="px-6 py-4">
                  <button className="font-medium text-blue-600 hover:underline">
                    Pasif Yap
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
