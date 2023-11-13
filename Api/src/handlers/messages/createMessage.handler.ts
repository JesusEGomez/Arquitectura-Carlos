import { Request, Response } from "express";
import { createMessageDB } from "../../controllers/messages/createMessage.controller";
export const createMessage = async (req: Request, res: Response) => {
  try {
    const { name, message, phone, email } = req.body;
    const newMessage = await createMessageDB(name, message, phone, email);
    return res.status(200).json(newMessage);
  } catch (error) {
    if (error instanceof Error) return res.status(400).json(error.message);
  }
};
