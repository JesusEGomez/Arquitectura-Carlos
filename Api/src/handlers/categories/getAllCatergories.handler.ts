import { Request, Response } from "express";
import { getAllCategoriesDB } from "../../controllers/categories/getAllCategories.controller";

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await getAllCategoriesDB();
    return res.status(200).json(categories);
  } catch (error) {
    if (error instanceof Error) res.status(400).json(error.message);
  }
};
