import axios from "axios";
import { IProject, InewProject } from "../models";
import { loadAbort } from "../utilities";
const Url = import.meta.env.VITE_ENDPOINT;

export const getProjects = () => {
  const controller = loadAbort();
  return {
    call: axios.get<IProject>(`${Url}/project`, { signal: controller.signal }),
    controller,
  };
};
export const getProjectById = (id: string | undefined) => {
  console.log("proyecto", id);
  const controller = loadAbort();
  return {
    call: axios.get<IProject>(`${Url}/project/${id}`, {
      signal: controller.signal,
    }),
    controller,
  };
};
export const DeleteProjectById = async (id: string | undefined) => {
  console.log("proyecto", id);
  const response = await axios.delete<IProject>(`${Url}/project/${id}`);

  return response;
};
export const getProjectByCategory = (category: string | undefined) => {
  console.log("proyecto", category);
  const controller = loadAbort();
  return {
    call: axios.get<IProject>(`${Url}/category/${category}`, {
      signal: controller.signal,
    }),
    controller,
  };
};
export const createProject = async (
  photo: object[],
  title: string,
  description: string,
  category: number
) => {
  const project: InewProject = {
    title,
    description,
    category,
    photo,
  };
  const response = await axios.post(`${Url}/project`, project);
  return response;
};
