import useAxiosQuery from "../../hook/useAxiosQuery";
import TimeEntry from "../../domain/TimeEntry";

const useTimeEntries = () => {
  return useAxiosQuery<TimeEntry[]>(["timeEntries"], "/timeEntries");
};

export default useTimeEntries;
