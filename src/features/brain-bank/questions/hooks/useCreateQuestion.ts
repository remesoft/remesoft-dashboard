// hooks/useCreateQuestion.ts
import { useParams } from "react-router-dom";
import { useCreateQuestionMutation } from "../services/questionsApi";

export const useCreateQuestion = () => {
  const { groupId } = useParams();
  const [createQuestionApi, { isLoading, error }] = useCreateQuestionMutation();

  const createQuestion = async () => {
    if (!groupId) {
      console.error("❌ Group ID not found in URL");
      return;
    }

    try {
      const result = await createQuestionApi({ groupId: Number(groupId) }).unwrap();
      console.log("✅ Question created:", result);
      return result;
    } catch (err) {
      console.error("❌ Failed to create question:", err);
      throw err;
    }
  };

  return {
    createQuestion,
    isLoading,
    error,
  };
};
