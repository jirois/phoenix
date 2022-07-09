import formData from "form-data";
import Mailgun from "mailgun.js";
const mailgun = new Mailgun(formData);

export const mg = mailgun.client({
  username: "api",
  key: "c2597a65bb838706f7af54be09554814-77985560-b135f49a",
});
