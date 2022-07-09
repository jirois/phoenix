import nodemailer from "nodemailer";
import { configNodemailerSendinBlue } from "./nodemailerConfig.js";

const sendEmail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport(configNodemailerSendinBlue);
  return transporter.sendMail({
    from: '"Phoenix Capital" <phoenixcapng@info.com',
    to,
    subject,
    html,
  });
};

export default sendEmail;
