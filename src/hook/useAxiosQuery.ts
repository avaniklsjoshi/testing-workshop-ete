import useAxios from "./useAxios";
import { QueryKey, useQuery } from "@tanstack/react-query";

const useAxiosQuery = <Data>(queryKey: QueryKey, url: string) => {
  const axios = useAxios();
  const query = useQuery<Data>([queryKey], async () => {
    const response = await axios.get(url);

    return response.data;
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isSuccess: query.isSuccess,
    isError: query.isError,
    error: query.error,
  };
};

export default useAxiosQuery;
