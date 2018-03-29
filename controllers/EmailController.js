const nodemailer = require('nodemailer');
const transporter = require('../config/nodemailer');

const EmailController = {
  registrationEmail: function (email, callback) {
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
  repairOrderEmail: function (email, callback) {
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
  },
  contactEmail: function(email, msg, name, callback) {
    if(email && msg) {
      let emailOptions = {
        from: '"WorkChang" <workchang.unimet@gmail.com>', // sender address
        to: 'workchang.unimet@gmail.com',
        subject: 'Contact Form', // Subject line
        text: `nombre: ${name}, email: ${email}, mensaje: ${msg}`,
        html: `<h2> Correo de ${name}</h2>
                <p>${msg}</p>
                <a href="mailto:${email}">${email}</a>` 
      };
      transporter.sendMail(emailOptions, (err, info) => {
        if(err) {
          callback(new Error('Tuvimos un error al enviar tu mensaje'), null);
        } else {
          callback(null, info)
        }
      });
    } else {
      callback(new Error('Revisa que tu correo o mensaje no esten vacios... '), null);
    }
  },
  formEmail: function (callback) {
      let emailOptions = {
        from: '"WorkChang" <workchang.unimet@gmail.com>', // sender address
        to: 'workchang.unimet@gmail.com',
        subject: 'Bienvenido ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
      };
      transporter.sendMail(emailOptions, (err, info) => {
        if(err) {
          callback(err, null);
        } else {
          callback(null, info);
        }
      });
    
  }
};

module.exports = EmailController;