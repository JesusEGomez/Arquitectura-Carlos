import { IAdaptedProject, IProject } from "../models";

export const oneProjectAdapter = (project: IProject): IAdaptedProject => {
  return {
    title: project.title,
    description: project.description,
    photos: project.photo?.map((p) => p.url),
    category: project.category?.category,
  };
};
