import { useAddExtraMutation } from "../services/extraApi";

export const useAddExtra = () => {
  const [addExtraApi, { isLoading, error, data }] = useAddExtraMutation();

  const addExtra = async (questionId: number, type: string, content: string) => {
    try {
      const result = await addExtraApi({ questionId, type, content }).unwrap();
      console.log("✅ Extra added:", result);
      return result;
    } catch (err) {
      console.error("❌ Failed to add group:", err);
      throw err;
    }
  };

  return {
    addExtra,
    isLoading,
    error,
    data,
  };
};
