import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useBookData } from "./hooks/useBookData";
import Media from "./components/Media";
import Input from "./components/Input";
import Info from "./components/Info";
import { useNavigate } from "react-router";

interface BookProps {
  bookName?: string;
  bookPreview?: string;
}

const Book: React.FC<BookProps> = ({ bookName, bookPreview }) => {
  const navigate = useNavigate();
  const { createBook, isLoading, error, createdBook } = useBookData();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>(bookPreview || "");
  const [name, setName] = useState<string>(bookName || "");

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = async () => {
    if (!name.trim()) return toast.error("Name is required!");
    if (!selectedImage) return toast.error("Image is required!");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("cover", selectedImage);

    try {
      const result = await createBook(formData).unwrap();
      toast.success("Book created successfully!");
      setTimeout(() => navigate("/brain-bank/books/" + result.id), 1000);
    } catch (error) {
      console.log(error);
      toast.error("Failed to create book!");
    }
  };

  return (
    <div className="bg-component border-border/70 rounded-lg border">
      <div className="px-1 py-2">
        <Media preview={preview} onChange={setPreview} setSelectedImage={setSelectedImage} />
        <Input submitHandler={handleSubmit} changeHandler={nameChangeHandler} name={name} />
      </div>
      <Info />

      {/* Required to show toasts */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        toastClassName="bg-green-600 text-white rounded-xl shadow-lg"
        className="text-sm font-medium"
        progressClassName="bg-white"
      />
    </div>
  );
};

export default Book;
