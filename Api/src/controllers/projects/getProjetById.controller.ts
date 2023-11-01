import { Project } from "../../entities/project.entity";

export const getProjectByIdDB = async (id: number) => {
  const projectsRepository = Project.getRepository();
  const projects = await projectsRepository.find({
    where: { id },
    relations: ["photo", "category"],
  });
  return projects;
};
