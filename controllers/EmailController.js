const nodemailer = require('nodemailer');
const transporter = require('../config/nodemailer');

const EmailController = {
  registrationEmail: function (name, email, callback) {
    if (email) {
      let emailOptions = {
        from: '"WorkChang" <workchang@outlook.com>', // sender address
        to: email,
        subject: 'Bienvenido ✔', // Subject line
        html: `<h2 style="text-align:center">Bienvenid@ ${name} a WorkChang </h2>
              <p>Esperamos que tu experiencia sea la mejor, visitamos <a href="http://workchang.herokuapp.com">haz clic aqui</a></p>` // html body
      };
      transporter.sendMail(emailOptions, (err, info) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, info);
        }
      });
    } else {
      callback(new Error('No enviaste un coreo valido :s'), null);
    }
  },
  repairOrderEmail: function (name, email, carData, date, qr, callback) {
    if (email) {
      let emailOptions = {
        from: '"WorkChang" <workchang.unimet@gmail.com>', // sender address
        to: email,
        subject: 'Tu Vehículo esta listo para ser recibido ✔', // Subject line
        html: `<h2 style="text-align:center">Hola ${name}</h2>
              <p>Tu ${carData} será recibido el ${date} en nuestros horarios</p>
              <p>recuerda descargar tu código QR y llevarlo a la cita. Puedes hacerlo aquí ${qr}</p>`
      };
      transporter.sendMail(emailOptions, (err, info) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, info);
        }
      });
    } else {
      callback(new Error('No enviaste un coreo valido :s'), null);
    }
  },
  contactEmail: function (email, msg, name, callback) {
    if (email && msg) {
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
        if (err) {
          callback(new Error('Tuvimos un error al enviar tu mensaje'), null);
        } else {
          callback(null, info)
        }
      });
    } else {
      callback(new Error('Revisa que tu correo o mensaje no esten vacios... '), null);
    }
  },
  notificacionOrdenCerrada: function (name, email, carData, callback) {
    if (email) {
      let emailOptions = {
        from: '"WorkChang" <workchang.unimet@gmail.com>', // sender address
        to: email,
        subject: 'Tu Vehículo esta listo para ser retirado ✔', // Subject line
        html: `<h2 style="text-align:center">Hola ${name}</h2>
              <p>Tu ${carData} ha sido reparado, puedes retirarlo en la brevedad de los posible</p>`
      };
      transporter.sendMail(emailOptions, (err, info) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, info);
        }
      });
    } else {
      callback(new Error('No enviaste un coreo valido :s'), null);
    }
  }
};

module.exports = EmailController;