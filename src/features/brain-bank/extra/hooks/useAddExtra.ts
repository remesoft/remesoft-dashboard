import { toast } from "react-toastify";
import { useAddExtraMutation } from "../services";

export const useAddExtra = () => {
  const [createExtra, { isLoading, error, data }] = useAddExtraMutation();

  const handleCreate = async (questionId: number, type: string | undefined, content: string | undefined) => {
    try {
      console.log(type, content);
      const result = await createExtra({ questionId, type, content }).unwrap();
      toast.success("Extra information added successfully.");
      return result;
    } catch (err) {
      toast.error("Failed to add extra information.");
      throw err;
    }
  };

  return {
    addExtra: handleCreate,
    isLoading,
    error,
    data,
  };
};
