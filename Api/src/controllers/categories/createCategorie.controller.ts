import { Category } from "../../entities/category.entity";

export const createCategoryDB = async (name: string) => {
  const category = new Category();
  category.category = name;
  const response = await category.save();

  return response;
};
