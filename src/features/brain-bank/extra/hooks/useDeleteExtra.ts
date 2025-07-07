// src/features/chapters/hooks/useDeleteChapter.ts
import { useDeleteExtraMutation } from "../services/extraApi";
import { toast } from "react-toastify";

export const useDeleteExtra = () => {
  const [deleteExtra, { isLoading, error }] = useDeleteExtraMutation();

  const handleDeleteExtra = async (id: number, onSuccess?: () => void) => {
    try {
      await deleteExtra(id).unwrap();
      toast.success("Extra deleted successfully!");
      if (onSuccess) onSuccess();
    } catch (err) {
      toast.error("Failed to delete extra.");
    }
  };

  return {
    deleteExtra: handleDeleteExtra,
    isLoading,
    error,
  };
};
