import { Project } from "../../entities/project.entity";

export const getAllProjectsDB = async () => {
  const projectsRepository = Project.getRepository();
  const projects = await projectsRepository.find({
    relations: ["photo", "category"],
  });
  return projects;
};
