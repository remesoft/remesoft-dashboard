import { toast } from "react-toastify";
import { chaptersApi } from "../services/chaptersApi";
import ConfirmationToast from "@/components/ConfirmationToast";

const { useAddChapterMutation, useDeleteChapterMutation, useUpdateChapterMutation } = chaptersApi;

/*--------------------------------------------
          CREATE NEW CHAPTER
-------------------------------------------*/
export const useAddChapter = () => {
  const [addChapterApi, { isLoading, error, data }] = useAddChapterMutation();

  const addChapter = async (bookId: number) => {
    try {
      const result = await addChapterApi({ bookId }).unwrap();
      toast.success("Chapter created successfully.");
      return result;
    } catch (err) {
      console.error("Failed to add chapter:", err);
      toast.error("Failed to create new chapter.");
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

/*--------------------------------------------
          CREATE NEW CHAPTER
-------------------------------------------*/
export const useDeleteChapter = () => {
  const [deleteChapterApi, { isLoading, error }] = useDeleteChapterMutation();

  const handleDeleteChapter = async (chapterId: number, bookId: number, onSuccess?: () => void) => {
    const message = "Do you really want to delete this chapter?";

    const onConfirm = async () => {
      try {
        await deleteChapterApi({ chapterId, bookId }).unwrap();
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

export const useUpdateChapter = () => {
  const [updateChapter, { isLoading, error, data }] = useUpdateChapterMutation();

  return {
    updateChapter,
    isLoading,
    error,
    data,
  };
};
