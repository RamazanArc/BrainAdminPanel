"use client";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Brain Smart",
      title: "Arena Filtre",
      module: "Arena",
    },
    {
      id: 2,
      name: "Brain Smart",
      title: "Teklif Filtresi",
      module: "Teklif",
    },
  ]);

  return (
    <div className=" flex min-h-screen text-text-color">
      <Sidebar />

      <div className="relative overflow-x-auto w-full">
        <h1 className="font-bold text-xl mt-5 mb-5 ml-5">Ürün Filtreleme</h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500  mt-10">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Program Adı
              </th>
              <th scope="col" className="px-6 py-3">
                Filtre Başlığı
              </th>
              <th scope="col" className="px-6 py-3">
                Modül
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="odd:bg-white even:bg-gray-100">
                <td className="px-6 py-4">{product.id}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {product.name}
                </th>
                <td className="px-6 py-4">{product.title}</td>
                <td className="px-6 py-4">{product.module}</td>
                <td className="px-6 py-4">
                  <button className="font-medium text-blue-600 hover:underline">
                    Güncelle
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
