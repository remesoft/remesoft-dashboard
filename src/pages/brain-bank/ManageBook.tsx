<<<<<<< HEAD:src/pages/brain-bank/ManageBook.tsx
<<<<<<<< HEAD:src/pages/brain-bank/ManageBook.tsx
=======
>>>>>>> development:src/pages/brain_bank/ManageBook.tsx
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageInfo from "@/components/PageInfo";
import Book from "@/features/brain-bank/book";
import { useLocation, useParams } from "react-router";
import { useGetBookQuery } from "@/features/brain-bank/book/services/bookApi";
import Chapters from "@/features/brain-bank/chapters/Chapters";
import Questions from "@/features/brain-bank/questions";
import Extra from "@/features/brain-bank/extra";

const ManageBook: React.FC = () => {
  const pageTitle = "Dashboard";
<<<<<<< HEAD:src/pages/brain-bank/ManageBook.tsx
========
import PageInfo from "@/components/PageInfo";
import Book from "@/features/brain-bank/book";
import React from "react";

const CreateBook: React.FC = () => {
  const pageTitle = "Create Book";
>>>>>>>> development:src/pages/brain_bank/CreateBook.tsx
  const pageBreadcrumbs = [
    { label: "Remesoft", link: "/" },
    { label: "Brain Bank", link: "/brain-bank" },
    { label: "Create Book", link: "/create-book" },
  ];

<<<<<<<< HEAD:src/pages/brain-bank/ManageBook.tsx
=======
  const pageBreadcrumbs = [
    { label: "Remesoft", link: "/" },
    { label: "Brain Bank", link: "/brain-bank" },
    { label: "Create", link: "/create" },
  ];

>>>>>>> development:src/pages/brain_bank/ManageBook.tsx
  const location = useLocation();
  const isExtraRoute = location.pathname.endsWith("/extra");

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [isDraggable, setIsDraggable] = useState(false);

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current && contentRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = contentRef.current.scrollWidth;
        const maxDrag = Math.min(0, containerWidth - contentWidth);

        setConstraints({ left: maxDrag, right: 0 });
        setIsDraggable(contentWidth > containerWidth);
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  // get book information
  const { bookId, groupId, questionId } = useParams();

  return (
    <div className="h-full w-full overflow-hidden" ref={containerRef}>
      <PageInfo title={pageTitle} breadcrumbs={pageBreadcrumbs} />
      <motion.div
        ref={contentRef}
        {...(isDraggable && {
          drag: "x",
          dragElastic: 0.1,
          dragConstraints: constraints,
        })}
        className={`flex w-fit items-start gap-2 p-4 ${isDraggable ? "cursor-grab active:cursor-grabbing" : ""}`}
      >
        <Book />
        <Chapters />
        {groupId && <Questions />}
        {questionId && <Extra />}
      </motion.div>
<<<<<<< HEAD:src/pages/brain-bank/ManageBook.tsx
========
  return (
    <div className="flex h-full flex-col">
      <PageInfo title={pageTitle} breadcrumbs={pageBreadcrumbs} />
      <div className="flex flex-grow items-center justify-center">
        <Book />
      </div>
>>>>>>>> development:src/pages/brain_bank/CreateBook.tsx
=======
>>>>>>> development:src/pages/brain_bank/ManageBook.tsx
    </div>
  );
};

export default ManageBook;
