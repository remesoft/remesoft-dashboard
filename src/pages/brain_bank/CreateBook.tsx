import PageInfo from "@/components/PageInfo";
import Book from "@/features/brain-bank/book";
import React from "react";

const CreateBook: React.FC = () => {
  const pageTitle = "Create Book";
  const pageBreadcrumbs = [
    { label: "Remesoft", link: "/" },
    { label: "Brain Bank", link: "/brain-bank" },
    { label: "Create Book", link: "/create-book" },
  ];

  return (
    <div className="flex h-full flex-col">
      <PageInfo title={pageTitle} breadcrumbs={pageBreadcrumbs} />
      <div className="flex flex-grow items-center justify-center">
        <Book />
      </div>
    </div>
  );
};

export default CreateBook;
