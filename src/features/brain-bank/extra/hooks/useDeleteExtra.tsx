// src/features/chapters/hooks/useDeleteChapter.ts
import { useDeleteExtraMutation } from "../services";
import ConfirmationToast from "@/components/ConfirmationToast";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

export const useDeleteExtra = () => {
  const { bookId, groupId } = useParams();
  const [deleteExtra, { isLoading, error }] = useDeleteExtraMutation();
  const navigate = useNavigate();

  const handleDeleteExtra = (id: number, onSuccess?: () => void) => {
    const toastId = `delete-confirm-${id}`;
    const message = "Do you really want to delete this extra?";
    const onConfirm = async () => {
      try {
        await deleteExtra(id).unwrap();
        toast.success("Extra deleted successfully!");
        if (onSuccess) onSuccess();
        navigate(`/brain-bank/books/${bookId}/groups/${groupId}`);
      } catch (err) {
        toast.error("Failed to delete extra.");
      }
    };
    toast(<ConfirmationToast message={message} onConfirm={onConfirm} onCancel={() => toast.dismiss(toastId)} />, {
      toastId,
    });
  };

  return {
    deleteExtra: handleDeleteExtra,
    isLoading,
    error,
  };
};
