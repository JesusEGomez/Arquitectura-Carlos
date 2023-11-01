import { Category } from "../../entities/category.entity";

export const getAllCategoriesDB = async () => {
  const categories = await Category.find();
  return categories;
};
