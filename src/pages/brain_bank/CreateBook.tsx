import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageInfo from "@/components/PageInfo";

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
    <div className="h-full w-full overflow-hidden" ref={containerRef}>
      <PageInfo title={pageTitle} breadcrumbs={pageBreadcrumbs} />
      <motion.div
        drag="x"
        ref={contentRef}
        dragElastic={0.1}
        dragConstraints={constraints}
        className="flex w-fit cursor-grab gap-2 p-4 active:cursor-grabbing"
      >
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="flex h-40 w-40 shrink-0 items-center justify-center bg-red-300">
            box
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CreateBook;
