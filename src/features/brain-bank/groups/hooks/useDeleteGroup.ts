import { useDeleteGroupMutation } from "../services/groupApi";

export const useDeleteGroup = () => {
  const [deleteGroupApi, { isLoading, error }] = useDeleteGroupMutation();

  const deleteGroup = async (groupId: number) => {
    try {
      const result = await deleteGroupApi(groupId).unwrap();
      console.log("✅ Group deleted successfully");
      return result;
    } catch (err) {
      console.error("❌ Failed to delete group:", err);
      throw err;
    }
  };

  return {
    deleteGroup,
    isLoading,
    error,
  };
};
