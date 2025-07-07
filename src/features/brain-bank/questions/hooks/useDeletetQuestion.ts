import { useDeleteQuestionMutation } from "../services/questionsApi";
import { toast } from "react-toastify";

// Accept the questionId from outside instead of calling useQuestionData inside
export const useDeleteQuestion = (id: number) => {
  const [deleteQuestion, { isLoading, error }] = useDeleteQuestionMutation();

  const handleDeleteQuestion = async (onSuccess?: () => void) => {
    try {
      await deleteQuestion(id).unwrap();
      toast.success("Chapter deleted successfully!");
      if (onSuccess) onSuccess();
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete question.");
    }
  };

  return {
    deleteQuestion: handleDeleteQuestion,
    isLoading,
    error,
  };
};
