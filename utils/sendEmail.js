import nodemailer from "nodemailer";
import { configNodemailerSendinBlue } from "./nodemailerConfig.js";
import dotenv from "dotenv";
dotenv.config();
import formData from "form-data";
import Mailgun from "mailgun.js";
const mailgun = new Mailgun(formData);

const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_APIKEY,
});

// const sendEmail = async ({ to, subject, html }) => {
//   const transporter = nodemailer.createTransport(configNodemailerSendinBlue);
//   return transporter.sendMail({
//     from: '"Phoenix Capital" <phoenixcapng@info.com',
//     to,
//     subject,
//     html,
//   });
// };

const sendEmail = async ({ to, subject, html }) => {
  return mg.messages.create(process.env.MAILGUN_DOMAIN, {
    from: "Jinncy Co <jinncyco@outlook.com>",
    to,
    subject,
    html,
  });
};

export default sendEmail;
