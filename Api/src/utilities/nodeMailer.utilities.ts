import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "jesus.emanuel.gomez77@gmail.com",
    pass: "hiiy scoy mfmc uaxx",
  },
  tls: {
    rejectUnauthorized: false,
  },
});
