import { useGetQuestionQuery } from "../services/questionsApi";

export const useQuestionData = (groupId: number) => {
  const { data, isLoading, error } = useGetQuestionQuery(groupId);

  return {
    questions: data,
    isLoading,
    error,
  };
};
