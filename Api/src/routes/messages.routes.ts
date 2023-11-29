import { Router } from "express";

import { createMessage } from "../handlers/messages/createMessage.handler";

const messagesRouter = Router();

messagesRouter.post("/", createMessage);

export default messagesRouter;
