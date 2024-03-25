import React from "react";
import Sidebar from "../components/Sidebar";

const Yarisma = () => {
  return (
    <div className="flex min-h-screen text-text-color">
      <aside>
        <Sidebar />
      </aside>
      <main className="flex flex-grow p-7 bg-gray-50">Yarisma</main>
    </div>
  );
};

export default Yarisma;
