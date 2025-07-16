import { useUpdateGroupMutation } from "../services/groupApi";

export const useUpdateGroup = () => {
  const [updateGroup, { isLoading, error, data }] = useUpdateGroupMutation();

  return {
    updateGroup,
    isLoading,
    error,
    data,
  };
};
