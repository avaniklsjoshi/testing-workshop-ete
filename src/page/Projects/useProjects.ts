import useAxiosQuery from "../../hook/useAxiosQuery";
import Project from "../../domain/Project";

const useProjects = () => {
  return useAxiosQuery<Project[]>(["projects"], "/projects");
};

export default useProjects;
