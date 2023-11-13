import { Request, Response } from "express";
import { getMessagesDB } from "../../controllers/messages/getMessages.controllers";

export const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await getMessagesDB();
    return res.status(200).json(messages);
  } catch (error) {
    if (error instanceof Error) return res.status(400).json(error.message);
  }
};
