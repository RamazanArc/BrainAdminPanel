import React from "react";
import Sidebar from "../components/Sidebar";

const Clients = () => {
  return (
    <div className="flex min-h-screen text-text-color">
      <aside>
        <Sidebar />
      </aside>
      <main className="flex flex-grow p-7 bg-body-bg-color">Client</main>
    </div>
  );
};

export default Clients;
