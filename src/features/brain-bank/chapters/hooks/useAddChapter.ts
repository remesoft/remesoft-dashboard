import { useAddChapterMutation } from "../services/chaptersApi";

export const useAddChapter = () => {
  const [addChapterApi, { isLoading, error, data }] = useAddChapterMutation();

  const addChapter = async (bookId: number) => {
    try {
      const result = await addChapterApi({ bookId }).unwrap();
      console.log("✅ Group added:", result);
      return result;
    } catch (err) {
      console.error("❌ Failed to add group:", err);
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
