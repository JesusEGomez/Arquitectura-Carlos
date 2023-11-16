import { Category } from "../../entities/category.entity";
import { Project } from "./../../entities/project.entity";

export const getProjectByCategoryDB = async (category: string) => {
  const categoryRepository = Category.getRepository();
  const projects = await categoryRepository.find({
    where: { category },
    relations: {
      project: true,
    },
  });
  return projects;
};
