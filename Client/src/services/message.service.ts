import axios from "axios";

const Url = import.meta.env.VITE_ENDPOINT;

export const createMessage = async (
  message: string,
  email: string,
  name: string,
  phone: string
) => {
  const response = await axios.post(`${Url}/message`, {
    message,
    email,
    name,
    phone,
  });
  return response;
};
