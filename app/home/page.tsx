import React from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex min-h-screen text-text-color">
      <aside>
        <Sidebar />
      </aside>
      <main className="flex flex-grow p-7 bg-gray-50">Home</main>
    </div>
  );
};

export default Home;
