import { useGetGroupsQuery } from "../services/groupApi";

export const useGroupData = (chapterId: number) => {
  const { data, isLoading, error, refetch } = useGetGroupsQuery(chapterId);
  return {
    group: data,
    isLoading,
    error,
    refetch,
  };
};
