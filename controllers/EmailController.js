const nodemailer = require('nodemailer');
const transporter = require('../config/nodemailer');

const EmailController = {
    registrationEmail: function(email, callback) {
        if (email) {
            let emailOptions = {
                from: '"WorkChang" <workchang@outlook.com>', // sender address
                to: email,
                subject: 'Bienvenido ✔', // Subject line
                text: 'Hello world?', // plain text body
                html: '<b>Hello world?</b>' // html body
            };
            transporter.sendMail(emailOptions, (err, info) => {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, info);
                }
            });
            transporter.close();
        } else {
            callback(new Error('No enviaste un coreo valido :s'), null);
        }
    },
    repairOrderEmail: function(email, callback) {
        if (email) {
            let emailOptions = {
                from: '"WorkChang" <workchang.unimet@gmail.com>', // sender address
                to: email,
                subject: 'Bienvenido ✔', // Subject line
                text: 'Hello world?', // plain text body
                html: '<b>Hello world?</b>' // html body
            };
        } else {
            callback(new Error('No enviaste un coreo valido :s'), null);
        }
    }
};

module.exports = EmailController;