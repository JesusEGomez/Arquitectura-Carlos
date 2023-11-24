import axios from "axios";
import { loadAbort } from "../utilities";
import { ICategory } from "../models";
const Url = import.meta.env.VITE_ENDPOINT;

export const getCategories = () => {
  const controller = loadAbort();
  return {
    call: axios.get<ICategory>(`${Url}/category`, {
      signal: controller.signal,
    }),
    controller,
  };
};
