const API = process.env.MAILGUN_API;
import formData from "form-data";
import Mailgun from "mailgun.js";
const mailgun = new Mailgun(formData);

export const mg = mailgun.client({
  username: "api",
  key: API,
});
