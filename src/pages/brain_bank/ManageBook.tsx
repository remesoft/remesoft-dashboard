import React, { useRef, useEffect, useState } from "react";
import Book from "@/features/brain-bank/book";
import { useParams } from "react-router";
import Chapters from "@/features/brain-bank/chapters/Chapters";
import Questions from "@/features/brain-bank/questions";
import Extra from "@/features/brain-bank/extra";
import PageInfo from "@/components/PageInfo";
import { motion } from "framer-motion";

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
    </div>
  );
};

export default ManageBook;
