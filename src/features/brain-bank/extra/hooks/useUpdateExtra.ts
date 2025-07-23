import { useUpdateExtraMutation } from "../services/extraApi";
import { toast } from "react-toastify";
import { ExtraProps } from "../types";

export const useUpdateExtra = () => {
  const [updateExtra, { isLoading, error, data }] = useUpdateExtraMutation();

  const handleUpdate = async ({ questionId, type, content }: ExtraProps) => {
    try {
      const result = await updateExtra({ questionId, type, content }).unwrap();
      toast.success("Extra information updated successfully.");
      return result;
    } catch (err) {
      toast.error("Failed to add extra information.");
      throw err;
    }
  };

  return {
    updateExtra: handleUpdate,
    isLoading,
    error,
    data,
  };
};
