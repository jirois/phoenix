export const configNodemailerAuth = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: "jinncyapps@gmail.com",
    clientId:
      "365220036260-aj1hle8faa48cbu8bd4o2hcshhululbi.apps.googleusercontent.com",
    clientSecret: "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",
    refreshToken:
      "1//04tpjRUY1yTYmCgYIARAAGAQSNwF-L9Ir6U5ZnX-yo22pfiVWPHrn5VHcnxMEHzWdqL9HEG3Cht1bzyTm_kn-o5d1MQVUBNvU1k4",
    accessToken:
      "ya29.A0ARrdaM-hT_-bok-EpTv9Vr5fNqY-aBPk2NWy0P0GRaGfB2C0VcaV4OaKOzUcqSTp13l529nKIOCbxn32Nwy9ME9mh1AMTzJcWSyyfZcTgfynLjsZkyyqm1Lr1aHLl-HlnfqAYcFUCYlIrSCGqdoMr10Vjyfb",
  },
};

export const configNodemail = {
  host: process.env.HOST,
  service: process.env.SERVICE,
  port: Number(process.env.EMAIL_PORT),
  secure: Boolean(process.env.SECURE),
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
};
export const configNodemailer = {
  service: process.env.SERVICE,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
};

export const configNodemailerHotmail = {
  service: process.env.SERVICE1,
  auth: {
    user: process.env.USER1,
    pass: process.env.PASS1,
  },
};
export const configNodemailerSendinBlue = {
  host: "smtp-relay-sendinblue.com",
  port: 587,
  auth: {
    user: process.env.NAME,
    pass: process.env.KEY,
  },
};
