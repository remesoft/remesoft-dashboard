import { useCreateQuestionMutation } from "../services/questionsApi";

export const useCreateQuestion = () => {
  const [createQuestion, { isLoading, error }] = useCreateQuestionMutation();

  const handleCreate = async (groupId: number) => {
    try {
      const result = await createQuestion({ groupId }).unwrap();
      console.log("✅ Question created:", result);
      return result;
    } catch (err) {
      console.error("❌ Failed to create question:", err);
      throw err;
    }
  };

  return {
    createQuestion: handleCreate,
    isLoading,
    error,
  };
};
