import { Request, Response } from "express";
import { createCategoryDB } from "../../controllers/categories/createCategorie.controller";

export const createCategory = (req: Request, res: Response) => {
  try {
    const { category } = req.body;
    createCategoryDB(category);
    return res.json(category);
  } catch (error) {
    return res.status(400).json(error);
  }
};
