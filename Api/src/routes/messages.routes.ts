import { Router } from "express";
import { getMessages } from "../handlers/messages/getMessages.handlers";
import { createMessage } from "../handlers/messages/createMessage.handler";

const messagesRouter = Router();

messagesRouter.post("/", createMessage);
messagesRouter.get("/", getMessages);

export default messagesRouter;
