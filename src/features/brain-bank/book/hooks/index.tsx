// hooks/bookHooks.ts
import ConfirmationToast from "@/components/ConfirmationToast";
import {
  useGetBookQuery,
  useGetBooksQuery,
  useDeleteBookMutation,
  useCreateBookMutation,
  useUpdateBookMutation,
} from "../services/bookApi";
import { toast } from "react-toastify";

// get single book
export const useGetBook = (bookId: number) => {
  const { data, isLoading, error } = useGetBookQuery(bookId);
  return { data, isLoading, error };
};

// get all books
export const useGetBooks = () => {
  const { data, isLoading, error, refetch } = useGetBooksQuery();
  return { data, isLoading, error, refetch };
};

// create book
export const useCreateBook = () => {
  const [createBook, { data, isLoading, error }] = useCreateBookMutation();
  return {
    createBook,
    data,
    isLoading,
    error,
  };
};

export const useUpdateBook = () => {
  const [updateBook, { data, isLoading, error }] = useUpdateBookMutation();
  return {
    updateBook,
    data,
    isLoading,
    error,
  };
};

// delete single book
export const useDeleteBook = () => {
  const [deleteBook, { isLoading, error }] = useDeleteBookMutation();

  const handleDelete = (bookId: number, onSuccess?: () => void) => {
    const message = "Do you really want to delete this book?";
    const onConfirm = async () => {
      try {
        await deleteBook(bookId);
        if (onSuccess) {
          onSuccess();
        }
      } catch (err) {
        toast.error("Failed to delete the book.");
      }
    };
    toast(<ConfirmationToast message={message} onConfirm={onConfirm} />);
  };

  return { deleteBook: handleDelete, isLoading, error };
};
