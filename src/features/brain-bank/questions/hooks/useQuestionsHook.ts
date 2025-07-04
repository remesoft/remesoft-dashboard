import { useGetQuestionQuery } from "../services/questionsApi";

export const useQuestionData = (groupId: number) => {
  const { data, isLoading, error, refetch } = useGetQuestionQuery(groupId);

  return {
    questions: data,
    isLoading,
    error,
    refetch,
  };
};
