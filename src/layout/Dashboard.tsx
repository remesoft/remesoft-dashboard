import React from "react";
import { Outlet } from "react-router";

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Outlet />
    </div>
  );
};

export default Dashboard;
