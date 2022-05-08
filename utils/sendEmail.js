import { createTransport } from "nodemailer";
import configNodemailerAuth from "./nodemailerConfig.js";


const sendEmail = async ({ to, subject, html }) => {
    const transporter = createTransport(configNodemailerAuth)
    return transporter.sendMail({
        from: '"Phoenix Capital" <phoenixcapng@info.com',
        to,
        subject,
        html
    })
}

export default sendEmail;
