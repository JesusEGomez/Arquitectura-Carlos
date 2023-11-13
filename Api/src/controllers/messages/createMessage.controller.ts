import { Message } from "../../entities/message.entity";

export const createMessageDB = async (
  name: string,
  message: string,
  phone: string,
  email: string
) => {
  const newMessage = new Message();
  newMessage.email = email;
  newMessage.name = name;
  newMessage.message = message;
  newMessage.phone = phone;
  await newMessage.save();
  return newMessage;
};
