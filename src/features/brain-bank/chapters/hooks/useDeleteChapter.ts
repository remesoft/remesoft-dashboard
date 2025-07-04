// src/features/chapters/hooks/useDeleteChapter.ts
import { useDeleteChapterMutation } from "../services/chaptersApi";
import { toast } from "react-toastify";
import { useChapterData } from "./useChaptersHook";

export const useDeleteChapter = () => {
  const [deleteChapter, { isLoading, error }] = useDeleteChapterMutation();

  const handleDeleteChapter = async (id: number, onSuccess?: () => void) => {
    try {
      await deleteChapter(id).unwrap();
      toast.success("Chapter deleted successfully!");
      if (onSuccess) onSuccess();
    } catch (err) {
      toast.error("Failed to delete chapter.");
    }
  };

  return {
    deleteChapter: handleDeleteChapter,
    isLoading,
    error,
  };
};
