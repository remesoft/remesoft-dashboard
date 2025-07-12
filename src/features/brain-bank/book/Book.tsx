// 1. Imports (React, components, hooks, libraries)
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

import Media from "./components/Media";
import Input from "./components/Input";
import Info from "./components/Info";
import { useBookData } from "./hooks/useBookData";
import { useGetBook, useGetBooks, useUpdateBook } from "./hooks";

// 2. Component Definition
const Book: React.FC = () => {
  // 3. Router hooks
  const navigate = useNavigate();
  const { bookId } = useParams();

  // 4. Custom hooks
  const { createBook } = useBookData();
  const { updateBook } = useUpdateBook();
  const { data: book } = useGetBook(Number(bookId));

  // 5. Local state
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [detectChange, setDetectChange] = useState<boolean>(false);

  // 6. Handlers (event or business logic)
  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setDetectChange(true);
  };

  const handleSubmit = async () => {
    if (!name.trim()) return toast.error("Name is required!");

    const formData = new FormData();
    formData.append("name", name);
    if (selectedImage) {
      formData.append("cover", selectedImage);
    }

    try {
      if (bookId) {
        // Update existing book
        await updateBook({ formData, bookId: Number(bookId) }).unwrap();
        toast.success("Book updated successfully!");
      } else {
        // Create new book
        const result = await createBook(formData).unwrap();
        toast.success("Book created successfully!");
        setTimeout(() => navigate(`/brain-bank/books/${result.id}`), 1000);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to save book!");
    }
  };

  // 7. Effects
  useEffect(() => {
    if (book) {
      setName(book.name);
      setPreview(book.image);
    }
  }, [book]);

  // 8. JSX Return
  return (
    <div className="bg-component border-border/70 rounded-lg border">
      <div className="px-1 py-2">
        <Media
          setDetectChange={() => setDetectChange(true)}
          preview={preview}
          onChange={setPreview}
          setSelectedImage={setSelectedImage}
        />
        <Input submitHandler={handleSubmit} changeHandler={nameChangeHandler} name={name} detectChange={detectChange} />
      </div>
      <Info
        createdAt={book?.createdAt || new Date().toISOString()}
        updatedAt={book?.updatedAt || new Date().toISOString()}
        totalChapters={book?.totalChapters?.toString() || "0"}
        totalGroups={book?.totalGroups?.toString() || "0"}
        totalQuestions={book?.totalQuestions?.toString() || "0"}
      />
    </div>
  );
};

// 9. Export
export default Book;
