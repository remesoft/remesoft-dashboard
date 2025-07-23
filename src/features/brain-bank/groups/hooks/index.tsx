import ConfirmationToast from "@/components/ConfirmationToast";
import { useDeleteGroupMutation, useUpdateGroupMutation } from "../services/groupApi";
import { useNavigate, useParams } from "react-router";
import { useAddGroupMutation } from "../services/groupApi";
import { toast } from "react-toastify";

/*-----------------------------------------
        ADD NEW GROUP
----------------------------------------*/
export const useAddGroup = () => {
  const [addGroupApi, { isLoading, error, data }] = useAddGroupMutation();

  const addGroup = async (chapterId: number) => {
    try {
      const result = await addGroupApi({ chapterId }).unwrap();
      toast.success("Group created successful!");
      return result;
    } catch (err) {
      toast.error("Failed to create group.");
      console.error("Failed to add group:", err);
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

/*-----------------------------------------
        DELETE THE GROUP
----------------------------------------*/
export const useDeleteGroup = () => {
  const { bookId } = useParams();
  const [deleteGroupApi, { isLoading, error }] = useDeleteGroupMutation();
  const navigate = useNavigate();

  const deleteGroup = (groupId: number, onSuccess?: () => void) => {
    const toastId = `delete-group-${groupId}`;
    const message = "Are you sure you want to delete this group?";

    const onConfirm = async () => {
      try {
        await deleteGroupApi(groupId).unwrap();
        toast.success("Group deleted successfully!");
        if (onSuccess) onSuccess();
        navigate(`/brain-bank/books/${bookId}`);
      } catch (err) {
        console.error("Failed to delete group:", err);
        toast.error("Failed to delete group.");
      }
    };

    toast(<ConfirmationToast message={message} onConfirm={onConfirm} onCancel={() => toast.dismiss(toastId)} />, {
      toastId,
    });
  };

  return {
    deleteGroup,
    isLoading,
    error,
  };
};

/*-----------------------------------------
        UPDATE THE GROUP
----------------------------------------*/
export const useUpdateGroup = () => {
  const [updateGroup, { isLoading, error, data }] = useUpdateGroupMutation();

  const handleUpdate = async (id: number, name: string) => {
    try {
      if (!id) throw new Error("Group id is required!");
      if (!name) throw new Error("Group name is required!");

      await updateGroup({ id, name }).unwrap();
      toast.success("Group name updated!");
    } catch (err: any) {
      console.log(err);
      const message = err?.data?.message || err?.message || "Failed to update group name.";
      toast.error(message);
    }
  };

  return {
    updateGroup: handleUpdate,
    isLoading,
    error,
    data,
  };
};
