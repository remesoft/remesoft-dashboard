import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import TitleBar from "@/components/TitleBar";
import BookDetails from "@/components/brain-bank/BookDetails";
import Chapter from "@/components/brain-bank/Chapter";
import Groups from "@/components/brain-bank/Group";

const CreateBook: React.FC = () => {
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

  return (
    <div
      className="text-text-primary h-full w-full overflow-hidden"
      ref={containerRef}
    >
      <TitleBar title={pageTitle} breadcrumbs={pageBreadcrumbs} />
      <motion.div
        drag="x"
        ref={contentRef}
        dragElastic={0.1}
        dragConstraints={constraints}
        className="flex w-fit cursor-grab items-start gap-2 p-4 active:cursor-grabbing"
      >
        {/* book details  */}
        <BookDetails />
        <Chapter />
        <Groups />
      </motion.div>
    </div>
  );
};

export default CreateBook;
