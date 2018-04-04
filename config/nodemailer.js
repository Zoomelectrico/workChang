const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        type: 'Login',
        user: 'workchang.unimet@gmail.com', // generated ethereal user
        pass: 'Paty1998' // generated ethereal password
    }
});

module.exports = transporter;    