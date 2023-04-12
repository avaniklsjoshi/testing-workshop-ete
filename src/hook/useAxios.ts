import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4712/",
  timeout: 1000,
});

const useAxios = () => {
  return instance;
};

export default useAxios;
