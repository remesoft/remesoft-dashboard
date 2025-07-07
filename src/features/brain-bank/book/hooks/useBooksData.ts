import { useGetBooksQuery } from "../services/bookApi";

export const useBooksData = () => {
  const { data, isLoading, error, refetch } = useGetBooksQuery();

  return {
    books: data || [],
    isLoading,
    error,
    refetch,
  };
};
