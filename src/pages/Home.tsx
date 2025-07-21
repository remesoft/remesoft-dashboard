import PageInfo from "@/components/PageInfo";
import React from "react";

const Home: React.FC = () => {
  const pageTitle = "Dashboard";
  const pageBreadcrumbs = [
    { label: "Remesoft", link: "/" },
    { label: "Dashboard", link: "/dashboard" },
  ];

  return (
    <React.Fragment>
      <PageInfo title={pageTitle} breadcrumbs={pageBreadcrumbs} />
    </React.Fragment>
  );
};

export default Home;
