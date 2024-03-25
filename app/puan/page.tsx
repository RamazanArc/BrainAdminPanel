import React from "react";
import Sidebar from "../components/Sidebar";

const Puan = () => {
  return (
    <div className="flex min-h-screen text-text-color">
      <aside>
        <Sidebar />
      </aside>
      <main className="flex flex-grow p-7 bg-gray-50">Puan İşlemleri</main>
    </div>
  );
};

export default Puan;
