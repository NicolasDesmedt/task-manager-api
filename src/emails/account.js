const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nicolas.desmedt@panenco.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nicolas.desmedt@panenco.com',
        subject: `Sorry to see you go ${name}!`,
        text: 'I hope you enjoyed our service, please let me know where we can improve.'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}