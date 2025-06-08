import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/brain-bank/Book.tsx
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import TitleBar from "@/components/TitleBar";
import BookDetails from "@/components/brain-bank/BookDetails";
import Chapter from "@/components/brain-bank/Chapter";
import Groups from "@/components/brain-bank/Group";
import { fetchBook } from "@/features/brain-back/book-slice";
import Information from "@/components/brain-bank/Information";
const BookPage = () => {
    // -------------------------------
    // Params & Redux Setup
    // -------------------------------
    const { id } = useParams();
    const dispatch = useDispatch();
    const { book, loading, error } = useSelector((state) => state.book);
    // -------------------------------
    // Fetch Book Data
    // -------------------------------
    useEffect(() => {
        if (id) {
            dispatch(fetchBook(Number(id)));
        }
    }, [id, dispatch]);
    // -------------------------------
    // Drag Constraints Logic
    // -------------------------------
    const containerRef = useRef(null);
    const contentRef = useRef(null);
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
    // -------------------------------
    // Render UI
    // -------------------------------
    const breadcrumbs = [
        { label: "Remesoft", link: "/" },
        { label: "Brain Bank", link: "/brain-bank" },
        { label: "Create", link: "/create" },
    ];
    return (_jsxs("div", { className: "text-text-primary h-full w-full overflow-hidden", ref: containerRef, children: [_jsx(TitleBar, { title: "Dashboard", breadcrumbs: breadcrumbs }), loading && _jsx("p", { className: "px-4 py-2", children: "Loading book..." }), error && _jsxs("p", { className: "px-4 py-2 text-red-500", children: ["Error: ", error] }), !loading && !error && (_jsxs(motion.div, { drag: "x", dragElastic: 0.1, ref: contentRef, dragConstraints: constraints, className: "flex w-fit cursor-grab items-start gap-2 p-4 active:cursor-grabbing", children: [_jsx(BookDetails, {}), _jsx(Chapter, {}), _jsx(Groups, {}), _jsx(Information, {})] }))] }));
};
export default BookPage;
