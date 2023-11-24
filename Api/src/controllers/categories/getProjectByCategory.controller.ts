import { Category } from "../../entities/category.entity";

export const getProjectByCategoryDB = async (category: string) => {
  const categoryRepository = Category.getRepository();
  const projects = await categoryRepository.find({
    where: { category },
    relations: ["project", "project.photo"],
  });
  return projects;
};
