import { Request, Response } from "express";
import { createProjectDB } from "../../controllers/projects/createProject.controller";

export const createProject = async (req: Request, res: Response) => {
  try {
    const { title, description, photo, category } = req.body;
    const project = await createProjectDB(title, description, photo, category);
    return res.status(200).json(project);
  } catch (error) {
    if (error instanceof Error) return res.status(400).json(error.message);
  }
};
