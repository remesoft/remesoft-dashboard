import { useGetGroupsQuery } from "../services/chaptersApi";

export const useGroupData = (chapterId: number) => {
  const { data, isLoading, error, refetch } = useGetGroupsQuery(chapterId);
  return {
    groups: data,
    isLoading,
    error,
    refetch,
  };
};
