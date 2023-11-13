import axios from "axios";
import { IProject } from "../models";
import { loadAbort } from "../utilities";
const Url = import.meta.env.VITE_ENDPOINT;

export const getProjects = () => {
  const controller = loadAbort();
  return {
    call: axios.get<IProject>(`${Url}/project`, { signal: controller.signal }),
    controller,
  };
};
