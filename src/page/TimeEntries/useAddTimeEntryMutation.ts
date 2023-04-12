import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxios from "../../hook/useAxios";
import TimeEntry from "../../domain/TimeEntry";

const useAddTimeEntryMutation = () => {
  const axios = useAxios();
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (timeEntry: TimeEntry) => {
      const response = await axios.post("/timeEntries", timeEntry);
      return response.data;
    },
    {
      onSettled: () => queryClient.invalidateQueries(["timeEntries"]),
    }
  );

  return {
    addTimeEntry: mutation.mutateAsync,
    data: mutation.data,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
};

export default useAddTimeEntryMutation;
