// hooks/useBookData.ts
import { useCreateBookMutation } from "../services/bookApi"; // adjust the path

export const useBookData = () => {
  const [createBook, { data, isLoading, error }] = useCreateBookMutation();

  return {
    createBook, // mutation trigger
    createdBook: data, // result data
    isLoading,
    error,
  };
};
