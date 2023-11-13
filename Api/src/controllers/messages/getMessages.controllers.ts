import { Message } from "../../entities/message.entity";

export const getMessagesDB = async () => {
  const messages = await Message.find();
  return messages;
};
