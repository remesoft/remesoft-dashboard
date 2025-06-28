import { useGetGroupsQuery } from "../services/GroupsApi";

export const useGroupData = (chapterId: number) => {
  const { data, isLoading, error } = useGetGroupsQuery(chapterId);
  return {
    groups: data,
    isLoading,
    error,
  };
};
