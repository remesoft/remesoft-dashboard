import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const Dashboard: React.FC = () => {
  return (
    <main data-theme="pastel">
      <Header />
    </main>
  );
};

export default Dashboard;
