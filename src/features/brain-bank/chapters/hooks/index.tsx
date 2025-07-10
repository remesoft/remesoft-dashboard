import { toast } from "react-toastify";
import { useAddChapterMutation, useDeleteChapterMutation, useGetChaptersQuery } from "../services/chaptersApi";
import ConfirmationToast from "@/components/ConfirmationToast";

export const useGetChapters = (bookId: number) => {
  const { data, isLoading, error, refetch } = useGetChaptersQuery(bookId);

  return {
    chapters: data,
    isLoading,
    error,
    refetch,
  };
};

export const useAddChapter = () => {
  const [addChapterApi, { isLoading, error, data }] = useAddChapterMutation();

  const addChapter = async (bookId: number) => {
    try {
      const result = await addChapterApi({ bookId }).unwrap();
      toast.success("Chapter created successful.");
      return result;
    } catch (err) {
      console.error("❌ Failed to add group:", err);
      toast.success("Failed to create new chapter.");
      throw err;
    }
  };

  return {
    addChapter,
    isLoading,
    error,
    data,
  };
};

export const useDeleteChapter = () => {
  const [deleteChapter, { isLoading, error }] = useDeleteChapterMutation();

  const handleDeleteChapter = async (id: number, onSuccess?: () => void) => {
    const message = "Do you really want to delete this chapter?";
    const onConfirm = async () => {
      try {
        await deleteChapter(id).unwrap();
        toast.success("Chapter deleted successfully!");
        if (onSuccess) onSuccess();
      } catch (err) {
        console.error("❌ Failed to delete the chapter:", err);
        toast.error("Failed to delete the chapter.");
        throw err;
      }
    };
    toast(<ConfirmationToast message={message} onConfirm={onConfirm} />);
  };

  return {
    deleteChapter: handleDeleteChapter,
    isLoading,
    error,
  };
};
