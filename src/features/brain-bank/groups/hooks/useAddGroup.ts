import { useAddGroupMutation } from "../services/groupApi";
import { toast } from "react-toastify";

export const useAddGroup = () => {
  const [addGroupApi, { isLoading, error, data }] = useAddGroupMutation();

  const addGroup = async (chapterId: number) => {
    try {
      const result = await addGroupApi({ chapterId }).unwrap();
      toast.success("Group created successful!");
      return result;
    } catch (err) {
      toast.error("Failed to create group.");
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
