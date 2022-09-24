import sendEmail from "./sendEmail.js";

const sendResetPasswordEmail = async ({ name, email, token, origin }) => {
    const resetURL = `${origin}/user/reset-password?token=${token}&email=${email}`
    const message = `
        <p>Please reset password by clicking on the following link: </p>
        <a href="${resetURL}">Reset Password</a>
    `

    return sendEmail({
        to: email,
        subject: 'Reset Password',
        html: `<h3>Hello, ${name}</h3>
        ${message}
        `
    })
}

export default sendResetPasswordEmail