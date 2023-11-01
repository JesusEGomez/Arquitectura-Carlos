import { Request, Response } from "express";
import { getProjectByIdDB } from "../../controllers/projects/getProjetById.controller";

export const getProjectById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const project = await getProjectByIdDB(Number(id));
    return res.status(200).json(project);
  } catch (error) {
    if (error instanceof Error) return res.status(400).json(error.message);
  }
};
