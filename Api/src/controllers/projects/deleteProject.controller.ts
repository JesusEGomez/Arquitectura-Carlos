import { Project } from "../../entities/project.entity";

export const deleteProjectDB = async (id: number) => {
  const projectsRepository = Project.getRepository();
  const project = await projectsRepository.findOne({
    where: { id },
    relations: ["photo"],
  });
  if (project) {
    await projectsRepository.remove(project);
  }
  return project;
};
