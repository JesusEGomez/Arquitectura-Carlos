import { transporter } from "../../utilities/nodeMailer.utilities";

export const createMessageDB = async (
  name: string,
  message: string,
  phone: string,
  email: string
) => {
  console.log(name, message, phone, email);
  const info = await transporter.sendMail({
    from: "jesus.emanuel.gomez77@gmail.com",
    to: "jechumania77@gmail.com",
    subject: `Nuevo mensaje de ${name}`,
    html: `
    <h2>Este es un mensaje de ${message}</h2>
    <h3> Su teléfono es  ${email}</h3>
    <h3>Mensaje: ${phone}</h3>
    `,
  });

  return info;
};
