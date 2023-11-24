import { IAdaptedProject, IProject } from "../models";

export const projectAdapter = (project: IProject[]) => {
  const adaptedProjects: IAdaptedProject[] = [];
  console.log("adaptador", project);
  project.forEach((p) => {
    adaptedProjects.push({
      id: p.id,
      title: p.title,
      description: p.description,
      photos: p.photo?.map((p) => p.url),
    });
  });
  return adaptedProjects;
};
