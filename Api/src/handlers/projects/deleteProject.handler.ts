import { Response, Request } from "express";
import { deleteProjectDB } from "../../controllers/projects/deleteProject.controller";

export const deleteProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await deleteProjectDB(Number(id));
    return res.status(200).json(response);
  } catch (error) {
    if (error instanceof Error) return res.status(400).json(error.message);
  }
};
