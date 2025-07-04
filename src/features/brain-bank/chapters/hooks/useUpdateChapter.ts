import { useUpdateChapterMutation } from "../services/chaptersApi";

export const useUpdateChapter = () => {
  const [updateChapter, { isLoading, error, data }] = useUpdateChapterMutation();

  return {
    updateChapter,
    isLoading,
    error,
    data,
  };
};
