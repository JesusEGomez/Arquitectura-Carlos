import { Response, Request } from "express";
import { getAllProjectsDB } from "../../controllers/projects/getAllProjects.controller";

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await getAllProjectsDB();
    return res.status(200).json(projects);
  } catch (error) {
    if (error instanceof Error) return res.status(400).json(error.message);
  }
};
