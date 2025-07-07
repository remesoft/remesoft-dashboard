import { useGetExtraQuery } from "../services/extraApi";

export const useExtraData = (chapterId: number) => {
  const { data, isLoading, error } = useGetExtraQuery(chapterId);
  return {
    extra: data,
    isLoading,
    error,
  };
};
