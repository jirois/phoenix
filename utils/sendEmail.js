import nodemailer from "nodemailer";
import { configNodemailerHotmail } from "./nodemailerConfig.js";

const sendEmail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport(configNodemailerHotmail);
  return transporter.sendMail({
    from: '"Phoenix Capital" <phoenixcapng@info.com',
    to,
    subject,
    html,
  });
};

export default sendEmail;
