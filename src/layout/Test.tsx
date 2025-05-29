import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router";

const Test: React.FC = () => {
  return (
    <main className="flex h-screen w-screen overflow-x-hidden">
      <Sidebar />
      <div className="flex w-full flex-col overflow-hidden">
        <Header />
        <div className="flex-grow overflow-hidden bg-slate-200">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Test;
