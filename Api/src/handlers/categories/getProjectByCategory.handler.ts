import { Response, Request } from "express";
import { getProjectByCategoryDB } from "../../controllers/categories/getProjectByCategory.controller";

export const getProjectByCategory = async (req: Request, res: Response) => {
  const { category } = req.params;
  try {
    const projects = await getProjectByCategoryDB(category);
    return res.status(200).json(projects);
  } catch (error) {
    if (error instanceof Error) return res.status(400).json(error.message);
  }
};
