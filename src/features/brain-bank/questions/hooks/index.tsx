import { toast } from "react-toastify";
import { useDeleteQuestionMutation } from "../services/questionsApi";
import ConfirmationToast from "@/components/ConfirmationToast";

/*--------------------------------------------
          DELETE THE QUESTION
-------------------------------------------*/
export const useDeleteQuestion = () => {
  const [deleteQuestion, { isLoading, error }] = useDeleteQuestionMutation();

  const handleDelete = (questionId: number) => {
    const message = "Do you really want to delete this question?";
    const toastId = `delete-confirm-${questionId}`;

    const onConfirm = async () => {
      try {
        await deleteQuestion(questionId);
        toast.dismiss(toastId);
        toast.success("Question delete successful.");
      } catch {
        toast.error("Failed to delete question.");
      }
    };

    toast(<ConfirmationToast message={message} onConfirm={onConfirm} />, { toastId });
  };

  return {
    deleteQuestion: handleDelete,
    isLoading,
    error,
  };
};
