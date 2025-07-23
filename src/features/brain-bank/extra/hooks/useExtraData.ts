import { useGetExtraQuery } from "../services";

export const useExtraData = (chapterId: number) => {
  const { data, isLoading, error } = useGetExtraQuery(chapterId);
  return {
    extra: data,
    isLoading,
    error,
  };
};
