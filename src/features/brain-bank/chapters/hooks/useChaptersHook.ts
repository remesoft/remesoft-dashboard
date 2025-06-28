import { useGetChaptersQuery } from "../services/chaptersApi";

export const useChapterData = (bookId: number) => {
  const { data, isLoading, error } = useGetChaptersQuery(bookId);

  return {
    chapters: data,
    isLoading,
    error,
  };
};
