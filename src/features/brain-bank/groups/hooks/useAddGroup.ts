import { useAddGroupMutation } from "../services/groupApi";

export const useAddGroup = () => {
  const [addGroupApi, { isLoading, error, data }] = useAddGroupMutation();

  const addGroup = async (chapterId: number) => {
    try {
      const result = await addGroupApi({ chapterId }).unwrap();
      console.log("✅ Group added:", result);
      return result;
    } catch (err) {
      console.error("❌ Failed to add group:", err);
      throw err;
    }
  };

  return {
    addGroup,
    isLoading,
    error,
    data,
  };
};
