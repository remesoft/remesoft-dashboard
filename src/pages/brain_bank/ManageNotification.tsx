import PageInfo from "@/components/PageInfo";
import Notification from "@/features/brain-bank/notifications/Notificatons";
import React from "react";

const ManageNotification: React.FC = () => {
  const pageTitle = "Manage Notification";
  const pageBreadcrumbs = [
    { label: "Remesoft", link: "/" },
    { label: "Brain Bank", link: "/brain-bank" },
    { label: "Notifications", link: "/create" },
  ];
  return (
    <div className="h-full w-full overflow-hidden">
      <PageInfo title={pageTitle} breadcrumbs={pageBreadcrumbs} />
      <div className="p-4">
        <Notification />
      </div>
    </div>
  );
};

export default ManageNotification;
