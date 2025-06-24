import PageInfo from "@/components/PageInfo";
import React from "react";

const Home: React.FC = () => {
  // page title and breadcrumbs
  const pageTitle = "Dashboard";
  const pageBreadcrumbs = [
    { label: "Remesoft", link: "/" },
    { label: "Dashboard", link: "/dashboard" },
  ];

  // Override default props with props passed to the component

  return (
    <React.Fragment>
      <PageInfo title={pageTitle} breadcrumbs={pageBreadcrumbs} />
    </React.Fragment>
  );
};

export default Home;
