import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageInfo from "@/components/PageInfo";
import Book from "@/features/brain-bank/book";
import { useParams } from "react-router";
import { useGetBookQuery } from "@/features/brain-bank/book/services/bookApi";
import Chapters from "@/features/brain-bank/chapters/Chapters";
import Questions from "@/features/brain-bank/questions";

const ManageBook: React.FC = () => {
  const pageTitle = "Dashboard";
  const pageBreadcrumbs = [
    { label: "Remesoft", link: "/" },
    { label: "Brain Bank", link: "/brain-bank" },
    { label: "Create", link: "/create" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current && contentRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = contentRef.current.scrollWidth;
        const maxDrag = Math.min(0, containerWidth - contentWidth);
        setConstraints({ left: maxDrag, right: 0 });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  // get book information
  const { id } = useParams();
  const bookId = Number(id);
  const { data: book, isLoading, isError } = useGetBookQuery(bookId);

  console.log(book);

  return (
    <div className="h-full w-full overflow-hidden" ref={containerRef}>
      <PageInfo title={pageTitle} breadcrumbs={pageBreadcrumbs} />
      {isLoading ? (
        <p className="p-4 text-gray-500">Loading book...</p>
      ) : isError || !book ? (
        <p className="p-4 text-red-500">Failed to load book.</p>
      ) : (
        <motion.div
          drag="x"
          ref={contentRef}
          dragElastic={0.1}
          dragConstraints={constraints}
          className="flex w-fit cursor-grab items-start gap-2 p-4 active:cursor-grabbing"
        >
          <Book bookName={book.name} bookPreview={book.image} />
          <Chapters />
          <Questions />
        </motion.div>
      )}
    </div>
  );
};

export default ManageBook;
