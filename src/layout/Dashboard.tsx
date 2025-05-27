import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";

const MainContent = () => (
  <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
    <div className="space-y-4">
      {Array.from({ length: 50 }).map((_, i) => (
        <div key={i} className="rounded bg-white p-4 shadow">
          Content Block #{i + 1}
        </div>
      ))}
    </div>
  </main>
);

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <div className="space-y-4">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
